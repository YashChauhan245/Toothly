import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// generate avatars for profile pic
export function generateAvatar(
  name: string,
  gender: "MALE" | "FEMALE"
) {
  const seed = encodeURIComponent(name?.trim() || "Doctor");
  const skinColor = "f2d6cb";
  // Subtle professional gender-based colors
  const backgroundColor =
    gender === "FEMALE" ? "fde7f3" : "e3f2fd"; // soft pink / medical blue
  const clothingColor =
    gender === "FEMALE" ? "c2185b" : "1976d2"; // magenta / blue

  return `https://api.dicebear.com/9.x/toon-head/svg?seed=${seed}&skinColor=${skinColor}&backgroundColor=${backgroundColor}&clothingColor=${clothingColor}`;
}





// phone formatting function for US numbers - ai generated 🎉
export const formatPhoneNumber = (value: string = ""): string => {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("91")) {
    digits = digits.slice(2);
  }
  digits = digits.slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 5) {
    return `(+91) ${digits}`;
  }
  return `(+91) ${digits.slice(0, 5)}-${digits.slice(5)}`;
};

