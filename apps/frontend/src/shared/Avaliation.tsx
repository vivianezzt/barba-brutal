/* eslint-disable react/react-in-jsx-scope */
import { IconStar, IconStarFilled } from "@tabler/icons-react";

export interface AvaliationProps {
  note: number;
  qtdeAvaliation: number;
}
export default function Avaliation(props: AvaliationProps) {
  const { note, qtdeAvaliation } = props;
  const star = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    if (note >= value) {
      return <IconStarFilled key={i} size={18} />;
    } else if (note > value - 1) {
      return <IconStarFilled key={i} size={18} />;
    } else {
      return <IconStar key={i} size={18} />;
    }
  });
  return (
        <div className="flex items-end gap-2">
            <div className="flex items-center gap-1 text-yellow-400">{star}</div>
            <div className="flex text-xs text-zinc-300">({qtdeAvaliation})</div>
        </div>
    )
}