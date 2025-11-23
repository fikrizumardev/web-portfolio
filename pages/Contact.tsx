import React, { useState } from 'react';
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="opacity-0 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-mono">
            {t.contact.title} <span className="text-blue-500">{t.contact.titleHighlight}</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            {t.contact.intro}
          </p>

          <div className="space-y-6">
            <div className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors hover:shadow-lg hover:shadow-blue-500/10">
              <div className="bg-blue-500/10 p-3 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">{t.contact.info.email}</h3>
                <p className="text-slate-400 font-mono group-hover:text-blue-400 transition-colors">hello@example.com</p>
              </div>
            </div>
            <div className="group flex items-center space-x-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors hover:shadow-lg hover:shadow-blue-500/10">
              <div className="bg-blue-500/10 p-3 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">{t.contact.info.location}</h3>
                <p className="text-slate-400 font-mono group-hover:text-blue-400 transition-colors">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="opacity-0 animate-slide-up-delay-2 bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
          {submitted ? (
             <div className="h-full flex flex-col justify-center items-center text-center py-12 animate-fade-in">
                <div className="bg-green-500/20 p-4 rounded-full text-green-400 mb-6 animate-pulse">
                    <Send className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2 font-mono">{t.contact.successTitle}</h3>
                <p className="text-slate-400 mb-8">{t.contact.successDesc}</p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="flex items-center text-blue-400 font-medium hover:text-blue-300 group transition-colors"
                >
                    {t.contact.btnAgain}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1 font-mono">
                    {t.contact.labels.name}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-blue-500 focus:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1 font-mono">
                    {t.contact.labels.email}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-blue-500 focus:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                />
                </div>
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1 font-mono">
                    {t.contact.labels.message}
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus:border-blue-500 focus:bg-slate-950 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="Your message..."
                ></textarea>
                </div>
                <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 flex items-center justify-center font-mono ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                {isSubmitting ? (
                    t.contact.btnSending
                ) : (
                    <>
                    {t.contact.btnSend}
                    <Send className="ml-2 h-5 w-5" />
                    </>
                )}
                </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
