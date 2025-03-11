import services from "@/data/constants/services";
import ItemService from "./ItemService";

export default function OurServices() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {services.map((service) => (
            <ItemService key={service.id} service={service} />
        ))}
    </div>
  );
}