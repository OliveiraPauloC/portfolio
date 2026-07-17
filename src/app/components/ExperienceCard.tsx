interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  description: string;
  isLatest?: boolean;
}

export function ExperienceCard({ role, company, period, description, isLatest = false }: ExperienceProps) {
  return (
    <article className="relative pl-6 border-l-2 border-slate-900 group">
      <div className={`absolute w-3 h-3 rounded-full -left-[7px] top-1.5 border-2 border-slate-950 transition-transform group-hover:scale-125 ${
        isLatest ? 'bg-teal-400' : 'bg-slate-800 group-hover:bg-teal-500'
      }`} />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-3">
        <h3 className="text-lg font-bold text-slate-200">{role}</h3>
        <div className="flex flex-col items-start md:items-end text-right">
          <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">{company}</span>
          <span className="text-xs font-mono text-slate-500 mt-0.5">{period}</span>
        </div>
      </div>
      
      <p className="text-sm text-slate-400 leading-relaxed">
        {description}
      </p>
    </article>
  );
}
