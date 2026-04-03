import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import SectionCard from './SectionCard';

function formatVersionLabel(item) {
  return `V${item.version}`;
}

export default function IdeaEvolution({ analyses, activeAnalysis }) {
  if (!activeAnalysis) {
    return (
      <SectionCard
        eyebrow="Evolution"
        title="Idea evolution tracking"
        subtitle="Re-analyze the same idea after refining the audience, problem, or positioning to create a version trail."
      >
        <p className="text-sm text-slate-400">Select or create an analysis to start tracking versions.</p>
      </SectionCard>
    );
  }

  const versions = analyses
    .filter((item) => item.lineageKey === activeAnalysis.lineageKey)
    .sort((a, b) => a.version - b.version);

  const chartData = versions.map((item) => ({
    label: formatVersionLabel(item),
    score: Number(item.result.score || 0),
  }));

  const first = versions[0];
  const latest = versions[versions.length - 1];
  const delta = Number(((latest?.result.score || 0) - (first?.result.score || 0)).toFixed(1));

  return (
    <SectionCard
      eyebrow="Evolution"
      title="Idea evolution tracking"
      subtitle="Track how the score moves as you improve the same idea across multiple versions."
    >
      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Versions</div>
          <div className="mt-3 text-3xl font-bold text-white">{versions.length}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Latest</div>
          <div className="mt-3 text-3xl font-bold text-white">{latest?.result.score?.toFixed(1) || '0.0'}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Improvement</div>
          <div className={`mt-3 text-3xl font-bold ${delta >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
            {delta >= 0 ? '+' : ''}
            {delta.toFixed(1)}
          </div>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="rgba(148,163,184,0.14)" vertical={false} />
            <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 10]} tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                background: '#020617',
                border: '1px solid rgba(148,163,184,0.12)',
                borderRadius: '16px',
                color: '#e2e8f0',
              }}
            />
            <Line type="monotone" dataKey="score" stroke="#22d3ee" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 space-y-3">
        {versions.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div>
              <div className="text-sm font-semibold text-white">{formatVersionLabel(item)}</div>
              <div className="mt-1 text-sm text-slate-400">{item.result.marketDemand}</div>
            </div>
            <div className="text-2xl font-bold text-white">{item.result.score.toFixed(1)}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
