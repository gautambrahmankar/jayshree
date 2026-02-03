
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, ChevronRight, TrendingUp, ChevronDown, 
  ShieldCheck, Lightbulb, Leaf, Users, Egg, Home, Factory, 
  Wrench, Pill, Truck, Beaker, Building2, Download, Phone, 
  Mail, MapPin, Linkedin, Twitter, Facebook, Globe, Lock, Send,
  Navigation
} from 'lucide-react';

// --- Types ---
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

// --- Helper Components ---
const NavLink: React.FC<NavLinkProps> = ({ href, children, active, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`text-sm font-semibold transition-colors duration-200 ${
      active 
        ? 'text-primary border-b-2 border-primary' 
        : 'text-gray-600 dark:text-gray-300 hover:text-primary'
    }`}
  >
    {children}
  </a>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
    {children}
  </div>
);

// --- Main App ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'companies', 'products', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen text-[#121811] dark:text-white transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-4 md:px-8 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">
              Jayshree <span className="text-primary">Group</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#home" active={activeSection === 'home'}>Home</NavLink>
            <NavLink href="#companies" active={activeSection === 'companies'}>Companies</NavLink>
            <NavLink href="#products" active={activeSection === 'products'}>Products</NavLink>
            <NavLink href="#gallery" active={activeSection === 'gallery'}>Gallery</NavLink>
            <NavLink href="#contact" active={activeSection === 'contact'}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-primary hover:bg-primary/90 text-[#121811] font-bold py-2 px-6 rounded-lg transition-all text-sm shadow-md">
              <a href="tel:+918224013800">Call Us </a>
            </button>
            <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-200 dark:border-white/10 p-4 space-y-4 shadow-xl">
            <a href="#home" className="block text-lg font-semibold" onClick={toggleMenu}>Home</a>
            <a href="#companies" className="block text-lg font-semibold" onClick={toggleMenu}>Companies</a>
            <a href="#products" className="block text-lg font-semibold" onClick={toggleMenu}>Products</a>
            <a href="#gallery" className="block text-lg font-semibold" onClick={toggleMenu}>Gallery</a>
            <a href="#contact" className="block text-lg font-semibold" onClick={toggleMenu}>Contact</a>
            <button className="w-full bg-primary text-[#121811] font-bold py-3 rounded-lg"><a href="tel:+918224013800">Call Us</a></button>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-16 pb-20 px-4 md:px-8 lg:px-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="flex flex-col gap-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-[#078821] dark:text-primary text-xs font-bold uppercase tracking-widest rounded-full w-fit">
                  Established 1970
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                  Legacy of Excellence in <span className="text-primary">Poultry</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                  A poultry conglomerate with over 50 years of heritage, delivering quality and innovation across multiple business verticals through sustainable farming and industry leadership.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:scale-105 transition-transform text-[#121811] font-bold h-14 px-8 rounded-xl flex items-center gap-2 shadow-lg">
                <nav><NavLink href="#about" active={activeSection === 'about'}>
                  Explore Our History</NavLink></nav>
                </button>
                <button className="border-2 border-gray-200 dark:border-white/10 hover:border-primary text-[#121811] dark:text-white font-bold h-14 px-8 rounded-xl transition-all">
                  <nav><NavLink href="#companies" active={activeSection === 'companies'}>Our Verticals</NavLink></nav>
                </button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] md:aspect-video w-full rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white dark:border-white/10">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTk39HSHbLyyneNt89RVXf_9V4_9vCkx5XNcenCdvMYBMmI2CgTSyWGQakehcXmwI-n0A25eu_NGjcKjrCoxIn4BFJZU8AP3o2q8Krv4KfyJq26oIme4oxf3KVnEzlgDEMn9KhUSFw7rXSIfitV72F6XQcxm9RmYPwp7jB7OiCk1EQLOb8gvVdv4rKE38BlcvV8stD1QJb0Q6CcRqEwS5k2USuB76G9YhA_UkhR4yliL2WQSKyTo8CtH20gCGdbpN9ufPHn3eIu3wI" 
                  alt="Modern Poultry Farm" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-background-dark p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 hidden md:block animate-bounce-subtle">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Certified</p>
                    <p className="text-xl font-bold">Bio-Security Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 md:px-8 lg:px-20 bg-gray-50 dark:bg-black/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">Years of Experience</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-extrabold">50+</h3>
                <span className="text-[#078821] font-bold flex items-center text-sm gap-1">
                  <TrendingUp className="w-4 h-4" /> SINCE 1970
                </span>
              </div>
            </Card>
            <Card className="p-8">
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">Business Verticals</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-extrabold">12</h3>
                <span className="text-[#078821] font-bold flex items-center text-sm gap-1">
                  <ChevronDown className="w-4 h-4" /> DIVERSIFIED
                </span>
              </div>
            </Card>
            <Card className="p-8">
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">Annual Production</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-extrabold">Millions</h3>
                <span className="text-[#078821] font-bold flex items-center text-sm gap-1">
                  <TrendingUp className="w-4 h-4" /> +24% YOY
                </span>
              </div>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-4 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">About Jayshree Group</h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-10 rounded-full"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
            Founded in 1970 by the visionary S.S. Brahmankar, a true pioneer in the field of agriculture, Jayshree Group was born from a spirit of innovation and a commitment to regional development. As the first enterprise to introduce commercial layer egg production to Chhattisgarh, Mr. Brahmankar laid a foundation built on "tried and tested" methods combined with a constant thirst for technical knowledge. His leadership transformed a local farm into a respected name, taking the company to new heights by prioritizing quality above all else.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
            Today, as we navigate our fifth decade of successful operations, Jayshree Group has evolved from its humble beginnings into a diverse and integrated conglomerate. Our growth is defined by a relentless pursuit of excellence and a deep-seated commitment to the communities we serve. We have expanded our expertise far beyond our initial roots, successfully managing a complex ecosystem that spans broiler breeding, hatchery operations, and large-scale broiler farming.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
            This expansion is fueled by our unwavering dedication to modern technology and world-class biosecurity. By controlling the entire lifecycle—from manufacturing high-quality feed to managing our own distribution, packaging, and logistics—we ensure that our standards for excellence are never compromised. Our footprint even extends into the energy sector through our strategic fuel station operations, reflecting the versatile nature of our group. Five decades later, we remain a trusted name in the poultry industry, honoring our founder’s legacy by ensuring that every venture we touch is synonymous with quality and integrity.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-2xl flex items-center justify-center text-primary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg">Biosecurity</h4>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-2xl flex items-center justify-center text-primary">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg">Innovation</h4>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-2xl flex items-center justify-center text-primary">
                  <Leaf className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg">Sustainability</h4>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-2xl flex items-center justify-center text-primary">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg">Community</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Verticals Section */}
        <section id="companies" className="py-24 px-4 md:px-8 lg:px-20 bg-gray-50 dark:bg-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-8 w-2 bg-primary rounded-full"></div>
                  <h2 className="text-4xl font-black">Our Business Verticals</h2>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-lg">Diversity in action through integrated solutions across the poultry value chain.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-2 group text-lg">
                View All Companies
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="group cursor-pointer">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiCspd7F0KcbF2eqKm2Dr42jd84njGr1LkxbQC_kd0GJYcxQQAYS_x_b1qL5KpDbRFNZqeC-_eqGbBEc8jrGM9Q4rFAyHSk0R0ZPPsS1bVr-Knfu519dgOiNI-julOJYBOKSHtcmmNa9QSC6q8SYmgToNLjNOfsZAteWIg8UtEaSN81-GR1B--erpqoK1MJ6d1uaL2-Z47-eL_lwwJG4Qq9l1RqzUDuIPJa_fpp5bvSTt9ijEmRYebyOkKgBsrsl9-7om8t60aVGPE" 
                    alt="Egg Production"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Egg Production</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">State-of-the-art layering farms producing millions of high-quality eggs daily under strict hygiene controls.</p>
                </div>
              </Card>

              <Card className="group cursor-pointer">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhF6br-wBjwkwH3JvyBFu5nkt_sPKlSXxfKYH7QeToFaTOKoy-kjovVKl8OiEoldSY4UhnXbc0TVzZx58bOvzXbCnDV2abJ67QnIeIuFNlSBrGPPMjoBi4ucpYJ56czA0Titv54RkHCC_N0LlYV0z8iJnNW27rFTvgzMttZlJ2qU0ixRnbnh0GJXBFAkdY05_H-95ac5crQ4wm6KdtSIQ-gmqmOTLBqjFbchpCV16Nqpxe9mcbh5rTvmS5fXSayusiX6XDZyYgl9kP" 
                    alt="Feed Milling"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Feed Milling</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Customized nutritional poultry feed optimized for maximum health, immunity, and productivity of flocks.</p>
                </div>
              </Card>

              <Card className="group cursor-pointer">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ_AbDkqSPgh2L0FEzY7qHHpoWp9rpthFHbha5tSf7fMKBxd2kMmKJwnKqCNwd2-9tqMfN3zy8hsyhQc4Qi--feYFC_KZFCDXiHagAB9a-jf1_-WxrXh160rx98IyFwH8ztiL-N4h7XEtHoasFZwJ53t-5yCiuzzRX13oyvTjPunx9NiNKkTJHdygNmg85b_zlYHjyODZRLrEmcEdWN80orQPfyIFxFleyiAv9y8mQfkU4HIEJ4L7661ZsIjtYLAR0SuEmgRg_Aler" 
                    alt="Hatcheries"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Hatcheries</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">Breeding excellence through superior genetics and controlled environmental conditions for day-old chicks.</p>
                </div>
              </Card>
            </div>

            {/* Detailed Company Grid */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Egg />, title: "Broiler Breeding", desc: "Global standards in poultry genetics and breeding management." },
                { icon: <Home />, title: "Commercial Hatchery", desc: "State-of-the-art incubation facilities with high-tech monitoring." },
                { icon: <Factory />, title: "Feed Manufacturing", desc: "Nutritious and balanced poultry nutrition for optimal growth." },
                { icon: <Wrench />, title: "Poultry Equipment", desc: "Advanced automation and climate control for modern farms." },
                { icon: <Pill />, title: "Medicine Distribution", desc: "Certified pharmaceutical distribution for avian health." },
                { icon: <Truck />, title: "Logistics", desc: "Specialized cold chain and livestock transport solutions." },
                { icon: <Beaker />, title: "R&D", desc: "Driving innovation in disease prevention and feed efficiency." },
                { icon: <Factory />, title: "Processing Unit", desc: "Modern, hygienic broiler processing and packaging plant." },
                { icon: <Building2 />, title: "Corporate Services", desc: "Integrated corporate management and strategic planning." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 hover:border-primary/50 transition-all hover:shadow-xl group">
                  <div className="bg-primary/10 p-4 rounded-2xl w-fit text-primary group-hover:bg-primary group-hover:text-[#121811] transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-10 w-2 bg-primary rounded-full"></div>
              <h2 className="text-4xl font-black">Our Products</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Table Eggs", desc: "Farm-fresh, nutrient-rich table eggs for daily consumption.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM5yWaBlrUsre4CzG6qsdO8-2cTVAcE5HQAVybVeiNLeGqrfoG_j6yjVekMfiPCG7oSs95cbAjoBZSzBmwUoxP0GaHON-7GmNzFrwq6m-ny3mrhkcAsv61LRtQTcCN95l8Z--8nKnkjStmGfjiYadXgbhU3AYEstaji2wQm4eJy3ZXEwpizHWp3WRUOFirI6CErlEt72xitI8iF_fsl1S4lHHed9KTPnxPRRFsMLvydoAFw-aoyw6uvyWH-PhPLW2G_6pjtP19sCb7" },
                { title: "Hatching Eggs", desc: "Premium quality fertile eggs from our selected breeder stock.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6bqSb_Jep4nHFeN9U955q64qLCTwNxty7POuJD6xc3TAtiu7GIW7xapUh1X45ffb3FFwHGRy2aE_BmbR9PSTNe8cpZGkI1fdOZZfLaxu33KbGzYI3vIOvJq2jp7TRlr8Fw8Wfi8q8KS_K472aPeQDs07qh_uhAOBb1iCplBZZP-TqeMiId09nXSuiE-CkimKMXEYO25-fLy2n6Vr3rF4EL2C5jMekmTroCylFTQDppMusbthuTXuhAzLqD3JLU2reIrkvndSCYVXD" },
                { title: "Day-old Chicks", desc: "Robust, vaccinated broiler chicks with high growth potential.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3w52B7QeDdTd6KoIEPgEJTxS8ErTDavvLKHzsOgQstUFr17Yo_3mH6LoQkjLZ--qShO8cHWpibt3yDoPp0Hqqk_yKZp2gHiMzw5awxsMoXF_9QuXaJNGpD8YOPURIiPBZ0EJOawKJ73Jdj3yL2Owv0cjO03XutM5LtNK0uBzVEGt5jS9_Cl01b9CjYJanhh7E5qwFqVerXpITvVhIZj4z62dms4SBk8L-V8_NB3uTVhR9_1WgJWb5J2lcOXQyasKSgsk3wvE-vfz3" },
                { title: "Broiler Meat", desc: "Hygienically processed tender meat available in various cuts.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu1b_vSCITkVjymtOCdkduRLmehBbpTS5PyN4n9I5uqAQYrHVCIaRjV2m3x1U9ozHW-gIejJVlZD4xUeCuZSSiUZ5p62O917SUrWat1pea8e4PKIzLtoem-dnNot8QT7A61OezrL2_juqa5uGbiepAPhoPrC5mIV5JUuj9e8mExvmBeVs5cpfhRfb9UbcvV-HRnJqiw77gkPGV-tfkPdxhmNt3eG-GGuGv8gla_HBb3udRr3M2g896HlhKtvVKtyDR8L61c8HO8X66" },
                { title: "Poultry Feed", desc: "High-conversion growth formulas for different life stages.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeqv1yWnhrE30KYt1xyZJwFRkbSO3oBBx7-6629x19zgmXyHaW5yxL1sJlDgMJwwEBb-dMrHrdYxuQnezb55WL2BL1RD_h5JPu_05xNJtzpM7LQx3HIyIJSiJ6q6c9sdaA7Esof0tjVyhQNP_0aFOhJMSoy8U--xAXSoN6VrWlMZv7NqZPu5MTpMVY2W4Hz8tEqQNuSo3vhL9S_oy1SIt_vzS0vHE04B7C2fkF0LN24xDcI8l7aPS8hpqFWrcmmxp93rdA81OqDdHC" },
                { title: "Organic Manure", desc: "Natural nitrogen-rich fertilizer for sustainable agriculture.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkIDtA7KsXxs8ixy_dpX-2uZL3Q9aUOTZHu9wCx2-7Plpy97j5A571mIgvqSao4OdzOeXtyxc0SYJcg2zB6OCHM2ftqNNM0piRoxjZaf5HaiKuQxD7jaCom2ccHGh-74Ex87JcSuXFEiuN1--FDrbcnJb6Tdmlycsd1i-kFTeUs1HVktUGj8b-JGrUmaQ5sVJFLDTbqBPd20OAh_UZof3M3E0KAfknkBEMwFkXckPlxWGLdKyZjPZw_-v82EM9Zu0xChSiyEu4-wfs" },
                { title: "Specialty Supplements", desc: "Essential health, immunity and growth boosters.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOAPcC4Z3WQ9aMPjkeOB08JHYQ48VeB4pfLHi3s9nSGhCI6XjX6teBC6EgYCRH5WlkBrctrKCG2d7MpEbbBkr-0j1dwbvtn8bwAvSLqsH2RNDjV1LswfLUC7o0QIiGFV9Ubw0i_F2qEmUprJcNl6mUQXEEy9oeUVfMhMurY5_S4TL7H9Mg6IhOQmPfrnpQA3KIPDCVGUBojGYlnNGK1lNsxJtLlusotLTn_oRUoD5fVee02QaBaJePpz3qFMtlJ5rWVLa_EXSWIdzN" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-5 group">
                  <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              
              {/* Product Badges */}
              <div className="flex flex-col justify-center items-center gap-6 rounded-2xl border-2 border-dashed border-primary/30 p-10 text-center bg-primary/5">
                <ShieldCheck className="w-16 h-16 text-primary" />
                <div>
                  <h4 className="text-2xl font-bold mb-2">Quality Guaranteed</h4>
                  <p className="text-gray-500 dark:text-gray-400">All products undergo rigorous lab testing for safety, purity, and efficiency.</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center gap-6 rounded-2xl border-2 border-dashed border-primary/30 p-10 text-center bg-primary/5">
                <Download className="w-16 h-16 text-primary" />
                <div>
                  <h4 className="text-2xl font-bold mb-4">Product Catalog</h4>
                  <button className="bg-primary text-[#121811] font-bold py-3 px-8 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform mx-auto">
                    Download PDF <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-4 md:px-8 lg:px-20 bg-gray-50 dark:bg-black/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black mb-4">Our Operations Gallery</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-16">Glimpses into our world-class poultry infrastructure and ethical farming practices.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "State-of-the-art Bio-security", desc: "Advanced climate control systems for optimal bird health.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTk39HSHbLyyneNt89RVXf_9V4_9vCkx5XNcenCdvMYBMmI2CgTSyWGQakehcXmwI-n0A25eu_NGjcKjrCoxIn4BFJZU8AP3o2q8Krv4KfyJq26oIme4oxf3KVnEzlgDEMn9KhUSFw7rXSIfitV72F6XQcxm9RmYPwp7jB7OiCk1EQLOb8gvVdv4rKE38BlcvV8stD1QJb0Q6CcRqEwS5k2USuB76G9YhA_UkhR4yliL2WQSKyTo8CtH20gCGdbpN9ufPHn3eIu3wI" },
                { title: "Sustainable Farming", desc: "Eco-friendly waste management and renewable energy usage.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM5yWaBlrUsre4CzG6qsdO8-2cTVAcE5HQAVybVeiNLeGqrfoG_j6yjVekMfiPCG7oSs95cbAjoBZSzBmwUoxP0GaHON-7GmNzFrwq6m-ny3mrhkcAsv61LRtQTcCN95l8Z--8nKnkjStmGfjiYadXgbhU3AYEstaji2wQm4eJy3ZXEwpizHWp3WRUOFirI6CErlEt72xitI8iF_fsl1S4lHHed9KTPnxPRRFsMLvydoAFw-aoyw6uvyWH-PhPLW2G_6pjtP19sCb7" },
                { title: "Global Distribution", desc: "Efficient logistics network ensuring fresh delivery across regions.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhF6br-wBjwkwH3JvyBFu5nkt_sPKlSXxfKYH7QeToFaTOKoy-kjovVKl8OiEoldSY4UhnXbc0TVzZx58bOvzXbCnDV2abJ67QnIeIuFNlSBrGPPMjoBi4ucpYJ56czA0Titv54RkHCC_N0LlYV0z8iJnNW27rFTvgzMttZlJ2qU0ixRnbnh0GJXBFAkdY05_H-95ac5crQ4wm6KdtSIQ-gmqmOTLBqjFbchpCV16Nqpxe9mcbh5rTvmS5fXSayusiX6XDZyYgl9kP" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-6 group">
                  <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">We are here to answer your questions and explore collaboration opportunities. Reach out to our team.</p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#121811] transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-bold">info@jayshree-group.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#121811] transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-xl font-bold">+91 8224013800</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#121811] transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-xl font-bold"> Dhanshree estate, Devpuri, Raipur, Chhattisgarh 492015</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-10 bg-gray-50 dark:bg-white/5 border-none shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Message Us</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-400">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-background-dark outline-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-400">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-background-dark outline-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 dark:text-gray-400">Subject</label>
                  <select className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-background-dark outline-none focus:ring-2 focus:ring-primary transition-all">
                    <option>Partnership Inquiry</option>
                    <option>Product Inquiry</option>
                    <option>General Support</option>
                    <option>Career</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 dark:text-gray-400">Your Message</label>
                  <textarea rows={4} placeholder="How can we help your business?" className="w-full p-4 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-background-dark outline-none focus:ring-2 focus:ring-primary transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-[#121811] font-black py-4 rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[500px] w-full relative group border-y border-gray-200 dark:border-white/10 overflow-hidden bg-gray-100 dark:bg-[#0a0f09]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d823.0941827134653!2d81.67387664609097!3d21.21104135078205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1770100139838!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            title="Jayshree Group HQ Location"
          ></iframe>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 to-transparent dark:from-black/10"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-20 md:translate-x-0 bg-white dark:bg-background-dark p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col items-start gap-4 transition-all duration-500 hover:scale-105 pointer-events-auto max-w-[320px]">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-lg">Jayshree HQ</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">Devpuri</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Dhanshree estate,Devpuri,Chhattisgarh 492015
            </p>
            <a 
              href="https://maps.app.goo.gl/DwPxsecV9TE72bWm7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-primary hover:bg-primary/90 text-[#121811] font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-all"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black/40 border-t border-gray-200 dark:border-white/10 pt-20 pb-10 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <h2 className="text-2xl font-extrabold tracking-tight">Jayshree <span className="text-primary">Group</span></h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Leading the poultry industry with over five decades of commitment to quality, nutrition, and sustainability.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Globe className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><TrendingUp className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-wider text-xs">Company</h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability Report</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-wider text-xs">Services</h4>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Broiler Farming</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Processing Units</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cold Chain Logistics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Poultry Feed Supply</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-wider text-xs">Internal Portal</h4>
              <p className="text-sm text-gray-500 mb-6">Authorized personnel access only.</p>
              <button className="w-full bg-gray-900 text-white dark:bg-white/10 py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-black transition-colors">
                <Lock className="w-4 h-4" /> Company Login
              </button>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <p>© 2024 Jayshree Group. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
            </div>
            <div className="flex gap-6">
              <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
