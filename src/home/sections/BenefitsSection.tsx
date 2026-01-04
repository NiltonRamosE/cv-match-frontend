import React from 'react';
import { Clock, Target, Shield, Copy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Definir tipos para TypeScript
type ColorKey = 'blue' | 'green' | 'purple' | 'orange';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  color: ColorKey;
}

const benefits: Benefit[] = [
  {
    icon: Clock,
    title: 'Ahorra tiempo valioso',
    description: 'Deja de reescribir tu CV desde cero. Adapta tu información existente en minutos y dedica más tiempo a preparar tu entrevista.',
    stat: '90% menos tiempo',
    color: 'blue'
  },
  {
    icon: Target,
    title: 'CVs más relevantes',
    description: 'Destaca exactamente lo que cada empresa busca. Muestra las habilidades y experiencias que importan para cada posición específica.',
    stat: 'Más entrevistas',
    color: 'green'
  },
  {
    icon: Shield,
    title: 'Control total',
    description: 'Tu información siempre está actualizada y centralizada. Modifica tu perfil una vez y todos tus CVs reflejan los cambios.',
    stat: '100% actualizado',
    color: 'purple'
  },
  {
    icon: Copy,
    title: 'Múltiples versiones',
    description: 'Crea tantos CVs como necesites sin duplicar información. Cada versión se adapta a diferentes empresas, roles o industrias.',
    stat: 'CVs ilimitados',
    color: 'orange'
  }
];

// Tipar explícitamente el objeto colorClasses
const colorClasses: Record<ColorKey, string> = {
  blue: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30',
  green: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30',
  purple: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30',
  orange: 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30'
};

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Beneficios que marcan la diferencia
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              CV Match te ayuda a presentar tu mejor versión en cada postulación
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const colorClass = colorClasses[benefit.color]; // ✅ Ahora es seguro
              
              return (
                <Card 
                  key={idx}
                  className="border-2 hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:shadow-lg group hover:scale-[1.02] duration-300"
                >
                  <CardContent className="p-8">
                    {/* Icon and Stat */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-xl ${colorClass} group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${colorClass} group-hover:scale-105 transition-transform duration-300`}>
                        {benefit.stat}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Optimiza tu búsqueda de empleo hoy mismo
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Únete a profesionales que ya están usando CV Match para destacar en sus postulaciones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}