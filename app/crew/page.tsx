import CrewHero from "@/sections/CrewHero";

import FeaturedCrewCard from "@/components/FeaturedCrewCard";
import CrewCard from "@/components/CrewCard";
import CinematicHeading from "@/components/CinematicHeading";

import {
    featuredCrew,
    prTeam,
    marketingTeam,
    webTeam,
    eventManagers,
    coordinationTeam,
} from "@/lib/crewdata";

import ScrollReveal from "@/components/ScrollReveal";

export default function CrewPage() {
    return (
        <main className="relative overflow-hidden">

            {/* HERO */}
            <CrewHero />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-32 px-6 pb-32 md:px-10">

                {/* FACULTY ADVISOR */}
                <section id="faculty-section">
                    <ScrollReveal className="mb-10">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            THE MENTOR BEHIND THE MISSION
                        </p>

                        <h2 className="text-4xl font-bold text-white md:text-5xl">
                            Guiding The Vision
                        </h2>

                    </ScrollReveal>

                    <FeaturedCrewCard {...featuredCrew[0]} />
                </section>

                {/* PRESIDENT */}
                <section>
                    <ScrollReveal className="mb-10">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            LEADING THE MOVEMENT
                        </p>

                        <CinematicHeading
                            first="The Face"
                            second="Of E-Cell"
                            className="text-4xl md:text-5xl font-bold text-white"
                            inline
                        />

                    </ScrollReveal>

                    <FeaturedCrewCard {...featuredCrew[1]} reverse />
                </section>

                {/* STRATEGIC HEAD */}
                <section>
                    <ScrollReveal className="mb-10">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            TURNING IDEAS INTO DIRECTION
                        </p>

                        <CinematicHeading
                            first="Strategy"
                            second="& Execution"
                            className="text-4xl md:text-5xl font-bold text-white"
                            inline
                        />

                    </ScrollReveal>

                    <FeaturedCrewCard {...featuredCrew[2]} />
                </section>

                {/* PR TEAM */}
                <section>

                    <ScrollReveal className="mb-12 text-center">

                        <h2 className="text-3xl font-bold text-white md:text-4xl">
                            PR Team
                        </h2>

                    </ScrollReveal>

                    <div className="grid gap-8 md:grid-cols-2">

                        {prTeam.map((member, index) => (
                            <CrewCard key={index} {...member} centerTitle />
                        ))}

                    </div>

                </section>

                {/* MARKETING TEAM */}
                <section>

                    <ScrollReveal className="mb-12 text-center">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            Designing the E-Cell identity
                        </p>

                        <CinematicHeading
                            first="Marketing & Branding"
                            second="Team"
                            className="text-3xl md:text-4xl font-bold text-white"
                            inline
                        />

                    </ScrollReveal>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {marketingTeam.map((member, index) => (
                            <CrewCard key={index} {...member} centerTitle />
                        ))}

                    </div>

                </section>

                {/* WEB TEAM */}
                <section>

                    <ScrollReveal className="mb-12 text-center">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            Building our digital foundation
                        </p>

                        <CinematicHeading
                            first="Web & Tech"
                            second="Team"
                            className="text-3xl md:text-4xl font-bold text-white"
                            inline
                        />

                    </ScrollReveal>

                    <div className="grid gap-8 md:grid-cols-2">

                        {webTeam.map((member, index) => (
                            <CrewCard key={index} {...member} centerTitle />
                        ))}

                    </div>

                </section>

                {/* EVENT MANAGERS */}
                <section>

                    <ScrollReveal className="mb-12 text-center">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            Crafting unforgettable experiences
                        </p>

                        <CinematicHeading
                            first="Event"
                            second="Managers"
                            className="text-3xl md:text-4xl font-bold text-white"
                            inline
                        />

                    </ScrollReveal>

                    <div className="grid gap-8 md:grid-cols-2">

                        {eventManagers.map((member, index) => (
                            <CrewCard key={index} {...member} centerTitle />
                        ))}

                    </div>

                </section>

                {/* STARTUP ASSISTANCE */}
                <section>

                    <ScrollReveal className="mb-10">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            FUELING STUDENT FOUNDERS
                        </p>

                        <CinematicHeading
                            first="Startup"
                            second="Assistance"
                            className="text-4xl md:text-5xl font-bold text-white"
                            inline
                        />

                    </ScrollReveal>

                    <FeaturedCrewCard {...featuredCrew[3]} reverse />
                </section>

                {/* TREASURER */}
                <section>

                    <ScrollReveal className="mb-10">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            POWERING EVERY INITIATIVE
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Treasurer
                        </h2>

                    </ScrollReveal>

                    <FeaturedCrewCard {...featuredCrew[4]} />
                </section>

                {/* COORDINATION TEAM */}
                <section>

                    <ScrollReveal className="mb-12 text-center">

                        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-300">
                            Aligning every initiative
                        </p>

                        <CinematicHeading
                            first="Coordination"
                            second="Team"
                            className="text-3xl md:text-4xl font-bold text-white"
                            inline
                        />

                    </ScrollReveal>

                    <div className="grid gap-8 md:grid-cols-2">

                        {coordinationTeam.map((member, index) => (
                            <CrewCard key={index} {...member} centerTitle />
                        ))}

                    </div>

                </section>

            </div>

        </main>
    );
}