'use client'
import Image from "next/image";
import Layer1 from "./components/Layer1"
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

export default function Home() {
  return (
    <main>
      <DesktopContent />
      <MobileContent />
    </main>
  );
}
