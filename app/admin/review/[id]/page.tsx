interface ReviewPageProps {
    params: { id: string };
}

export default function ReviewPage({ params }: ReviewPageProps) {
    return (
        <main className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
            <section className="mx-auto max-w-6xl space-y-6 rounded-[32px] border border-orange-500/10 bg-white/5 p-10 shadow-[0_0_60px_rgba(255,115,0,0.09)]">
                <h1 className="text-4xl font-semibold">Review Submission</h1>
                <p className="text-lg text-zinc-300">Reviewing submission ID: {params.id}</p>
            </section>
        </main>
    );
}

