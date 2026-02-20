import {
  Code,
  Cpu,
  Layers,
  Rocket,
  Shield,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Desarrollo de Producto",
    description:
      "Discovery, UX y engineering para construir software que resuelve problemas reales.",
    icon: Layers,
  },
  {
    title: "Plataformas SaaS",
    description:
      "Arquitecturas multi-tenant, billing y escalabilidad para productos B2B.",
    icon: Cpu,
  },
  {
    title: "Integraciones API",
    description:
      "Conectamos tu stack con partners, ERPs y servicios cloud criticos.",
    icon: Code,
  },
  {
    title: "DevOps y Observabilidad",
    description:
      "CI/CD, monitoreo y rendimiento para operar con confianza 24/7.",
    icon: Rocket,
  },
  {
    title: "Datos y Automatizacion",
    description:
      "Pipelines de datos y automatizaciones inteligentes para escalar procesos.",
    icon: Shield,
  },
];

const projects = [
  {
    title: "Suite de Gestion Operativa",
    description:
      "Sistema modular para coordinar operaciones, inventario y reportes en tiempo real.",
    tags: ["SaaS", "Ops", "Analytics"],
  },
  {
    title: "Marketplace B2B",
    description:
      "Plataforma de comercio entre empresas con reglas de negocio complejas.",
    tags: ["B2B", "Pagos", "Workflow"],
  },
  {
    title: "Onboarding Digital",
    description:
      "Experiencia de alta conversión con validaciones, scoring y automatizacion.",
    tags: ["KYC", "Automation", "UX"],
  },
];

const reasons = [
  {
    title: "Product mindset",
    description: "Alineamos negocio, UX y tecnologia en cada entrega.",
    icon: CheckCircle,
  },
  {
    title: "Arquitectura escalable",
    description: "Bases solidas para crecer sin friccion.",
    icon: Shield,
  },
  {
    title: "Entrega continua",
    description: "Roadmaps cortos y releases frecuentes.",
    icon: Rocket,
  },
  {
    title: "Soporte cercano",
    description: "Equipo senior y comunicacion directa.",
    icon: Cpu,
  },
];

export default function VersionThree() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.12),transparent_50%,rgba(250,204,21,0.12))]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500" />
            <div>
              <p className="text-lg font-semibold leading-none">Soldigit</p>
              <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                Software Studio
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400 md:flex">
            <a className="hover:text-white" href="#inicio">
              Inicio
            </a>
            <a className="hover:text-white" href="#servicios">
              Servicios
            </a>
            <a className="hover:text-white" href="#proyectos">
              Proyectos
            </a>
            <a
              className="rounded-full border border-white/40 px-5 py-2 text-white transition hover:bg-white hover:text-slate-950"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="px-4 pb-20 pt-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">
              <Shield className="h-4 w-4" />
              Produccion de Software
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Construimos software que acelera negocios digitales
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Equipos de producto, arquitectura y QA para lanzar plataformas
              robustas, integradas y listas para escalar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Hablemos de tu proyecto
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.6)]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400 text-slate-950">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Delivery
                </p>
                <p className="text-lg font-semibold">Roadmaps sin friccion</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold">Plataformas escalables</p>
                <p className="text-sm text-slate-300">
                  Arquitectura modular y performance consistente.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold">Integraciones criticas</p>
                <p className="text-sm text-slate-300">
                  APIs seguras, observables y estables.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold">Automatizacion real</p>
                <p className="text-sm text-slate-300">
                  Procesos inteligentes y datos accionables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-t border-white/10 bg-slate-950 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">
              Nuestro expertise
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Soluciones integrales para construir software de alto impacto
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-slate-900 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Proyectos destacados
            </h2>
            <p className="mt-3 text-slate-300">
              Algunos productos que ayudamos a construir
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6"
              >
                <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400/80 to-emerald-500/80">
                  <Cpu className="h-14 w-14 text-slate-950" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-3">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Por que elegirnos
            </h2>
            <p className="text-slate-300">
              Foco en software de producto con impacto real
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6"
              >
                <reason.icon className="h-7 w-7 text-teal-200" />
                <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-900 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Estamos listos para ayudarte a construir software que haga crecer
              tu negocio.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:contacto@soldigit.com"
                    className="text-sm font-semibold"
                  >
                    contacto@soldigit.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Telefono
                  </p>
                  <a
                    href="tel:+5411XXXXXXXX"
                    className="text-sm font-semibold"
                  >
                    +54 11 XXXX-XXXX
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Ubicacion
                  </p>
                  <p className="text-sm font-semibold">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-2xl border border-white/20 bg-slate-950 px-4 py-3 text-sm text-white focus:border-teal-300 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-2xl border border-white/20 bg-slate-950 px-4 py-3 text-sm text-white focus:border-teal-300 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="w-full rounded-2xl border border-white/20 bg-slate-950 px-4 py-3 text-sm text-white focus:border-teal-300 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuentanos sobre tu proyecto..."
                  className="w-full resize-none rounded-2xl border border-white/20 bg-slate-950 px-4 py-3 text-sm text-white focus:border-teal-300 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-100"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
