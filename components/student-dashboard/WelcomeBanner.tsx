export default function WelcomeBanner() {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-[32px]
        border border-orange-500/20
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_45px_rgba(255,122,0,0.08)]
        p-10
        min-h-[280px]
      "
    >
      {/* floating glow */}
      <div className="absolute top-16 right-32 w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
      <div className="absolute top-28 right-52 w-1 h-1 bg-orange-300 rounded-full animate-pulse" />

      {/* shooting line */}
      <div className="absolute top-16 right-40 w-40 h-[2px] bg-gradient-to-r from-orange-500 to-transparent rotate-[-35deg]" />

      {/* planet glow */}
      <div className="absolute -bottom-32 right-[-100px] w-[500px] h-[220px] rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 max-w-xl">
        <p className="text-orange-400 uppercase tracking-[0.35em] text-sm">
          WELCOME BACK
        </p>

        <h2 className="text-6xl font-black text-white mt-4">
          Harshita 🚀
        </h2>

        <p className="text-gray-300 mt-5 text-xl leading-relaxed">
          Track your ideas, monitor progress, and turn your innovation into impact.
        </p>
      </div>
    </div>
  );
}