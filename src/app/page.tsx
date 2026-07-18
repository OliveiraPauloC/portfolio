import { ExperienceCard } from './components/ExperienceCard';
import { EducationCard } from './components/EducationCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500/30">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        <header className="mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Paulo Oliveira
          </h1>
          <h2 className="text-xl text-slate-300 mt-2 font-medium">
            Software Engineer | Full Stack & AEM Developer
          </h2>
          <p className="text-slate-400 mt-6 leading-relaxed text-base">
            Engenheiro de Software com foco na arquitetura e construção de plataformas digitais de alta escala. 
            Com mais de 5 anos de experiência, possuo uma trajetória sólida no desenvolvimento de soluções robustas para o mercado global, 
            unindo eficiência técnica, automação de dados e visão de negócio.
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed text-base">
            Atualmente, venho consolidando minha atuação na engenharia de sistemas distribuídos e microsserviços de alta disponibilidade utilizando Node.js, 
            com forte domínio em arquiteturas orientadas a eventos (Event-Driven), gerenciamento de filas e processamento resiliente de dados em segundo plano.
          </p>
          
          <div className="flex flex-wrap gap-5 mt-8 text-sm font-semibold">
            <a href="https://github.com/OliveiraPauloC" target="_blank" className="text-teal-400 hover:text-teal-300 transition-colors border-b border-teal-500/10 hover:border-teal-400 pb-0.5">GitHub</a>
            <a href="https://www.linkedin.com/in/devpaulo/" target="_blank" className="text-teal-400 hover:text-teal-300 transition-colors border-b border-teal-500/10 hover:border-teal-400 pb-0.5">LinkedIn</a>
            <span className="text-slate-700">|</span>
            <a href="mailto:contato@devpaulo.tech" className="text-slate-300 font-medium hover:text-teal-400 transition-colors">contato@devpaulo.tech</a>
          </div>
        </header>

        <section className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-900 pb-2">
            Competências Técnicas e Tecnologias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-900">
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-3">Plataformas Corporativas e Ecossistema Java</h3>
              <p className="text-sm text-slate-400 leading-relaxed">AEM (Adobe Experience Manager), Java, Sling Models, Serviços OSGi, Servlets e Oracle Commerce Cloud (OCC).</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-900">
              <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">Desenvolvimento Full Stack Moderno</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Node.js, TypeScript, Next.js 15, React.js, Express, JavaScript (ES6+), PostgreSQL, Redux, Tailwind CSS v4 e Docker.</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-900">
              <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">Arquitetura de Sistemas e Mensageria</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Gerenciamento de Filas (BullMQ), Redis, Contêineres Docker Compose, Transações Atômicas (ACID) e Webhooks Idempotentes.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 border-b border-slate-900 pb-2">
            Experiência Profissional
          </h2>
          <div className="space-y-12">
            <ExperienceCard 
              role="AEM FullStack Engineer"
              company="WEBJUMP & AI/R"
              period="Jul 2025 — Jul 2026"
              description="Desenvolvimento Full Stack de plataformas corporativas de alta escala dentro do ecossistema Adobe Experience Manager (AEM). Implementação no backend de serviços, servlets e modelos customizados em Java, garantindo a lógica de negócio e integração via OSGi services. No frontend, arquitetura e criação de componentes dinâmicos e interfaces modernas em React.js e JavaScript (ES6+), controlando o ciclo completo do componente desde o Sling Models até a renderização final com foco em código limpo, modularidade e performance."
              isLatest={true}
            />

            <ExperienceCard 
              role="Software Engineer"
              company="Compass UOL & AI/R"
              period="Jul 2021 — Jul 2025"
              description="Atuação em projetos multinacionais de alta complexidade. Responsável pela sustentação, evolução e refatoração de grandes plataformas globais de e-commerce e gestão de experiência digital, alternando o uso de stacks de acordo com as necessidades dos clientes. Sólida experiência em arquiteturas baseadas em React.js, JavaScript, Oracle Commerce Cloud (OCC) e Adobe Experience Manager (AEM). Foco no desenvolvimento de layouts complexos, responsivos e escaláveis, manutenção de código legado e otimização de performance entre navegadores."
            />

            <ExperienceCard 
              role="Desenvolvedor Front-End"
              company="Freelancer"
              period="Mar 2019 — Jan 2021"
              description="Desenvolvimento focado na criação de Single Page Applications (SPAs) modernas, semânticas e interativas. Domínio completo do ecossistema React.js, aplicando Redux para gerenciamento de estado global, Styled-Components e Sass para estilizações modulares, e Axios para consumo de APIs REST. Gerenciamento integral dos projetos, realizando a tradução fiel de protótipos complexos vindos do Figma/Adobe XD para interfaces acessíveis, performáticas e otimizadas para SEO."
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 border-b border-slate-900 pb-2">
            Formação Acadêmica
          </h2>
          <div className="space-y-8">
            
            <EducationCard 
              degree="Bacharelado, Engenharia de Software"
              institution="Uniamérica"
              period="Jan 2024 — Dez 2027"
              description="Graduação voltada para a consolidação dos fundamentos teóricos e matemáticos da ciência da computação, servindo como base sólida para a prática de mercado. Formação focada no design de arquiteturas de alta disponibilidade, governança de ciclo de vida de desenvolvimento (SDLC) e resolução de problemas complexos através de estruturas lógicas otimizadas."
              topics={[
                "Design Patterns", "Arquitetura de Sistemas", "Estruturas de Dados Avançadas", 
                "Qualidade de Software", "Ciclo de Vida de Software (SDLC)", "Metodologias Ágeis"
              ]}
            />

            <EducationCard 
              degree="Bacharelado, Comunicação Social — Publicidade e Propaganda"
              institution="Centro Universitário UniCarioca"
              period="Jan 2016 — Dez 2019"
              description="Formação acadêmica que proporcionou uma base sólida em análise de mercado, comportamento do consumidor e posicionamento estratégico. Essa bagagem de negócios e comunicação agrega um diferencial analítico à atuação como engenheiro de software, facilitando o entendimento de regras de negócio, foco em produto e orientação a resultados de impacto comercial."
              topics={[
                "Análise de Mercado", "Estratégia de Negócios", "Visão de Produto", 
                "Comportamento do Usuário", "Métricas e Resultados"
              ]}
            />

            <EducationCard 
              degree="Ensino Técnico"
              institution="IFRJ | Instituto Federal do Rio de Janeiro"
              period="2009 — 2011"
              description="Formação técnica de alto rigor acadêmico realizada em instituição federal de referência. O curso desenvolveu a base do pensamento crítico, metodologia de resolução de problemas e raciocínio lógico-analítico fundamental para o desenvolvimento profissional e posterior transição consolidada para a engenharia de tecnologia."
              topics={[
                "Rigor Acadêmico", "Raciocínio Lógico", "Pensamento Crítico", 
                "Resolução de Problemas"
              ]}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-8 border-b border-slate-900 pb-2">
            Projetos e Laboratórios de Arquitetura
          </h2>
          <div className="grid gap-6">

            <article className="group bg-slate-900/20 border border-slate-900 p-6 rounded-2xl transition-all hover:border-slate-800 hover:bg-slate-900/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-400 transition-colors">EventBridge 🚀</h3>
                    <span className="text-[10px] uppercase font-bold bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded">Full Stack</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Barramento assíncrono de mensageria e orquestração de webhooks de alta escala. Desenvolvido sob arquitetura monorepo desacoplada, implementando ingestão com status HTTP 202 Accepted, filas gerenciadas por BullMQ/Redis e processamento resiliente com políticas de retentativas automáticas.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Next.js 15", "Tailwind v4", "Node.js", "TypeScript", "Express", "BullMQ", "Redis", "Docker"].map((tech) => (
                      <span key={tech} className="text-xs bg-slate-950 text-slate-500 px-2.5 py-1 rounded-md font-mono border border-slate-900">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href="https://github.com/OliveiraPauloC/event-bridge" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-xs bg-slate-950 hover:bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-center font-medium transition-colors text-slate-300 shrink-0">Código Fonte</a>
              </div>
            </article>

            <article className="group bg-slate-900/20 border border-slate-900 p-6 rounded-2xl transition-all hover:border-slate-800 hover:bg-slate-900/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-400 transition-colors">BillingHub 💳</h3>
                    <span className="text-[10px] uppercase font-bold bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded">Full Stack</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Core financeiro e motor de gestão de assinaturas para plataformas SaaS. Desenvolvido sob arquitetura monorepo desacoplada, implementando transações atômicas (ACID) em banco de dados para integridade dos registros e endpoint idempotente de Webhook focado em conciliação assíncrona de faturas.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Next.js 15", "Tailwind v4", "Node.js", "TypeScript", "Express", "Prisma v6", "PostgreSQL", "Docker"].map((tech) => (
                      <span key={tech} className="text-xs bg-slate-950 text-slate-500 px-2.5 py-1 rounded-md font-mono border border-slate-900">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href="https://github.com/OliveiraPauloC/billing-hub" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-xs bg-slate-950 hover:bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-center font-medium transition-colors text-slate-300 shrink-0">Código Fonte</a>
              </div>
            </article>

            <article className="group bg-slate-900/20 border border-slate-900 p-6 rounded-2xl transition-all hover:border-slate-800 hover:bg-slate-900/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-400 transition-colors">FeatureHub 🚀</h3>
                    <span className="text-[10px] uppercase font-bold bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded">Full Stack</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Painel de governança corporativa de Feature Flags. Desenvolvido sob arquitetura monorepo isolada por Docker, com mutação de estado assíncrona blindada contra concorrência e barramento de cache do Next.js.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Next.js 15", "Tailwind v4", "Node.js", "TypeScript", "Express", "Prisma v6", "PostgreSQL", "Docker"].map((tech) => (
                      <span key={tech} className="text-xs bg-slate-950 text-slate-500 px-2.5 py-1 rounded-md font-mono border border-slate-900">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href="https://github.com/OliveiraPauloC/feature-hub" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-xs bg-slate-950 hover:bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-center font-medium transition-colors text-slate-300 shrink-0">Código Fonte</a>
              </div>
            </article>

            <article className="group bg-slate-900/20 border border-slate-900 p-6 rounded-2xl transition-all hover:border-slate-800 hover:bg-slate-900/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-teal-400 transition-colors">MetricCanvas 📊</h3>
                    <span className="text-[10px] uppercase font-bold bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded">Front End</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Plataforma modular de Business Intelligence com monitoramento de métricas em tempo real. Desenvolvido com foco em isolamento de renderização de dados voláteis, gerência de layout dinâmico no cliente e persistência de grid.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Next.js 15", "Tailwind v4", "Recharts", "TypeScript", "Turbopack", "Local Storage"].map((tech) => (
                      <span key={tech} className="text-xs bg-slate-950 text-slate-500 px-2.5 py-1 rounded-md font-mono border border-slate-900">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href="https://github.com/OliveiraPauloC/metric-canvas" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-xs bg-slate-950 hover:bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl text-center font-medium transition-colors text-slate-300 shrink-0">Código Fonte</a>
              </div>
            </article>

            
          </div>
        </section>

        <footer className="text-xs text-slate-600 font-mono flex justify-between items-center border-t border-slate-900 pt-8">
          <span>&copy; {new Date().getFullYear()} — devpaulo.tech</span>
          <span className="text-slate-700">Focado em Alta Disponibilidade</span>
        </footer>

      </div>
    </main>
  );
}
