function getScoreTone(score) {
  if (score >= 8) return { ring: '#22c55e', glow: 'shadow-emerald-500/20', label: 'High potential' };
  if (score >= 5) return { ring: '#facc15', glow: 'shadow-yellow-500/20', label: 'Promising with work' };
  return { ring: '#f43f5e', glow: 'shadow-rose-500/20', label: 'Needs validation' };
}

export default function ScoreMeter({ score = 0 }) {
  const clamped = Math.max(0, Math.min(10, Number(score) || 0));
  const percentage = (clamped / 10) * 100;
  const tone = getScoreTone(clamped);

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <div
            className={`relative grid h-36 w-36 place-items-center rounded-full ${tone.glow} shadow-2xl`}
            style={{
              background: `conic-gradient(${tone.ring} ${percentage}%, rgba(255,255,255,0.08) ${percentage}% 100%)`,
            }}
          >
            <div className="grid h-[7.25rem] w-[7.25rem] place-items-center rounded-full bg-slate-950 text-center">
              <div>
                <div className="text-4xl font-bold text-white">{clamped.toFixed(1)}</div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Out of 10</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
              Overall score
            </div>
            <h3 className="text-2xl font-semibold text-white">{tone.label}</h3>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Fast visual snapshot of how strong the idea looks across demand, competitive pressure,
              and feasibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
