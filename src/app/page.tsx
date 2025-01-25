import Hero from "./components/Hero";
import MostPick from "./components/MostPick";
import Backyard from "./components/Backyard";
import Kitchen from "./components/Kitchen";
import LargeRooms from "./components/LargeRooms";
import Family from "./components/Family";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-24">
        <Hero />
      </div>
      <div className="mt-24">
        <MostPick />
      </div>
      <div className="mt-24">
        <Backyard />
      </div>
      <div className="mt-24">
        <LargeRooms />
      </div>
      <div className="mt-8">
        <Kitchen />
      </div>
      <div className="mt-24">
        <Family />
      </div>
    </div>
  );
}
