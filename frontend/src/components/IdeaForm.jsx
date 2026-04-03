import FormField from './FormField';

const fields = [
  { label: 'Location', name: 'location', placeholder: 'Bengaluru, Karnataka' },
  { label: 'Target Audience', name: 'targetAudience', placeholder: 'Busy professionals in tier 1 cities' },
  { label: 'Budget Min', name: 'min', type: 'number', placeholder: '50000' },
  { label: 'Budget Max', name: 'max', type: 'number', placeholder: '200000' },
  { label: 'Timeline', name: 'timeline', placeholder: '3 months' },
  { label: 'Platform', name: 'platform', placeholder: 'Web + Mobile' },
];

export default function IdeaForm({ form, onChange, onSubmit, loading }) {
  return (
    <section className="glass-panel rounded-[32px] p-6 xl:p-8">
      <div className="mb-6 flex flex-col gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-300/80">
          Input
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-[2rem]">
          Validate your startup idea
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-slate-400 md:text-[15px]">
          Enter the idea basics, target market, and execution assumptions. The dashboard will turn
          the API response into a polished validation snapshot.
        </p>
      </div>

      <form className="space-y-5" onSubmit={onSubmit}>
        <FormField
          label="Idea"
          name="idea"
          value={form.idea}
          onChange={onChange}
          placeholder="AI-powered local restaurant recommendation app"
          textarea
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fields.map((field) => (
            <FormField
              key={field.name}
              {...field}
              value={form[field.name]}
              onChange={onChange}
            />
          ))}
        </div>

        <FormField
          label="Problem"
          name="problem"
          value={form.problem}
          onChange={onChange}
          placeholder="Users struggle to discover trustworthy local options quickly and lose time comparing scattered information."
          textarea
        />

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-1px] hover:from-cyan-200 hover:to-emerald-200 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {loading ? 'Analyzing...' : 'Analyze Idea'}
        </button>
      </form>
    </section>
  );
}
