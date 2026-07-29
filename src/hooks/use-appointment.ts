"use client";

import {
  bookAppointment,
  getAppointments,
  getBookedTimeSlots,
  getUserAppointments,
  updateAppointmentStatus,
} from "@/lib/actions/appointments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAppointments() {
  const result = useQuery({
    queryKey: ["getAppointments"],
    queryFn: getAppointments,
  });

  return result;
}

export function useBookedTimeSlots(doctorId: string, date: string) {
  return useQuery({
    queryKey: ["getBookedTimeSlots"],
    queryFn: () => getBookedTimeSlots(doctorId!, date),
    enabled: !!doctorId && !!date, // only run query if both doctorId and date are provided
  });
}

export function useBookAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUserAppointments"] });
    },
    onError: (error) => console.error("Failed to book appointment:", error),
  });
}

// Get user-specific appointments
export function useUserAppointments() {
  const result = useQuery({
    queryKey: ["getUserAppointments"],
    queryFn: getUserAppointments,
  });

  return result;
}

export function useUpdateAppointmentStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAppointmentStatus,
    onMutate: async (newAppointmentStatus) => {
      // Cancel any outgoing refetches so they don't overwrite optimistic update
      await queryClient.cancelQueries({ queryKey: ["getAppointments"] });
      await queryClient.cancelQueries({ queryKey: ["getUserAppointments"] });

      // Snapshot previous values
      const previousAppointments = queryClient.getQueryData<any[]>(["getAppointments"]);
      const previousUserAppointments = queryClient.getQueryData<any[]>(["getUserAppointments"]);

      // Optimistically update admin appointments cache
      if (previousAppointments) {
        queryClient.setQueryData<any[]>(
          ["getAppointments"],
          previousAppointments.map((apt) =>
            apt.id === newAppointmentStatus.id
              ? { ...apt, status: newAppointmentStatus.status }
              : apt
          )
        );
      }

      // Optimistically update user appointments cache
      if (previousUserAppointments) {
        queryClient.setQueryData<any[]>(
          ["getUserAppointments"],
          previousUserAppointments.map((apt) =>
            apt.id === newAppointmentStatus.id
              ? { ...apt, status: newAppointmentStatus.status }
              : apt
          )
        );
      }

      return { previousAppointments, previousUserAppointments };
    },
    onError: (error, _variables, context) => {
      if (context?.previousAppointments) {
        queryClient.setQueryData(["getAppointments"], context.previousAppointments);
      }
      if (context?.previousUserAppointments) {
        queryClient.setQueryData(["getUserAppointments"], context.previousUserAppointments);
      }
      console.error("Failed to update appointment:", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["getAppointments"] });
      queryClient.invalidateQueries({ queryKey: ["getUserAppointments"] });
    },
  });
}