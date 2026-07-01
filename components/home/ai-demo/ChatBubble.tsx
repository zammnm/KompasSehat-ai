interface Props {
  message: string;
  ai?: boolean;
}

export default function ChatBubble({
  message,
  ai = false,
}: Props) {
  return (
    <div
      className={`flex ${
        ai ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-3xl px-5 py-3 text-sm shadow ${
          ai
            ? "bg-slate-100 text-slate-700"
            : "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}