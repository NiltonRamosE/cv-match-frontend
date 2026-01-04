import React from 'react';
import { UserCircle, FileText, Target, Download } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ColorKey = 'blue' | 'purple' | 'green' | 'orange';

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  color: ColorKey;
}

const steps: Step[] = [
  {
    icon: UserCircle,
    number: '01',
    title: 'Crea tu perfil profesional',
    description: 'Ingresa toda tu información una sola vez: experiencia laboral, educación, habilidades, proyectos y logros. Tu perfil será la base para todos tus CVs.',
    color: 'blue'
  },
  {
    icon: FileText,
    number: '02',
    title: 'Elige tu plantilla',
    description: 'Selecciona el formato Harvard o cualquier otra plantilla disponible. Podrás duplicar y personalizar cada plantilla según tus necesidades.',
    color: 'purple'
  },
  {
    icon: Target,
    number: '03',
    title: 'Adapta por empresa',
    description: 'Crea versiones específicas seleccionando qué experiencias y habilidades mostrar. Destaca lo más relevante para cada puesto sin perder tu información original.',
    color: 'green'
  },
  {
    icon: Download,
    number: '04',
    title: 'Descarga y postula',
    description: 'Exporta tu CV personalizado en formato PDF profesional. Listo para enviar y causar una excelente primera impresión.',
    color: 'orange'
  }
];

const colorClasses: Record<ColorKey, {
  bg: string;
  text: string;
  border: string;
}> = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-950',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-950',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800'
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-950',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800'
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-950',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800'
  }
};

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Cómo funciona CV Match
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Cuatro pasos simples para crear CVs personalizados y profesionales
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color];
              
              return (
                <div 
                  key={idx}
                  className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="shrink-0">
                      <div className={`relative ${colors.bg} ${colors.border} border-2 rounded-2xl p-6 w-20 h-20 flex items-center justify-center`}>
                        <Icon className={`w-10 h-10 ${colors.text}`} />
                        <span className={`absolute -top-3 -right-3 ${colors.bg} ${colors.text} font-bold text-sm px-3 py-1 rounded-full border-2 ${colors.border}`}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute left-14 top-full w-0.5 h-8 bg-linear-to-b from-slate-300 to-transparent dark:from-slate-600"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}