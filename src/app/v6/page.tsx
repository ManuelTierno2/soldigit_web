import {
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  CreditCard,
  Layers,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Shield,
  UserCheck,
  Wallet,
} from "lucide-react";

const focusAreas = [
  {
    title: "Billeteras virtuales",
    description:
      "Cuentas, saldos, movimientos y cash-in/out con reglas de negocio listas para escalar.",
    icon: Wallet,
    tone: "from-emerald-500 to-teal-500",
  },
  {
    title: "Procesadores de pago",
    description:
      "Integraciones con adquirentes, gateways y PSPs para orquestar pagos con resiliencia.",
    icon: CreditCard,
    tone: "from-sky-500 to-cyan-500",
  },
  {
    title: "Validadores 3DS",
    description:
      "Flujos 3DS2 para tarjetas con challenge/frictionless y control de autenticacion.",
    icon: Shield,
    tone: "from-indigo-500 to-blue-500",
  },
  {
    title: "Validadores de riesgo",
    description:
      "Integraciones con motores de riesgo, scoring y reglas por operacion.",
    icon: AlertTriangle,
    tone: "from-amber-500 to-orange-500",
  },
  {
    title: "Validacion de identidad",
    description:
      "Onboarding con integraciones VALIDA y RENAPER para KYC local.",
    icon: UserCheck,
    tone: "from-emerald-600 to-cyan-600",
  },
  {
    title: "Conciliacion y reporting",
    description:
      "Visibilidad operativa con reconciliacion, reportes y auditoria.",
    icon: Layers,
    tone: "from-slate-600 to-slate-800",
  },
];

const outcomes = [
  {
    title: "Menos friccion",
    description:
      "Onboarding rapido, seguro y alineado a regulaciones locales.",
  },
  {
    title: "Mas conversion",
    description:
      "Flujos de pago optimizados para reducir rechazos y abandonos.",
  },
  {
    title: "Operacion clara",
    description:
      "Conciliacion diaria, reportes confiables y alertas accionables.",
  },
];

const delivery = [
  {
    title: "Sprint 0 de producto",
    description:
      "Definimos scope, riesgos, integraciones clave y roadmap realista.",
    icon: Rocket,
  },
  {
    title: "MVP transaccional",
    description:
      "Construimos el nucleo de pagos con seguridad y observabilidad.",
    icon: Shield,
  },
  {
    title: "Escala y optimizacion",
    description:
      "Automatizamos, afinamos performance y expandimos capacidades.",
    icon: CheckCircle,
  },
];

export default function VersionSix() {
  return (
    <div className="min-h-screen bg-[#f6f9fc] text-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-[#f6f9fc]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500" />
            <div>
              <p className="text-lg font-semibold leading-none">Soldigit</p>
              <p className="text-xs text-slate-500">Product Fintech Studio</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              className="rounded-md text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f9fc]"
              href="#inicio"
            >
              Inicio
            </a>
            <a
              className="rounded-md text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f9fc]"
              href="#enfoque"
            >
              Enfoque
            </a>
            <a
              className="rounded-md text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f9fc]"
              href="#capacidades"
            >
              Capacidades
            </a>
            <a
              className="rounded-md text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f9fc]"
              href="#contacto"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      <section id="inicio" className="scroll-mt-24 pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              <Shield className="h-4 w-4" />
              Equipo de producto fintech
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Plataformas fintech y de pagos que convierten
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Somos un equipo especializado en billeteras virtuales e
              integraciones con procesadores de pago, validadores 3DS, motores de
              riesgo y validadores de identidad.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f9fc]"
              >
                Contactanos
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#capacidades"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f9fc]"
              >
                Ver capacidades
              </a>
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <h2 className="mt-3 text-2xl font-semibold">
              Para quienes somos y que resolvemos
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">
                  Para fintechs y equipos de producto financiero
                </p>
                <p className="text-sm text-slate-500">
                  Bancos digitales, marketplaces y empresas con pagos con tarjeta
                  o billetera.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">
                  Resolvemos el core transaccional
                </p>
                <p className="text-sm text-slate-500">
                  Billeteras, tarjetas, 3DS, riesgo e identidad en un mismo core.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capacidades" className="scroll-mt-24 bg-[#f6f9fc] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Capacidades core
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Soluciones para plataformas financieras y de pagos
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${area.tone}`}
                >
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Resultados que buscamos
            </h2>
            <p className="mt-3 text-slate-600">
              Impacto concreto en el core transaccional y la operacion diaria.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="rounded-[24px] border border-slate-200 bg-[#f6f9fc] p-6"
              >
                <h3 className="text-lg font-semibold">{outcome.title}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Como trabajamos
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Roadmap claro, delivery continuo
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {delivery.map((step) => (
              <article
                key={step.title}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6"
              >
                <step.icon className="h-7 w-7 text-emerald-200" />
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-24 bg-[#f6f9fc] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Hablemos de tu plataforma financiera
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Contanos tu desafio y armamos un plan claro para avanzar.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Email
                  </p>
                  <a
                    href="mailto:contacto@soldigit.com"
                    className="rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f9fc]"
                  >
                    contacto@soldigit.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Telefono
                  </p>
                  <a
                    href="tel:+5411XXXXXXXX"
                    className="rounded-md text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f9fc]"
                  >
                    +54 11 XXXX-XXXX
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <MapPin className="h-6 w-6 text-emerald-600" />
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
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
                  placeholder="Cuentanos sobre tu plataforma..."
                  className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
