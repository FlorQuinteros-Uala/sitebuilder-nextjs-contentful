import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";

export const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export const nibPro = localFont({
  src: "./NibPro-Italic.woff2",
});
