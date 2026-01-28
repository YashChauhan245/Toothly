"use client";

import {
  Calendar,
  CreditCard,
  Tag,
  X,
  ArrowLeft,
  Phone,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


type View = "menu" | "pricing" | "callback";

export default function HelpDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [view, setView] = useState<View>("menu");

  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl bg-background border shadow-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {view !== "menu" && (
              <button
                onClick={() => {
                  setView("menu");
                  setSubmitted(false);
                }}
                className="p-1 rounded-md hover:bg-muted"
              >
                <ArrowLeft size={18} />
              </button>
            )}

            <div>
              <h2 className="text-lg font-semibold">
                {view === "menu" && "Need Help?"}
                {view === "pricing" && "Treatment Pricing"}
                {view === "callback" && "Request a Callback"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {view === "menu" && "Choose an option below"}
                {view === "pricing" && "View available treatments and prices"}
                {view === "callback" && "We’ll call you at your preferred time"}
              </p>
            </div>
          </div>

          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* MENU */}
        {view === "menu" && (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setView("callback")}
              className="flex items-center gap-3 border rounded-lg p-4 hover:bg-muted"
            >
              <Phone /> Request Callback
            </button>

            <button
              onClick={() => {
                router.push("/appointments");
                onClose();
              }}
              className="flex items-center gap-3 border rounded-lg p-4 hover:bg-muted"
            >
              <Calendar /> Appointment
            </button>

            <button
              onClick={() => setView("pricing")}
              className="flex items-center gap-3 border rounded-lg p-4 hover:bg-muted"
            >
              <Tag /> Treatment Pricing
            </button>

            <button
              onClick={() => {
                router.push("/pro");
                onClose();
              }}
              className="flex items-center gap-3 border rounded-lg p-4 hover:bg-muted"
            >
              <CreditCard /> Subscription
            </button>

            {/* Other Query - Email */}
            <button
            onClick={() =>
                window.open(
                "mailto:yashchau.work@gmail.com?subject=Toothly Support Query",
                "_blank"
                )
            }
            className="flex items-center justify-center gap-3 border rounded-lg p-4 hover:bg-muted col-span-2"
            >
            <Mail className="w-5 h-5" />
            <span>Other Query</span>
            </button>
          </div>
        )}

        {/* PRICING */}
        {view === "pricing" && (
          <div className="space-y-4">
            {[
              { name: "Regular Checkup", time: "60 min", price: "$120" },
              { name: "Teeth Cleaning", time: "45 min", price: "$90" },
              { name: "Consultation", time: "30 min", price: "$75" },
              { name: "Emergency Visit", time: "30 min", price: "$150" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-xl border p-4 flex justify-between"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
                <span className="text-primary font-semibold">
                  {item.price}
                </span>
              </div>
            ))}

            <div className="flex justify-end pt-4">
              <button
                onClick={() => {
                  router.push("/appointments");
                  onClose();
                }}
                className="px-5 py-2 rounded-md bg-primary text-white hover:opacity-90"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}

        {/* CALLBACK */}
        {view === "callback" && (
          <div className="space-y-5">
            {!submitted ? (
              <>
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Preferred Time</label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {[
                      "Morning (9–12)",
                      "Afternoon (12–4)",
                      "Evening (4–8)",
                    ].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`rounded-md border px-3 py-2 text-sm transition ${
                          time === slot
                            ? "bg-primary text-white"
                            : "hover:bg-muted"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!phone || !time}
                    className="px-5 py-2 rounded-md bg-primary text-white disabled:opacity-50"
                  >
                    Request Callback
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-lg font-medium">✅ Callback Requested</p>
                <p className="text-sm text-muted-foreground mt-1">
                  We’ll call you at <strong>{phone}</strong> during{" "}
                  <strong>{time}</strong>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


