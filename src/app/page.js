import About_Us from "@/Components/Home/About_Us";
import Appointment from "@/Components/Home/Appointment";
import Backseat from "@/Components/Home/Backseat";
import Departments from "@/Components/Home/Departments";
import Departments2 from "@/Components/Home/Departments2";
import Hero from "@/Components/Home/Hero";
import Latest from "@/Components/Home/Latest";
import Reviews from "@/Components/Home/Reviews";
import Values from "@/Components/Home/Values";

export default function Home() {
  return (
    <>
     <Hero/>
     <Values/>
     <About_Us/>
     <Departments/>
     <Departments2/>
     <Reviews />
     <Backseat/>
     <Latest/>
     <Appointment/>

    </>
  );
}
