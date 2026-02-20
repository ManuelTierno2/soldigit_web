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
      "Experiencia de alta conversion con validaciones, scoring y automatizacion.",
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

export default function VersionFive() {
  return (
    <div className="min-h-screen bg-[#f7fbff] text-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,116,144,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.2),transparent_55%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#f7fbff]/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500 to-orange-400" />
            <div>
              <p className="text-lg font-semibold leading-none">Soldigit</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Software Lab
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#inicio">
              Inicio
            </a>
            <a className="hover:text-slate-900" href="#servicios">
              Servicios
            </a>
            <a className="hover:text-slate-900" href="#proyectos">
              Proyectos
            </a>
            <a
              className="rounded-full border-2 border-slate-900 px-5 py-2 text-slate-900 transition hover:bg-slate-900 hover:text-white"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <section id="inicio" className="px-4 pb-20 pt-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <Shield className="h-4 w-4 text-teal-600" />
              Produccion de Software
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Equipos expertos para software de alto impacto
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Construimos plataformas escalables, integraciones robustas y
              experiencias digitales listas para crecer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Hablemos de tu proyecto
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-900 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="rounded-[30px] border border-slate-900/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Delivery
                </p>
                <p className="text-2xl font-semibold">Sprint cero en 2 semanas</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500 text-white">
                <Rocket className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-[#f7fbff] p-4">
                <p className="text-sm font-semibold">Arquitectura moderna</p>
                <p className="text-sm text-slate-600">
                  Modular, escalable y preparada para integraciones.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#f7fbff] p-4">
                <p className="text-sm font-semibold">QA continuo</p>
                <p className="text-sm text-slate-600">
                  Pipelines con pruebas automatizadas y observabilidad.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-[#f7fbff] p-4">
                <p className="text-sm font-semibold">Automatizacion</p>
                <p className="text-sm text-slate-600">
                  Flujos inteligentes para ahorrar horas operativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-t border-slate-900/10 bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
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
                className="rounded-[26px] border border-slate-200 bg-[#f7fbff] p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-orange-400 text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-[#f7fbff] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Proyectos destacados
            </h2>
            <p className="mt-3 text-slate-600">
              Algunos productos que ayudamos a construir
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6"
              >
                <div className="flex h-40 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Code className="h-14 w-14" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest"
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

      <section className="border-t border-slate-900/10 bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Por que elegirnos
            </h2>
            <p className="mt-3 text-slate-600">
              Foco en software de producto con impacto real
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[24px] border border-slate-200 bg-[#f7fbff] p-6"
              >
                <reason.icon className="h-7 w-7 text-teal-600" />
                <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#f7fbff] px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Estamos listos para ayudarte a construir software que haga crecer
              tu negocio.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Ubicacion
                  </p>
                  <p className="text-sm font-semibold">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuentanos sobre tu proyecto..."
                  className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
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
