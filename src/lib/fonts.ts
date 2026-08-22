import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

// Display: Fraunces (variable) — editorial character at large sizes.
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
});

// Body: IBM Plex Sans — technical, highly legible.
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

// Technical: IBM Plex Mono — labels, tags, genuine code/notation only.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});
