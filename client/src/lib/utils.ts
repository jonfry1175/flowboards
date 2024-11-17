import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 *
 * @utils for neobrutalism UI
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
