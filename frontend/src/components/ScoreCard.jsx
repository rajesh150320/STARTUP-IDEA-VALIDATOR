import ScoreMeter from './ScoreMeter';
import SectionCard from './SectionCard';

export default function ScoreCard({ score, marketDemand, competition, feasibility }) {
  return (
    <SectionCard
      eyebrow="Score Overview"
      title="Overall startup strength"
      subtitle="A blended view of validation potential across market pull, competition pressure, and build feasibility."
    >
      <div className="grid gap-6 xl:grid-cols-[auto_1fr] xl:items-center">
        <ScoreMeter score={score} />

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ['Market demand', marketDemand],
            ['Competition', competition],
            ['Feasibility', feasibility],
          ].map(([label, value]) => (
            <div key={label} className="metric-gradient rounded-3xl border border-white/10 p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                {label}
              </div>
              <div className="mt-4 text-4xl font-bold tracking-tight text-white">
                {Number(value || 0).toFixed(1)}
              </div>
              <div className="mt-2 text-sm text-slate-400">Weighted metric score</div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
