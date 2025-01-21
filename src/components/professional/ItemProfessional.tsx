/* eslint-disable react/react-in-jsx-scope */
import Professional from "@/core/professional/Professional";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Avaliation from "../shared/Avaliation";

export interface ItemProfessionalProps {
  professional: Professional;
}
export default function ItemService(props: ItemProfessionalProps) {
  const { professional } = props;
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-zinc-800">
      <div className="relative h-72 w-full">
        <Image
          src={professional.imageURL}
          fill
          alt={professional.name}
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-5 p-4">
        <span className="bebas-font text-2xl font-black">
          {professional.name}
        </span>
        <span className="text-sm text-zinc-400">
          {professional.description}
        </span>
        <Avaliation
          note={professional.avaliation}
          qtdeAvaliation={professional.qtdeAvaliation}
        />
        <div className="flex gap-2 text-zinc-500">
          <IconBrandYoutube stroke={1} size={24} />
          <IconBrandThreads stroke={1} size={24} />
          <IconBrandInstagram stroke={1} size={24} />
          <IconBrandLinkedin stroke={1} size={24} />
          <IconBrandWhatsapp stroke={1} size={24} />
        </div>
      </div>
    </div>
  );
}
