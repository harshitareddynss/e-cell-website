"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

interface CrewCardProps {
    name?: string;
    role?: string;
    image?: string;
}

export default function CrewCard({
    name = "Crew Member",
    role = "Team Role",
}: CrewCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="group relative overflow-hidden rounded-[32px] border border-orange-500/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_55px_rgba(255,115,0,0.12)]"
        >

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

            </div>

            {/* IMAGE AREA */}
            <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-b border-orange-500/10 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-black">

                {/* PLACEHOLDER */}
                <div className="flex flex-col items-center text-center">

                    <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 text-4xl text-orange-200 shadow-[0_0_35px_rgba(255,115,0,0.12)]">

                        👤

                    </div>

                    <p className="text-sm uppercase tracking-[0.25em] text-orange-200/70">

                        Photo
                        <br />
                        Coming Soon

                    </p>

                </div>

            </div>

            {/* CONTENT */}
            <div className="relative z-10 p-7">

                {/* ROLE */}
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-orange-300">

                    {role}

                </p>

                {/* NAME */}
                <h3 className="text-2xl font-bold leading-tight text-white">

                    {name}

                </h3>

                {/* LINKEDIN */}
                <div className="mt-7">

                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/20 hover:scale-110">

                        <Link className="h-4 w-4" />

                    </button>

                </div>

            </div>

        </motion.div>
    );
}