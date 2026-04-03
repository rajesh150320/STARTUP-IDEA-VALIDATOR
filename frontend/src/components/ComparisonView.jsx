import SectionCard from './SectionCard';

function Cell({ children, head = false }) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${
        head
          ? 'border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100'
          : 'border-white/10 bg-white/5 text-sm text-slate-200'
      }`}
    >
      {children}
    </div>
  );
}

export default function ComparisonView({ analyses, selectedIds, onToggle }) {
  const selected = analyses.filter((item) => selectedIds.includes(item.id)).slice(0, 2);

  return (
    <SectionCard
      eyebrow="Comparison"
      title="Compare saved ideas"
      subtitle="Select two analyses to compare scores, metrics, and positioning side by side."
    >
      <div className="mb-5 flex flex-wrap gap-3">
        {analyses.map((analysis) => {
          const active = selectedIds.includes(analysis.id);
          return (
            <button
              key={analysis.id}
              type="button"
              onClick={() => onToggle(analysis.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? 'border-cyan-300/30 bg-cyan-400/15 text-cyan-100'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
              }`}
            >
              {analysis.idea}
            </button>
          );
        })}
      </div>

      {selected.length < 2 ? (
        <p className="text-sm text-slate-400">Choose two saved analyses to unlock comparison mode.</p>
      ) : (
        <div className="grid gap-3 md:grid-cols-3">
          <Cell head>Metric</Cell>
          <Cell head>{selected[0].idea}</Cell>
          <Cell head>{selected[1].idea}</Cell>

          <Cell>Overall score</Cell>
          <Cell>{selected[0].result.score.toFixed(1)}</Cell>
          <Cell>{selected[1].result.score.toFixed(1)}</Cell>

          <Cell>Market demand</Cell>
          <Cell>{selected[0].result.metrics.marketDemand.toFixed(1)}</Cell>
          <Cell>{selected[1].result.metrics.marketDemand.toFixed(1)}</Cell>

          <Cell>Competition</Cell>
          <Cell>{selected[0].result.metrics.competition.toFixed(1)}</Cell>
          <Cell>{selected[1].result.metrics.competition.toFixed(1)}</Cell>

          <Cell>Feasibility</Cell>
          <Cell>{selected[0].result.metrics.feasibility.toFixed(1)}</Cell>
          <Cell>{selected[1].result.metrics.feasibility.toFixed(1)}</Cell>
        </div>
      )}
    </SectionCard>
  );
}
