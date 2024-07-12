import Image from "next/image";
import Layer1 from "./components/Layer1"

export default function Home() {
  return (
    <main className="relative h-[100vh] max-w-[100%] w-screen">
      <Layer1 />
    </main>
  );
}
