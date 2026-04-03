export default function SectionCard({ title, eyebrow, subtitle, children, action }) {
  return (
    <section className="glass-panel-soft rounded-[28px] p-6 md:p-7">
      {(title || eyebrow || action) && (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {eyebrow ? (
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-300/80">
                {eyebrow}
              </div>
            ) : null}
            {title ? <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3> : null}
            {subtitle ? <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{subtitle}</p> : null}
          </div>
          {action ? <div>{action}</div> : null}
        </div>
      )}
      {children}
    </section>
  );
}
