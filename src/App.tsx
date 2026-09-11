import { useState, useEffect } from "react"
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Mail,
  Camera,
} from "lucide-react"

import heroPhoto from "@/imports/WhatsApp_Image_2026-09-11_at_10.40.04.jpeg"

const WHATSAPP_NUMBER = "6281234567890"

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: any) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm"
  const variants = {
    primary: "bg-primary text-white hover:bg-[#155a9c]",
    secondary:
      "bg-transparent text-white border border-white/30 hover:bg-white/10",
    outline:
      "border border-border-gray text-foreground hover:border-foreground",
    dark: "bg-foreground text-white hover:bg-gray-800",
  }
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }

  return (
    <button
      className={`${base} ${variants[(variant as keyof typeof variants)]} ${sizes[props.size || "md"]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("Semua")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openWhatsApp = (
    message = "Halo SanDesign, saya tertarik dengan jasa pembuatan Lanyard & ID Card.",
  ) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    )
  }

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Layanan", href: "#layanan" },
    { name: "Katalog", href: "#katalog" },
    { name: "Proses", href: "#proses" },
    { name: "FAQ", href: "#faq" },
  ]

  const services = [
    {
      num: "01",
      title: "Desain Lanyard",
      desc: "Desain lanyard custom sesuai identitas brand, organisasi, event, atau komunitas.",
    },
    {
      num: "02",
      title: "Cetak Lanyard",
      desc: "Produksi lanyard custom dengan berbagai pilihan desain dan kebutuhan kualitas premium.",
    },
    {
      num: "03",
      title: "Desain ID Card",
      desc: "Pembuatan desain kartu identitas yang profesional, modern, dan sesuai standar perusahaan.",
    },
    {
      num: "04",
      title: "Cetak ID Card",
      desc: "Produksi ID Card awet untuk perusahaan, sekolah, event, dan komunitas.",
    },
    {
      num: "05",
      title: "Corporate Kit",
      desc: "Paket lengkap identitas karyawan dari lanyard, ID card, hingga holder eksklusif.",
    },
    {
      num: "06",
      title: "Custom Branding",
      desc: "Kebutuhan desain dan branding merchandise lainnya yang dapat dikonsultasikan.",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Lanyard Custom Printing",
      cat: "Lanyard",
      price: "Mulai Rp 15.000",
      image:
        "https://images.unsplash.com/photo-1623014169733-4f938d26c596?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Lanyard Premium Tisu",
      cat: "Lanyard",
      price: "Mulai Rp 20.000",
      image:
        "https://images.unsplash.com/photo-1598284646736-2244199990ab?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "ID Card PVC Premium",
      cat: "ID Card",
      price: "Mulai Rp 10.000",
      image:
        "https://images.unsplash.com/photo-1593452332145-21d3e8e8ce1b?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "ID Card Event",
      cat: "ID Card",
      price: "Mulai Rp 8.000",
      image:
        "https://images.unsplash.com/photo-1582298538104-efa9ca10845a?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      name: "ID Card Holder Kulit",
      cat: "Accessories",
      price: "Mulai Rp 25.000",
      image:
        "https://images.unsplash.com/photo-1622384024255-a0edccdbbb90?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Paket Corporate (Lanyard+ID)",
      cat: "Paket",
      price: "Hubungi Kami",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    },
  ]

  const filteredProducts =
    activeFilter === "Semua"
      ? products
      : products.filter((p) => p.cat === activeFilter)

  const faqs = [
    {
      q: "Apakah desain bisa custom?",
      a: "Tentu, kami menyediakan layanan custom desain sesuai dengan identitas dan guideline brand Anda.",
    },
    {
      q: "Berapa minimal pemesanan?",
      a: "Minimal pemesanan bervariasi tergantung produk. Untuk Lanyard mulai dari 20 pcs, ID Card mulai dari 10 pcs.",
    },
    {
      q: "Apakah bisa request desain sendiri?",
      a: "Bisa. Jika Anda sudah memiliki file desain, Anda bisa mengirimkannya kepada kami untuk langsung diproduksi.",
    },
    {
      q: "Bagaimana proses pemesanannya?",
      a: "Hubungi kami via WhatsApp, diskusikan kebutuhan Anda, setujui desain dan penawaran, lalu kami akan produksi pesanan Anda.",
    },
    {
      q: "Berapa lama proses produksinya?",
      a: "Waktu produksi standar adalah 3-7 hari kerja tergantung jumlah pesanan dan antrean produksi.",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-border-gray py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className={`font-display font-bold text-2xl tracking-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              SanDesign.
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-text-gray hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              size="sm"
              variant={isScrolled ? "dark" : "secondary"}
              onClick={() => openWhatsApp()}
              className="gap-2"
            >
              <MessageCircle size={16} />
              Hubungi Kami
            </Button>
          </div>

          <button
            className={`lg:hidden transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border-gray shadow-lg p-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground hover:text-primary p-2 border-b border-border-gray/50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full mt-2 gap-2"
              variant="dark"
              onClick={() => openWhatsApp()}
            >
              <MessageCircle size={18} />
              Hubungi Kami
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-5 lg:px-8 bg-gradient-to-br from-[#1A6CBA] to-[#64B5F6] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left text-white animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 border border-white/30 text-white text-xs font-semibold uppercase tracking-widest rounded-sm">
              Premium Design & Print
            </div>
            <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl/tight tracking-tight">
              Elevate Your <br />
              Brand Identity.
            </h1>
            <p className="text-lg text-blue-50 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Jasa desain dan cetak premium untuk perusahaan, event, dan komunitas. Kami mewujudkan identitas visual Anda dengan standar profesional tertinggi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-[#1A6CBA] hover:bg-gray-100 w-full sm:w-auto"
                onClick={() => openWhatsApp()}
              >
                Mulai Konsultasi
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("katalog")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Lihat Katalog
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none relative animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
            <div className="relative overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:ml-auto border-4 border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
              <img
                src={heroPhoto}
                alt="SanDesign Hero Lanyard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Clients Banner */}
      <section className="border-b border-border-gray bg-white py-10 px-5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 lg:gap-16 text-xs sm:text-sm font-semibold text-text-gray uppercase tracking-widest">
          <span>Perusahaan</span>
          <span className="hidden sm:inline text-border-gray">•</span>
          <span>Organisasi</span>
          <span className="hidden sm:inline text-border-gray">•</span>
          <span>Sekolah</span>
          <span className="hidden sm:inline text-border-gray">•</span>
          <span>Event</span>
          <span className="hidden sm:inline text-border-gray">•</span>
          <span>Komunitas</span>
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="py-24 px-5 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative">
            <div className="aspect-square max-w-lg mx-auto bg-off-white overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&h=800&fit=crop"
                alt="Proses Desain Profesional"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground">
              Pendekatan Profesional <br /> Untuk Identitas Visual Anda.
            </h2>
            <div className="w-12 h-[2px] bg-primary"></div>
            <p className="text-text-gray text-lg font-light leading-relaxed">
              SanDesign membantu perusahaan dan organisasi membangun citra profesional melalui desain dan produksi Lanyard serta ID Card berkualitas tinggi. Kami percaya bahwa detail kecil mencerminkan profesionalisme brand Anda di mata klien dan publik.
            </p>
            <div className="pt-4 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Desain Kustom Presisi</h4>
                <p className="text-sm text-text-gray font-light">Setiap detail disesuaikan dengan pedoman identitas brand Anda.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Material Premium</h4>
                <p className="text-sm text-text-gray font-light">Menggunakan bahan tahan lama dengan hasil cetak warna yang tajam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="py-24 bg-off-white px-5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-4">
                Layanan Kami
              </h2>
              <p className="text-text-gray text-lg font-light leading-relaxed">
                Solusi komprehensif untuk kebutuhan identitas visual dan branding Anda, dieksekusi dengan presisi dan kualitas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, i) => (
              <div
                key={i}
                className="group border-t border-border-gray pt-6 hover:border-primary transition-colors duration-300"
              >
                <span className="text-xs font-semibold text-primary mb-4 block tracking-widest">
                  {service.num}
                </span>
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="katalog" className="py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-4">
                Katalog Produk
              </h2>
              <p className="text-text-gray text-lg font-light">
                Eksplorasi lini produk premium kami.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Semua", "Lanyard", "ID Card", "Accessories", "Paket"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 text-sm font-medium transition-all rounded-sm border ${
                    activeFilter === cat
                      ? "bg-foreground text-white border-foreground"
                      : "bg-transparent text-text-gray border-border-gray hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white group cursor-pointer border border-border-gray hover:border-primary transition-colors duration-300 rounded-sm overflow-hidden"
                onClick={() =>
                  openWhatsApp(
                    `Halo SanDesign, saya tertarik dengan produk ${product.name}`,
                  )
                }
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-off-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-text-gray uppercase tracking-widest mb-2">
                    {product.cat}
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-gray text-sm mb-6 font-light">
                    {product.price}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:text-foreground transition-colors">
                    Pesan Sekarang{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proses" className="py-24 px-5 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-4">
              Cara Pemesanan
            </h2>
            <p className="text-text-gray text-lg font-light">
              Proses kolaborasi yang efisien, terstruktur, dan transparan.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Desktop Line Connector */}
            <div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-border-gray -z-10"></div>
            
            {[
              {
                n: "01",
                t: "Konsultasi",
                d: "Diskusikan spesifikasi dan kebutuhan visual Anda via WhatsApp.",
              },
              {
                n: "02",
                t: "Kurasi",
                d: "Pemilihan material, model produk, dan penyusunan penawaran.",
              },
              {
                n: "03",
                t: "Desain",
                d: "Proses pembuatan dan persetujuan (approval) desain.",
              },
              {
                n: "04",
                t: "Produksi",
                d: "Pencetakan dengan standar quality control yang ketat.",
              },
              {
                n: "05",
                t: "Pengiriman",
                d: "Produk dikemas rapi dan dikirim ke lokasi Anda.",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col bg-transparent">
                <div className="w-12 h-12 bg-white border border-border-gray flex items-center justify-center font-display font-semibold text-primary text-sm mb-6 rounded-sm shadow-sm">
                  {step.n}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.t}</h3>
                <p className="text-text-gray text-sm font-light leading-relaxed">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-foreground mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-text-gray text-lg font-light">
              Informasi seputar layanan dan pemesanan.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-border-gray overflow-hidden"
              >
                <button
                  className="w-full py-5 text-left flex items-center justify-between font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown
                    className={`transition-transform duration-300 text-text-gray ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === i
                      ? "max-h-40 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-text-gray font-light text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 bg-foreground text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display font-semibold text-3xl lg:text-5xl text-white tracking-tight">
            Siap Meningkatkan Citra Perusahaan Anda?
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Mari diskusikan kebutuhan Lanyard dan ID Card profesional untuk tim dan brand Anda.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-blue-600 gap-2 rounded-sm"
              onClick={() => openWhatsApp()}
            >
              <MessageCircle size={18} /> Mulai Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-gray-400 pt-16 pb-8 px-5 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <span className="font-display font-bold text-2xl tracking-tight text-white block mb-6">
              SanDesign.
            </span>
            <p className="text-sm font-light leading-relaxed">
              Solusi desain dan cetak Lanyard serta ID Card premium untuk memperkuat identitas profesional perusahaan Anda.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs">
              Navigasi
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="hover:text-primary transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs">
              Layanan
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Lanyard Kustom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cetak ID Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Corporate Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs">
              Kontak
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Camera size={16} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail size={16} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <p>&copy; 2026 SanDesign. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  )
}
