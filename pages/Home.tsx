import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Layout, Smartphone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ImageCompany from '../image/logo.jpg';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center py-20 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="text-center md:text-left z-10 order-2 md:order-1">
              <div className="opacity-0 animate-slide-up">
                 <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-slate-900/50 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium backdrop-blur-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    {t.home.available}
                 </div>
              </div>

              <h1 className="opacity-0 animate-slide-up-delay-1 text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-6">
                {t.home.heroTitlePrefix} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono">
                  {t.home.heroTitleSuffix}
                </span>
              </h1>
              
              <p className="opacity-0 animate-slide-up-delay-2 text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                {t.home.intro}
              </p>
              
              <div className="opacity-0 animate-slide-up-delay-3 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link
                  to="/experience"
                  className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-blue-500/25 group font-mono"
                >
                  {t.home.btnExperience}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:buildapptech@gmail.com"
                  className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-300 font-mono"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  buildapptech@gmail.com
                </a>
              </div>
            </div>

            {/* Right: Coding Image (Circular) */}
            <div className="opacity-0 animate-slide-up-delay-2 relative order-1 md:order-2 mb-12 md:mb-0 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] aspect-square">
                {/* Circular Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800/80 shadow-2xl shadow-blue-500/20 group">
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10"></div>
                  
                  {/* The Image */}
                  <img 
                    src={ImageCompany} 
                    alt="Zumar coding on laptop" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating Badge - Positioned Outside at Bottom Edge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-30 bg-slate-900/95 backdrop-blur-md border-2 border-slate-700 py-2.5 px-5 md:px-7 rounded-full flex items-center shadow-2xl shadow-blue-500/30 whitespace-nowrap hover:scale-105 hover:border-blue-500/50 transition-all duration-300 cursor-default">
                  <Code2 className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm text-slate-100 font-semibold mr-2">{t.home.codingBadge}</span>
                  {/* <span className="text-xs text-slate-500 font-mono border-l border-slate-700 pl-2 ml-1">web_app_v2</span> */}
                </div>
              </div>
              
              {/* Decorative elements behind image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[300px] md:max-w-[400px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills / Philosophy */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-2xl bg-slate-900 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-800 hover:border-blue-500/30">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 font-mono">{t.home.cards.clean.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t.home.cards.clean.desc}
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-slate-900 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 border border-slate-800 hover:border-cyan-500/30">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 font-mono">{t.home.cards.responsive.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t.home.cards.responsive.desc}
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-slate-900 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-slate-800 hover:border-purple-500/30">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 font-mono">{t.home.cards.ux.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t.home.cards.ux.desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;