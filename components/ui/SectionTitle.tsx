import GradientText from "./GradientText";

interface Props {
  badge: string;
  title: string;
  gradient?: string;
  description: string;
}

export default function SectionTitle({
  badge,
  title,
  gradient,
  description,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
        {title}{" "}
        {gradient && (
          <GradientText>
            {gradient}
          </GradientText>
        )}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>

    </div>
  );
}