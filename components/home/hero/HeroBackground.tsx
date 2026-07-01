export default function HeroBackground() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Blue Glow */}
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-500/15 blur-[140px]" />
  
        {/* Purple Glow */}
        <div className="absolute -bottom-52 -right-40 h-[700px] w-[700px] rounded-full bg-violet-500/15 blur-[160px]" />
  
        {/* Center Light */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />
  
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
            linear-gradient(to right,#0f172a 1px,transparent 1px),
            linear-gradient(to bottom,#0f172a 1px,transparent 1px)
          `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>
    );
  }