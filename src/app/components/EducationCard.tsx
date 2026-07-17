interface EducationProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  topics?: string[];
}

export function EducationCard({ degree, institution, period, description, topics = [] }: EducationProps) {
  return (
    <article className="border-l border-slate-900 pl-5 py-2 group hover:border-teal-500/30 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
        <h3 className="text-base font-bold text-slate-200 group-hover:text-teal-400 transition-colors">{degree}</h3>
        <div className="text-left sm:text-right shrink-0">
          <span className="block text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">{institution}</span>
          <span className="block text-xs font-mono text-slate-500 mt-0.5">{period}</span>
        </div>
      </div>
      
      <p className="text-sm text-slate-400 leading-relaxed">
        {description}
      </p>

      {topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {topics.map((topic) => (
            <span key={topic} className="text-[11px] font-mono bg-slate-900/60 text-slate-400 px-2 py-0.5 rounded border border-slate-900/80">
              {topic}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}