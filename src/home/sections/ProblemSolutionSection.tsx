import React from 'react';
import { XCircle, CheckCircle, TrendingUp } from 'lucide-react';

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              El problema que todos enfrentamos
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Cada oferta de trabajo es diferente, pero usamos el mismo CV para todas
            </p>
          </div>

          {/* Problem + Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Problem Card */}
            <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8 border-2 border-red-200 dark:border-red-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  El problema
                </h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  'Envías el mismo CV genérico a todas las empresas',
                  'Tus habilidades relevantes se pierden entre información innecesaria',
                  'Modificar tu CV para cada postulación toma demasiado tiempo',
                  'Guardas múltiples archivos de Word y pierdes el control'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution Card */}
            <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  La solución
                </h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  'Guarda tu información profesional completa en un solo lugar',
                  'Crea versiones específicas destacando lo más relevante',
                  'Adapta tu CV en minutos, no en horas',
                  'Gestiona todas tus versiones desde una plataforma centralizada'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-950/30 rounded-full border border-blue-200 dark:border-blue-800">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-blue-700 dark:text-blue-300">
                Aumenta tus posibilidades de conseguir entrevistas con CVs personalizados
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}