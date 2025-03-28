
import customers from "@/data/constants/customers";
import TitleSection from "../shared/TitleSection";
import { LayoutGrid } from "../ui/LayoutGrid";
import ItemCustomers from "./ItemCostumers";

export default function OurCustomers() {
  const classes = [
    "md:col-span-2",
    "col-span-1",
    "col-span-1",
    "md:col-span-2",
  ];
  const cards =
    customers && Array.isArray(customers)
      ? customers.map((customer, i) => {
          return {
            id: customer.id,
            content: (
              <ItemCustomers
                name={customer.name}
                testimony={customer.testimony}
              />
            ),
            className: classes[i % classes.length],
            thumbnail: customer.imageURL,
          };
        })
      : [];

  return (
    <div className="container flex flex-col items-center gap-16">
      <TitleSection
        tag="Clientes"
        main="Quem Manda Aqui"
        secondary="Nossos clientes são os chefes! Aqui, eles mandam, desmandam e ainda saem com estilo de rockstar!"
      />
      <div className="h-[900px] w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}