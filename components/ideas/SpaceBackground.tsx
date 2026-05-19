"use client";

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:60px_60px] opacity-30" />

      {/* meteor 1 */}
      <div
        className="
          absolute top-24 right-32
          w-40 h-[2px]
          bg-gradient-to-r from-orange-500 to-transparent
          rotate-[-35deg]
          float-slow
        "
      />

      {/* meteor glow */}
      <div
        className="
          absolute top-24 right-32
          w-3 h-3
          rounded-full
          bg-orange-400
          shadow-[0_0_20px_rgba(255,122,0,0.8)]
          float-slow
        "
      />

      {/* meteor 2 */}
      <div
        className="
          absolute bottom-32 left-28
          w-36 h-[2px]
          bg-gradient-to-r from-orange-500 to-transparent
          rotate-[35deg]
          float-medium
        "
      />

      <div
        className="
          absolute bottom-32 left-28
          w-3 h-3
          rounded-full
          bg-orange-400
          shadow-[0_0_20px_rgba(255,122,0,0.8)]
          float-medium
        "
      />
    </div>
  );
}