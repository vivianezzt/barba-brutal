import OurProfessionals from "@/components/professional/OurProfessionals";
import OurServices from "@/components/service/OurServices";


export default function Home() {
  return (
   <div className="flex flex-col gap-10 container">
    <h1 className="text-6xl py-20">Lading page</h1>
    <OurServices />
    <OurProfessionals />
   </div>
  );
}
