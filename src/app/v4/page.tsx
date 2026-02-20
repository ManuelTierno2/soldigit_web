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
    tone: "from-emerald-500 to-teal-500",
  },
  {
    title: "Plataformas SaaS",
    description:
      "Arquitecturas multi-tenant, billing y escalabilidad para productos B2B.",
    icon: Cpu,
    tone: "from-amber-500 to-orange-500",
  },
  {
    title: "Integraciones API",
    description:
      "Conectamos tu stack con partners, ERPs y servicios cloud criticos.",
    icon: Code,
    tone: "from-sky-500 to-cyan-500",
  },
  {
    title: "DevOps y Observabilidad",
    description:
      "CI/CD, monitoreo y rendimiento para operar con confianza 24/7.",
    icon: Rocket,
    tone: "from-lime-500 to-emerald-500",
  },
  {
    title: "Datos y Automatizacion",
    description:
      "Pipelines de datos y automatizaciones inteligentes para escalar procesos.",
    icon: Shield,
    tone: "from-teal-500 to-slate-500",
  },
];

const projects = [
  {
    title: "Suite de Gestion Operativa",
    description:
      "Sistema modular para coordinar operaciones, inventario y reportes en tiempo real.",
    tags: ["SaaS", "Ops", "Analytics"],
    tone: "from-emerald-600 to-emerald-800",
    icon: Layers,
  },
  {
    title: "Marketplace B2B",
    description:
      "Plataforma de comercio entre empresas con reglas de negocio complejas.",
    tags: ["B2B", "Pagos", "Workflow"],
    tone: "from-amber-500 to-orange-600",
    icon: Code,
  },
  {
    title: "Onboarding Digital",
    description:
      "Experiencia de alta conversion con validaciones, scoring y automatizacion.",
    tags: ["KYC", "Automation", "UX"],
    tone: "from-sky-600 to-cyan-700",
    icon: Cpu,
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

export default function VersionFour() {
  return (
    <div className="min-h-screen bg-[#f7faf7] text-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-emerald-100 bg-[#f7faf7]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-lg" />
              <span className="text-xl font-bold text-slate-900">Soldigit</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-slate-600 hover:text-emerald-700 transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-slate-600 hover:text-emerald-700 transition-colors">
                Servicios
              </a>
              <a href="#proyectos" className="text-slate-600 hover:text-emerald-700 transition-colors">
                Proyectos
              </a>
              <a href="#contacto" className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f7faf7] to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Produccion de software
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Construimos plataformas digitales con
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                {" "}impacto real
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Equipos senior de producto, UX y tecnologia para lanzar software
              robusto, integrable y listo para escalar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-all hover:scale-105"
              >
                Hablemos de tu proyecto
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-full text-lg font-medium border border-emerald-200 hover:border-emerald-400 hover:text-emerald-700 transition-all"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nuestro Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Soluciones integrales para construir software de alto impacto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 hover:shadow-xl hover:shadow-emerald-100/60 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.tone} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-emerald-50/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Algunos productos que ayudamos a construir
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.tone} flex items-center justify-center`}>
                  <project.icon className="w-20 h-20 text-white/80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que elegirnos
            </h2>
            <p className="text-emerald-100 max-w-2xl mx-auto text-xl">
              Foco en software de producto con impacto real
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-emerald-100">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Hablemos de tu proyecto
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Estamos listos para ayudarte a construir software que haga crecer
                tu negocio.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href="mailto:contacto@soldigit.com" className="text-slate-900 font-medium hover:text-emerald-700">
                      contacto@soldigit.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Telefono</p>
                    <a href="tel:+5411XXXXXXXX" className="text-slate-900 font-medium hover:text-emerald-700">
                      +54 11 XXXX-XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Ubicacion</p>
                    <p className="text-slate-900 font-medium">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuentanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
