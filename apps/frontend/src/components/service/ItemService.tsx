/* eslint-disable react/react-in-jsx-scope */
import Service from "@/core/service/Service";
import Image from "next/image";

export interface ItemServiceProps {
  service: Service;
}
export default function ItemService(props: ItemServiceProps) {
  const { service } = props;
  return (
    <div className="flex overflow-hidden rounded-xl bg-zinc-800 shadow-lg">
      <Image
        src={service.imageURL}
        width={150}
        height={150}
        alt={service.name}
        className="object-cover"
      />
      <div className="flex flex-col gap-2 p-5">
        <span className="black bebas-font text-xl">{service.name}</span>
        <span className="flex-1 text-xs text-zinc-400">
          {service.description}
        </span>
        <span className="bold bebas-font text-lg">
          R$ {service.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
