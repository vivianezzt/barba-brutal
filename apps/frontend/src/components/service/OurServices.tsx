import services from "@/data/constants/services";
import ItemService from "./ItemService";
import TitleSection from "../shared/TitleSection";

export default function OurServices() {
  return (
    <div className="flex flex-col gap-y-16">
      <TitleSection
        tag="Serviços"
        main="Do Clássico ao Rock!"
        secondary="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som do rock pesado!"
      />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {services.map((service) => (
            <ItemService key={service.id} service={service} />
        ))}
    </div>
    </div>
  );
}