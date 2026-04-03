import { useEffect, useMemo, useState } from 'react';
import { api } from './lib/api';
import { loadSavedAnalyses, saveSavedAnalyses } from './lib/storage';
import IdeaForm from './components/IdeaForm';
import MetricCard from './components/MetricCard';
import Suggestions from './components/Suggestions';
import MarketSignals from './components/MarketSignals';
import EmptyState from './components/EmptyState';
import SectionCard from './components/SectionCard';
import ScoreCard from './components/ScoreCard';
import ChartsSection from './components/ChartsSection';
import ComparisonView from './components/ComparisonView';
import SavedAnalyses from './components/SavedAnalyses';
import TrendPanel from './components/TrendPanel';
import IdeaEvolution from './components/IdeaEvolution';

const initialForm = {
  idea: '',
  location: '',
  targetAudience: '',
  min: '',
  max: '',
  timeline: '',
  platform: '',
  problem: '',
  budgetCategory: 'Medium',
};

function normalizeIdea(value = '') {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function buildSavedRecord(form, result, savedAnalyses, activeAnalysis) {
  const normalizedIdea = normalizeIdea(form.idea || '');
  const isSameLineage =
    activeAnalysis && normalizeIdea(activeAnalysis.input?.idea || activeAnalysis.idea || '') === normalizedIdea;
  const lineageKey = isSameLineage
    ? activeAnalysis.lineageKey
    : normalizedIdea || crypto.randomUUID();
  const lineageItems = savedAnalyses.filter((item) => item.lineageKey === lineageKey);
  const version = lineageItems.length + 1;

  return {
    id: crypto.randomUUID(),
    idea: form.idea || 'Untitled idea',
    savedAt: new Date().toISOString(),
    lineageKey,
    version,
    input: form,
    result: {
      ...result,
      score: Number(result.score || 0),
      metrics: {
        marketDemand: Number(result.metrics?.marketDemand || 0),
        competition: Number(result.metrics?.competition || 0),
        feasibility: Number(result.metrics?.feasibility || 0),
      },
    },
  };
}

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [savedAnalyses, setSavedAnalyses] = useState(() => loadSavedAnalyses());
  const [selectedComparisonIds, setSelectedComparisonIds] = useState([]);
  const [activeAnalysisId, setActiveAnalysisId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const activeAnalysis = useMemo(
    () => savedAnalyses.find((item) => item.id === activeAnalysisId) || null,
    [savedAnalyses, activeAnalysisId]
  );

  useEffect(() => {
    saveSavedAnalyses(savedAnalyses);
  }, [savedAnalyses]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await api.post('/validator/analyze', form);
      const analysis = data.data;
      setResult(analysis);

      const saved = buildSavedRecord(form, analysis, savedAnalyses, activeAnalysis);
      setSavedAnalyses((current) => [saved, ...current].slice(0, 10));
      setActiveAnalysisId(saved.id);
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to analyze the idea right now.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAnalysis = (analysisId) => {
    const selected = savedAnalyses.find((item) => item.id === analysisId);
    if (!selected) return;
    setActiveAnalysisId(analysisId);
    setResult(selected.result);
    setForm(selected.input);
  };

  const handleToggleComparison = (analysisId) => {
    setSelectedComparisonIds((current) => {
      if (current.includes(analysisId)) return current.filter((id) => id !== analysisId);
      if (current.length === 2) return [current[1], analysisId];
      return [...current, analysisId];
    });
  };

  const trendAnalyses = useMemo(() => savedAnalyses, [savedAnalyses]);

  return (
    <div className="min-h-screen px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="glass-panel relative overflow-hidden rounded-[34px] px-6 py-8 xl:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(74,222,128,0.12),transparent_24%)]" />
          <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr] xl:items-end">
            <div className="relative">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-300/80">
                Startup Idea Validator
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
                Product-grade validation dashboard
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                Analyze startup ideas, save multiple runs, compare concepts side by side, and turn
                backend output into a SaaS-style decision dashboard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                  Live scoring
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100">
                  Comparison-ready
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Recharts insights
                </div>
              </div>
            </div>

            <div className="glass-panel-soft relative grid gap-4 rounded-[28px] p-5 text-sm text-slate-300">
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Live backend
              </div>
              <div className="font-medium text-white">POST `http://localhost:8000/api/v1/validator/analyze`</div>
              <div>{savedAnalyses.length} saved analyses in dashboard memory</div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Runs saved</div>
                  <div className="mt-2 text-3xl font-bold text-white">{savedAnalyses.length}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">State</div>
                  <div className="mt-2 text-base font-semibold text-emerald-300">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-6 xl:sticky xl:top-8 xl:self-start">
            <IdeaForm form={form} onChange={handleChange} onSubmit={handleSubmit} loading={loading} />
            <SavedAnalyses
              analyses={savedAnalyses}
              onSelect={handleSelectAnalysis}
              activeId={activeAnalysisId}
            />
            <IdeaEvolution analyses={savedAnalyses} activeAnalysis={activeAnalysis} />
            <TrendPanel analyses={trendAnalyses} />
          </div>

          <div className="space-y-6">
            {error ? (
              <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 px-5 py-4 text-sm text-rose-200 shadow-lg shadow-rose-950/20">
                {error}
              </div>
            ) : null}

            {!result ? (
              <EmptyState />
            ) : (
              <>
                <ScoreCard
                  score={result.score}
                  marketDemand={result.metrics?.marketDemand}
                  competition={result.metrics?.competition}
                  feasibility={result.metrics?.feasibility}
                />

                <section className="grid gap-4 md:grid-cols-3">
                  <MetricCard
                    title="Market Demand"
                    score={result.metrics?.marketDemand}
                    explanation={result.metricExplanations?.marketDemand}
                  />
                  <MetricCard
                    title="Competition"
                    score={result.metrics?.competition}
                    explanation={result.metricExplanations?.competition}
                  />
                  <MetricCard
                    title="Feasibility"
                    score={result.metrics?.feasibility}
                    explanation={result.metricExplanations?.feasibility}
                  />
                </section>

                <ChartsSection result={result} />

                <ComparisonView
                  analyses={savedAnalyses}
                  selectedIds={selectedComparisonIds}
                  onToggle={handleToggleComparison}
                />

                <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="space-y-6">
                    <SectionCard
                      title="Analysis summary"
                      subtitle="Narrative interpretation pulled directly from the backend response."
                    >
                      <div className="space-y-5 text-sm leading-7 text-slate-300">
                        <div>
                          <div className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                            Market Demand
                          </div>
                          <p>{result.marketDemand}</p>
                        </div>
                        <div>
                          <div className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                            Competition
                          </div>
                          <p>{result.competition}</p>
                        </div>
                        <div>
                          <div className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                            Feasibility
                          </div>
                          <p>{result.feasibility}</p>
                        </div>
                      </div>
                    </SectionCard>

                    <Suggestions items={result.suggestions} />
                  </div>

                  <MarketSignals marketSignals={result.marketSignals} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
