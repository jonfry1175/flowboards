import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 *
 * @utils for neobrutalism UI
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
