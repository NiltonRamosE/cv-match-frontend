import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-linear-to-br from-blue-600 via-blue-700 to-purple-700 dark:from-blue-900 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Empieza gratis, sin tarjeta de crédito
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Destaca en cada postulación con CVs personalizados
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Deja de enviar el mismo CV genérico. Crea versiones adaptadas que realmente 
            capten la atención de los reclutadores.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              'Gratis para empezar',
              'Sin límite de CVs',
              'Formato profesional',
              'Descarga instantánea'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            >
              Crear mi primer CV
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          <p className="mt-8 text-blue-100 text-sm">
            Únete a miles de profesionales que ya optimizaron su búsqueda de empleo
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            className="fill-white dark:fill-slate-950"
          />
        </svg>
      </div>
    </section>
  );
}