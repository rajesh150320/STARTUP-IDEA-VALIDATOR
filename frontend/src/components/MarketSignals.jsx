import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function MarketSignals({ marketSignals }) {
  const keywords = marketSignals?.keywords || [];
  const topRegions = marketSignals?.topRegions || [];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-white">Market Signals</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Trend context, keyword activity, and regional indicators pulled from the API response.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Keywords
          </div>
          <div className="flex flex-wrap gap-2">
            {keywords.length ? (
              keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                >
                  {keyword}
                </span>
              ))
            ) : (
              <span className="text-sm text-slate-500">No keyword data available</span>
            )}
          </div>
        </div>

        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Trend Summary
          </div>
          <p className="text-sm leading-6 text-slate-300">
            {marketSignals?.trendSummary || 'No market trend summary available.'}
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Top Regions
            </div>
            {topRegions.length ? (
              <ul className="space-y-2 text-sm text-slate-300">
                {topRegions.map((region) => (
                  <li key={region.name} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                    <span>{region.name}</span>
                    <span className="font-medium text-white">{region.interest}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">No regional signal data available</p>
            )}
          </div>

          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Region signal chart
            </div>
            {topRegions.length ? (
              <div className="h-56 rounded-2xl bg-white/[0.03] p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topRegions} layout="vertical" margin={{ top: 6, right: 10, left: 8, bottom: 6 }}>
                    <CartesianGrid stroke="rgba(148,163,184,0.12)" horizontal={false} />
                    <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fill: '#cbd5e1', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      width={90}
                    />
                    <Tooltip
                      cursor={{ fill: 'rgba(34, 211, 238, 0.08)' }}
                      contentStyle={{
                        background: '#020617',
                        border: '1px solid rgba(148,163,184,0.12)',
                        borderRadius: '16px',
                        color: '#e2e8f0',
                      }}
                    />
                    <Bar dataKey="interest" radius={[0, 10, 10, 0]} fill="#22d3ee" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="text-sm text-slate-500">No region chart available yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
