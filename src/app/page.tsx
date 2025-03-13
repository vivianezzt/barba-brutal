import OurProfessionals from "@/components/professional/OurProfessionals";
import OurServices from "@/components/service/OurServices";
import Footer from "@/components/shared/Footer";
import HeaderBar from "@/components/shared/HeaderBar";
import SectionBackground from "@/components/shared/SecctionBackground";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeaderBar />
      <SectionBackground image="/banners/servicos.webp">
        <OurServices />
      </SectionBackground>
       <SectionBackground image="/banners/profissionais.webp">
        <OurProfessionals />
      </SectionBackground>
      <Footer />
    </div>
  );
}
