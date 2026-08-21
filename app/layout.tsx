import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"The Black History Codex",description:"Explore the people, civilizations, movements, and ideas that shaped the Black experience across centuries and continents.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},openGraph:{title:"The Black History Codex",description:"Knowledge preserved. Stories reclaimed.",type:"website"},twitter:{card:"summary_large_image",title:"The Black History Codex",description:"Knowledge preserved. Stories reclaimed."}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
