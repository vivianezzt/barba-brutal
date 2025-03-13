import Professional from "@/core/professional/Professional";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";
import Image from "next/image"
import Avaliation from "../shared/Avaliation";

export interface ItemProfessionalProps {
    professional: Professional;
}

export default function ItemProfessional(props: ItemProfessionalProps) {
    const { professional } = props;
    return (
        <div className="flex flex-col rounded-xl bg-zinc-900 overflow-hidden">
            <div className="relative h-72 w-full">
            <Image 
                src={professional.imageURL} 
                alt={professional.name} 
                fill className="object-cover object-top"/>
            </div>
            <div className="flex flex-col p-4 gap-5">
                <span className="text-2xl font-black">{professional.name}</span>
                <span className="text-sm text-zinc-400">{professional.description}</span>
                <Avaliation note={professional.avaliation} qtyAvaliations={professional.avaliationCount} />
                <div className="flex gap-3 text-zinc-300">
                    <IconBrandYoutube stroke={1} />
                    <IconBrandInstagram stroke={1} />
                    <IconBrandLinkedin stroke={1} />
                    <IconBrandWhatsapp stroke={1} />
                </div>
            </div>
        </div>
    );
}