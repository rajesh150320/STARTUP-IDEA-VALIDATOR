export default function EmptyState() {
  return (
    <section className="glass-panel rounded-[32px] p-10 text-center">
      <div className="mx-auto mb-5 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 shadow-2xl shadow-cyan-500/10">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300" />
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-white">Your dashboard will appear here</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
        Submit the idea details to generate the score meter, validation metrics, suggestions, and
        market signal overview.
      </p>
    </section>
  );
}
