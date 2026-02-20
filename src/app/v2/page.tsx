import {
  CreditCard,
  Shield,
  Wallet,
  UserCheck,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "Billeteras Virtuales",
    description:
      "Desarrollo e integracion de billeteras digitales seguras, permitiendo a tus usuarios gestionar sus fondos de manera eficiente.",
    icon: Wallet,
    tone: "from-emerald-500 to-teal-500",
  },
  {
    title: "Procesadores de Pago",
    description:
      "Integraciones con los principales procesadores de pago del mercado para ofrecer multiples opciones a tus clientes.",
    icon: CreditCard,
    tone: "from-sky-500 to-cyan-500",
  },
  {
    title: "Validacion 3DS",
    description:
      "Implementacion de protocolos 3D Secure para operaciones con tarjetas de credito, maximizando la seguridad de las transacciones.",
    icon: Shield,
    tone: "from-indigo-500 to-blue-500",
  },
  {
    title: "Validacion de Riesgo",
    description:
      "Integraciones con sistemas de analisis de riesgo para prevenir fraudes y proteger tu negocio de operaciones sospechosas.",
    icon: AlertTriangle,
    tone: "from-amber-500 to-orange-500",
  },
  {
    title: "Validacion de Identidad",
    description:
      "Integraciones con servicios de verificacion de identidad como VALIDA y RENAPER, garantizando el cumplimiento normativo y la seguridad en el onboarding de usuarios.",
    icon: UserCheck,
    tone: "from-lime-500 to-emerald-500",
  },
];

const projects = [
  {
    title: "Billetera Digital Finbank",
    description:
      "Desarrollo completo de una billetera virtual con soporte para multiples monedas y transferencias instantaneas.",
    tags: ["Billetera", "P2P", "QR"],
    icon: Wallet,
    tone: "from-emerald-500 to-teal-600",
  },
  {
    title: "Gateway de Pagos E-commerce",
    description:
      "Integracion de pasarela de pagos con multiples procesadores y validacion 3DS para una plataforma de e-commerce.",
    tags: ["3DS", "Pagos", "API"],
    icon: CreditCard,
    tone: "from-sky-500 to-cyan-600",
  },
  {
    title: "Sistema KYC Automatizado",
    description:
      "Plataforma de verificacion de identidad con integracion a RENAPER y sistemas de validacion biometrica.",
    tags: ["KYC", "RENAPER", "Biometria"],
    icon: UserCheck,
    tone: "from-lime-500 to-green-600",
  },
];

const reasons = [
  {
    title: "Experiencia",
    description: "Anios de trabajo en el ecosistema fintech",
    icon: CheckCircle,
  },
  {
    title: "Seguridad",
    description: "Cumplimiento de estandares PCI DSS",
    icon: Shield,
  },
  {
    title: "Integraciones",
    description: "Conectamos con los principales proveedores",
    icon: CreditCard,
  },
  {
    title: "Soporte",
    description: "Acompanamiento continuo post-implementacion",
    icon: UserCheck,
  },
];

export default function VersionTwo() {
  return (
    <div className="min-h-screen bg-[#fbfbf7] text-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-[#fbfbf7]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500" />
            <div>
              <p className="text-lg font-semibold leading-none">Soldigit</p>
              <p className="text-xs text-slate-500">Fintech Studio</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a className="text-slate-600 hover:text-slate-900" href="#inicio">
              Inicio
            </a>
            <a className="text-slate-600 hover:text-slate-900" href="#servicios">
              Servicios
            </a>
            <a className="text-slate-600 hover:text-slate-900" href="#proyectos">
              Proyectos
            </a>
            <a
              className="rounded-full bg-slate-900 px-5 py-2 text-white hover:bg-slate-800"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      <section
        id="inicio"
        className="relative overflow-hidden pt-28 sm:pt-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <Shield className="h-4 w-4" />
              Soluciones Fintech de Confianza
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Transformamos el futuro de los
              <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                pagos digitales
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Somos una empresa fintech especializada en soluciones de pago,
              billeteras virtuales y validacion de identidad para empresas que
              buscan innovar en el mundo digital.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Hablemos de tu proyecto
                <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-slate-700 transition hover:border-slate-500"
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 top-6 h-full w-full rounded-[32px] border border-slate-200 bg-white/60" />
            <div className="relative rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-emerald-100/60">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-emerald-600">
                    Plataforma segura
                  </p>
                  <p className="text-lg font-semibold">Arquitectura modular</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">
                    Pagos digitales en tiempo real
                  </p>
                  <p className="text-sm text-slate-500">
                    Integraciones con proveedores locales y globales.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">
                    Onboarding verificado
                  </p>
                  <p className="text-sm text-slate-500">
                    Validacion de identidad con seguridad avanzada.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">
                    Prevencion de fraude
                  </p>
                  <p className="text-sm text-slate-500">
                    Analisis de riesgo en cada transaccion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Nuestro expertise
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Soluciones integrales para el ecosistema de pagos digitales
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.tone}`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-[#f4f3ee] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Proyectos destacados
            </h2>
            <p className="mt-3 text-slate-600">
              Algunos de los proyectos en los que hemos trabajado
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div
                  className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.tone}`}
                >
                  <project.icon className="h-16 w-16 text-white/80" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col gap-3">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Por que elegirnos
            </h2>
            <p className="text-slate-300">
              Experiencia y compromiso en cada proyecto
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <reason.icon className="h-7 w-7 text-emerald-300" />
                <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Estamos listos para ayudarte a llevar tu negocio al siguiente nivel
              con soluciones de pago innovadoras y seguras.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:contacto@soldigit.com"
                    className="text-sm font-semibold text-slate-900"
                  >
                    contacto@soldigit.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Telefono
                  </p>
                  <a
                    href="tel:+5411XXXXXXXX"
                    className="text-sm font-semibold text-slate-900"
                  >
                    +54 11 XXXX-XXXX
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400">
                    Ubicacion
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-[#f4f3ee] p-8">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase text-slate-500"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold uppercase text-slate-500"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase text-slate-500"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuentanos sobre tu proyecto..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
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
