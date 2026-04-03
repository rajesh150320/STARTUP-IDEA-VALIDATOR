import SectionCard from './SectionCard';

function formatTime(value) {
  return new Date(value).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function SavedAnalyses({ analyses, onSelect, activeId }) {
  return (
    <SectionCard
      eyebrow="History"
      title="Saved analyses"
      subtitle="Every successful analysis is saved locally so you can revisit and compare ideas over time."
    >
      <div className="space-y-3">
        {analyses.length ? (
          analyses.map((analysis) => (
            <button
              key={analysis.id}
              type="button"
              onClick={() => onSelect(analysis.id)}
              className={`w-full rounded-2xl border p-4 text-left transition ${
                activeId === analysis.id
                  ? 'border-cyan-300/30 bg-cyan-400/10 shadow-lg shadow-cyan-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold text-white">{analysis.idea}</div>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                      V{analysis.version}
                    </span>
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                    {formatTime(analysis.savedAt)}
                  </div>
                </div>
                <div className="text-3xl font-bold tracking-tight text-white">{analysis.result.score.toFixed(1)}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{analysis.result.marketDemand}</p>
            </button>
          ))
        ) : (
          <p className="text-sm text-slate-400">Your saved analyses will appear here after the first run.</p>
        )}
      </div>
    </SectionCard>
  );
}
