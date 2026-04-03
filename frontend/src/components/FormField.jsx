export default function FormField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  textarea = false,
}) {
  const baseClasses =
    'w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 shadow-inner shadow-black/20 outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10';

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      {textarea ? (
        <textarea
          className={`${baseClasses} min-h-28 resize-y`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={baseClasses}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}
