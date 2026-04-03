import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from 'recharts';
import SectionCard from './SectionCard';

function getMetricsData(result) {
  return [
    { name: 'Demand', value: Number(result?.metrics?.marketDemand || 0) },
    { name: 'Competition', value: Number(result?.metrics?.competition || 0) },
    { name: 'Feasibility', value: Number(result?.metrics?.feasibility || 0) },
  ];
}

function getTrendData(result) {
  const apiTimeline = result?.marketSignals?.trendTimeline || [];
  if (apiTimeline.length) return apiTimeline;

  const avg = Number(result?.marketSignals?.averageInterest || 0);
  const fallback = avg > 0 ? avg : Number(result?.metrics?.marketDemand || 0) * 10;
  return [
    { label: 'Start', interest: Math.max(fallback - 18, 5) },
    { label: 'Middle', interest: Math.max(fallback - 8, 10) },
    { label: 'Now', interest: Math.min(fallback + 6, 100) },
  ];
}

export default function ChartsSection({ result }) {
  const metricsData = getMetricsData(result);
  const trendData = getTrendData(result);

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <SectionCard
        title="Metrics visualization"
        subtitle="Demand, competition, and feasibility side by side for fast scanning."
      >
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={metricsData}>
              <CartesianGrid stroke="rgba(148,163,184,0.14)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 10]} tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: 'rgba(34, 211, 238, 0.08)' }}
                contentStyle={{
                  background: '#020617',
                  border: '1px solid rgba(148,163,184,0.12)',
                  borderRadius: '16px',
                  color: '#e2e8f0',
                }}
              />
              <Bar dataKey="value" radius={[10, 10, 0, 0]} fill="#22d3ee" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      <SectionCard
        title="Interest trend"
        subtitle="Google Trends interest over time when available, with a graceful fallback if live data is missing."
      >
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid stroke="rgba(148,163,184,0.14)" vertical={false} />
              <XAxis dataKey="label" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  background: '#020617',
                  border: '1px solid rgba(148,163,184,0.12)',
                  borderRadius: '16px',
                  color: '#e2e8f0',
                }}
              />
              <Line type="monotone" dataKey="interest" stroke="#4ade80" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>
    </div>
  );
}
