"use client";

export default function DashboardStrip() {
  return (
    <section className="px-8 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* IDEA OF THE WEEK */}
        <div
          className="
            rounded-[28px]
            border border-orange-500/20
            bg-white/5
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(255,122,0,0.08)]
            p-8
          "
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-orange-400 font-semibold tracking-[0.2em] text-sm uppercase">
              Idea Of The Week
            </p>

            <button className="text-gray-400 text-sm hover:text-orange-400">
              View All
            </button>
          </div>

          <div className="rounded-2xl bg-orange-500/10 border border-orange-500/15 p-6">
            <div className="h-40 rounded-2xl bg-black/30 mb-6 flex items-center justify-center text-gray-500">
              Startup Preview
            </div>

            <h3 className="text-2xl font-bold text-white">
              GreenCharge
            </h3>

            <p className="text-gray-300 mt-3">
              Portable solar charging station for rural communities.
            </p>

            <p className="text-orange-300 mt-4 text-sm">
              By Student Innovator
            </p>
          </div>
        </div>

        {/* CATEGORIES */}
        <div
          className="
            rounded-[28px]
            border border-orange-500/20
            bg-white/5
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(255,122,0,0.08)]
            p-8
          "
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-orange-400 font-semibold tracking-[0.2em] text-sm uppercase">
              Explore Categories
            </p>

            <button className="text-gray-400 text-sm hover:text-orange-400">
              View All
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              "AI & ML",
              "HealthTech",
              "FinTech",
              "EdTech",
              "Sustainability",
              "Robotics",
              "Social Impact",
              "Other",
            ].map((tag) => (
              <button
                key={tag}
                className="
                  rounded-xl
                  border border-orange-500/20
                  bg-orange-500/10
                  px-5 py-3
                  text-white
                  hover:bg-orange-500/20
                  transition
                "
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED IDEAS */}
        <div
          className="
            rounded-[28px]
            border border-orange-500/20
            bg-white/5
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(255,122,0,0.08)]
            p-8
          "
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-orange-400 font-semibold tracking-[0.2em] text-sm uppercase">
              Featured Ideas
            </p>

            <button className="text-gray-400 text-sm hover:text-orange-400">
              View All
            </button>
          </div>

          <div className="rounded-2xl bg-black/30 border border-orange-500/10 p-6">
            <div className="h-36 rounded-2xl bg-orange-500/10 mb-6 flex items-center justify-center text-gray-500">
              Featured Preview
            </div>

            <h3 className="text-2xl font-bold text-white">
              MediConnect
            </h3>

            <p className="text-gray-300 mt-3">
              AI-powered healthcare assistance platform.
            </p>

            <div className="flex gap-6 mt-5 text-sm text-gray-400">
              <span>👍 128</span>
              <span>💬 24</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}