"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

interface FeaturedCrewCardProps {
    name?: string;
    role?: string;
    description?: string;
    image?: string;
    reverse?: boolean;
}

export default function FeaturedCrewCard({
    name = "Crew Member",
    role = "Leadership Role",
    description = "Driving innovation, leadership and experiences that shape the E-Cell journey beyond classrooms.",
    image,
    reverse = false,
}: FeaturedCrewCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-[38px] border border-orange-500/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:border-orange-500/30"
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />
            </div>

            <div
                className={`grid grid-cols-1 items-center lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
            >

                {/* IMAGE SIDE */}
                <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border-b border-orange-500/10 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-black lg:border-b-0 lg:border-r">

                    {/* PLACEHOLDER */}
                    <div className="flex flex-col items-center text-center">

                        <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 text-5xl text-orange-200 shadow-[0_0_40px_rgba(255,115,0,0.15)]">

                            👤

                        </div>

                        <p className="text-lg tracking-[0.25em] text-orange-200/80 uppercase">

                            Photo
                            <br />
                            Coming Soon

                        </p>

                    </div>

                </div>

                {/* CONTENT SIDE */}
                <div className="relative z-10 flex flex-col justify-center p-10 md:p-14">

                    {/* ROLE */}
                    <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300 whitespace-nowrap">

                        {role}

                    </p>

                    {/* NAME */}
                    <h2 className="text-4xl font-bold leading-tight text-white whitespace-nowrap md:text-5xl">

                        {name}

                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">

                        {description}

                    </p>

                    {/* SOCIAL */}
                    <div className="mt-10">

                        <button className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/20 hover:scale-110">

                            <Link className="h-5 w-5" />

                        </button>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}