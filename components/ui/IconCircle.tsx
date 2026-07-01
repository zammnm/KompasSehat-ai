import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
}

export default function IconCircle({
  icon: Icon,
}: Props) {
  return (
    <div className="
      flex h-16 w-16 items-center justify-center
      rounded-2xl
      bg-gradient-to-br
      from-blue-100
      to-violet-100
      transition-all
      duration-300
      group-hover:scale-110
      group-hover:rotate-3
    ">
      <Icon
        size={30}
        className="text-blue-600"
      />
    </div>
  );
}