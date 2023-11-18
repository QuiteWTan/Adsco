import DisplayFurniture from "@/components/DisplayFurniture";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Steps/>
      <DisplayFurniture/>
      <GetApp/>
    </div>
  )
}
