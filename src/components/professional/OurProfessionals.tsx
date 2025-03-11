import professionals from "@/data/constants/professionals";
import ItemProfessional from "./ItemProfessional";
import Professional from "@/core/professional/Professional";

export default function OurProfessionals(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {professionals.map((professional: Professional) => (
                <ItemProfessional key={professional.id} professional={professional} />
            ))}
        </div>
    )
}