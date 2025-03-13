import OurProfessionals from "@/components/professional/OurProfessionals";
import OurServices from "@/components/service/OurServices";
import SectionBackground from "@/components/shared/SecctionBackground";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>Landing-page</h1>
      <SectionBackground image="/banners/servicos.webp">
        <OurServices />
      </SectionBackground>
       <SectionBackground image="/banners/profissionais.webp">
        <OurProfessionals />
      </SectionBackground>
    </div>
  );
}
