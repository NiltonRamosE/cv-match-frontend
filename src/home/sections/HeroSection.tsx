import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 mb-8">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              La forma inteligente de gestionar tu currículum
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Un CV diferente para{' '}
            <span className="text-blue-600 dark:text-blue-400">cada oportunidad</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Guarda tu información profesional una vez y crea versiones personalizadas de tu currículum 
            para cada empresa o puesto al que postules. Sin duplicar datos, sin perder tiempo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Crear mi CV gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Ver cómo funciona
            </Button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-linear-to-t from-white dark:from-slate-950 to-transparent z-10 h-32 bottom-0"></div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Desarrollador Frontend', 'UX/UI Designer', 'Product Manager'].map((title, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">
                        {title}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-4/5"></div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}