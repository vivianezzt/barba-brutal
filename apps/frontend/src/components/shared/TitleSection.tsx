/* eslint-disable react/react-in-jsx-scope */
export interface TitleSectionProps {
  main: string;
  secondary: string;
  tag?: string;
}
export default function TitleSection(props: TitleSectionProps) {
  return (
    <div className="flex flex-col items-center">
      {props.tag && (
        <div className="mb-4 rounded-md bg-zinc-600 px-4 py-1.5 text-sm font-black md:text-base">
          {props.tag}
        </div>
      )}
      <h2 className="bebas-font text-gradient text-2xl font-black sm:text-4xl md:text-5xl">
        {props.main}
      </h2>
      <h3 className="px-7 text-center text-zinc-400 md:w-[450px] md:px-0">
        {props.secondary}
      </h3>
    </div>
  );
}
