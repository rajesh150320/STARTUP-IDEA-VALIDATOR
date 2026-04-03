export default function MetricCard({ title, score, explanation }) {
  const safeScore = Math.max(0, Math.min(10, Number(score) || 0));

  return (
    <article className="glass-panel-soft metric-gradient rounded-[26px] p-5">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
        <div className="text-4xl font-bold tracking-tight text-white">{safeScore.toFixed(1)}</div>
      </div>

      <div className="mb-4 h-2.5 rounded-full bg-white/10">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-lg shadow-cyan-500/20"
          style={{ width: `${safeScore * 10}%` }}
        />
      </div>

      <p className="text-sm leading-6 text-slate-400">{explanation}</p>
    </article>
  );
}
