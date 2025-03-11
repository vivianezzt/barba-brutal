import OurProfessionals from "@/components/professional/OurProfessionals";
import OurServices from "@/components/service/OurServices";
import SectionBackground from "@/components/shared/SectionBackground";


export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl">Lading page</h1>
      <SectionBackground image="/banners/servicos.webp">
        <OurServices />
      </SectionBackground>

      <SectionBackground image="/banners/profissionais.webp">
        <OurProfessionals />
      </SectionBackground>

    </div>
  );
}
