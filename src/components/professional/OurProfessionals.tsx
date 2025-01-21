/* eslint-disable react/react-in-jsx-scope */
import professionals from "@/data/constants/professionals";
import ItemProfessional from "./ItemProfessional";
import TitleSection from "../shared/TitleSection";

export default function OurProfessionals() {
  return (
    <div className="flex flex-col gap-y-16">
      <TitleSection
        tag="Time"
        main="Nossos Brutos"
        secondary="Só os mais brabos estão aqui! Temos o orgulho de ter os melhores profissionais do Brasil!"
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {professionals.map((professional) => (
          <ItemProfessional key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  );
}
