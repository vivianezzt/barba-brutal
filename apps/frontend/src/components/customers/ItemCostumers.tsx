export interface ItemCustomersProps {
  name: string
  testimony: string
}
export default function ItemCustomers(props: ItemCustomersProps) {
  const { name, testimony } = props
  return (
    <div className="">
      <p className="text-xl font-bold text-white">{name}</p>
      <p className="my-4 text-zinc-300">{testimony}</p>
    </div>
  )
}
