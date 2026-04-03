export default function Suggestions({ items = [] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10">
      <h3 className="mb-4 text-lg font-semibold text-white">Suggestions</h3>
      <ul className="space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="flex gap-3">
            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
