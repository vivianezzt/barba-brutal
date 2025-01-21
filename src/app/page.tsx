/* eslint-disable react/react-in-jsx-scope */
import OurCustomers from "@/components/customer/OurCustomers";
import Slogan from "@/components/landing/Slogan";
import OurProfessionals from "@/components/professional/OurProfessionals";
import OurServices from "@/components/service/OurServices";
import Footer from "@/components/shared/Footer";
import SectionBackground from "@/components/shared/SectionBackground";

export default function Landing() {
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
