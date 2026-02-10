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
  CheckCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">Soldigit</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#proyectos" className="text-gray-600 hover:text-blue-600 transition-colors">Proyectos</a>
              <a href="#contacto" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Soluciones Fintech de Confianza
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformamos el futuro de los{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                pagos digitales
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Somos una empresa fintech especializada en soluciones de pago, 
              billeteras virtuales y validación de identidad para empresas que 
              buscan innovar en el mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all hover:scale-105"
              >
                Hablemos de tu proyecto
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-medium border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para el ecosistema de pagos digitales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Billeteras Virtuales
              </h3>
              <p className="text-gray-600">
                Desarrollo e integración de billeteras digitales seguras, 
                permitiendo a tus usuarios gestionar sus fondos de manera eficiente.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Procesadores de Pago
              </h3>
              <p className="text-gray-600">
                Integraciones con los principales procesadores de pago del mercado 
                para ofrecer múltiples opciones a tus clientes.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Validación 3DS
              </h3>
              <p className="text-gray-600">
                Implementación de protocolos 3D Secure para operaciones con 
                tarjetas de crédito, maximizando la seguridad de las transacciones.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Validación de Riesgo
              </h3>
              <p className="text-gray-600">
                Integraciones con sistemas de análisis de riesgo para prevenir 
                fraudes y proteger tu negocio de operaciones sospechosas.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 md:col-span-2 lg:col-span-2">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Validación de Identidad
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Integraciones con servicios de verificación de identidad como VALIDA y RENAPER, 
                garantizando el cumplimiento normativo y la seguridad en el onboarding de usuarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Algunos de los proyectos en los que hemos trabajado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <Wallet className="w-20 h-20 text-white/80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Billetera Digital Finbank
                </h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo completo de una billetera virtual con soporte para 
                  múltiples monedas y transferencias instantáneas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Billetera</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">P2P</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">QR</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
                <CreditCard className="w-20 h-20 text-white/80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Gateway de Pagos E-commerce
                </h3>
                <p className="text-gray-600 mb-4">
                  Integración de pasarela de pagos con múltiples procesadores 
                  y validación 3DS para una plataforma de e-commerce.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">3DS</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Pagos</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">API</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <UserCheck className="w-20 h-20 text-white/80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sistema KYC Automatizado
                </h3>
                <p className="text-gray-600 mb-4">
                  Plataforma de verificación de identidad con integración a 
                  RENAPER y sistemas de validación biométrica.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">KYC</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">RENAPER</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Biometría</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experiencia y compromiso en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
              <p className="text-blue-100">Años de trabajo en el ecosistema fintech</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguridad</h3>
              <p className="text-blue-100">Cumplimiento de estándares PCI DSS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integraciones</h3>
              <p className="text-blue-100">Conectamos con los principales proveedores</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte</h3>
              <p className="text-blue-100">Acompañamiento continuo post-implementación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hablemos de tu proyecto
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Estamos listos para ayudarte a llevar tu negocio al siguiente nivel 
                con soluciones de pago innovadoras y seguras.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:contacto@soldigit.com" className="text-gray-900 font-medium hover:text-blue-600">
                      contacto@soldigit.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <a href="tel:+5411XXXXXXXX" className="text-gray-900 font-medium hover:text-blue-600">
                      +54 11 XXXX-XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="text-gray-900 font-medium">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg"></div>
            <span className="text-xl font-bold">Soldigit</span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Soldigit. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
