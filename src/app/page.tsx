
import OurCustomers from "@/components/customers/OurCustomres";
import Slogan from "@/components/landing/Slogan";
import OurProfessionals from "@/components/professional/OurProfessionals";
import OurServices from "@/components/service/OurServices";
import Footer from "@/components/shared/Footer";
import SectionBackground from "@/components/shared/SecctionBackground";



export default function Home() {
  return (
    <div className="flex flex-col">
      <Slogan />
      <SectionBackground image="/banners/servicos.webp">
        <OurServices />
      </SectionBackground>

      <SectionBackground image="/banners/profissionais.webp">
        <OurProfessionals />
      </SectionBackground>

      <SectionBackground image="/banners/clientes.webp">
        <OurCustomers />
      </SectionBackground>
      
    <Footer />
    </div>
  );
}