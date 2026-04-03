import SectionCard from './SectionCard';

export default function TrendPanel({ analyses }) {
  if (!analyses.length) {
    return (
      <SectionCard
        eyebrow="Improvement"
        title="Improvement over time"
        subtitle="Save multiple runs of an idea and watch how the score shifts as your positioning improves."
      >
        <p className="text-sm text-slate-400">No trend yet. Run and save a few analyses to unlock score movement.</p>
      </SectionCard>
    );
  }

  const oldest = analyses[analyses.length - 1];
  const newest = analyses[0];
  const delta = Number((newest.result.score - oldest.result.score).toFixed(1));

  return (
    <SectionCard
      eyebrow="Improvement"
      title="Improvement over time"
      subtitle="A quick summary of how your latest saved analysis compares with the oldest one in the local dashboard."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Latest score</div>
          <div className="mt-3 text-3xl font-bold text-white">{newest.result.score.toFixed(1)}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Oldest score</div>
          <div className="mt-3 text-3xl font-bold text-white">{oldest.result.score.toFixed(1)}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Delta</div>
          <div className={`mt-3 text-3xl font-bold ${delta >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
            {delta >= 0 ? '+' : ''}
            {delta.toFixed(1)}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
