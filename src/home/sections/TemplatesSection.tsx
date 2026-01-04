import React from 'react';
import { FileText, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TemplatesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Plantillas profesionales
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comienza con formatos probados y reconocidos en el mundo laboral
            </p>
          </div>

          <div className="mb-12">
            <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-linear-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-800 p-8 md:p-12 flex items-center justify-center">
                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl p-8 w-full max-w-sm border-4 border-slate-200 dark:border-slate-700">
                      <div className="space-y-4">
                        <div className="text-center border-b-2 border-slate-200 dark:border-slate-700 pb-4">
                          <div className="h-3 bg-slate-900 dark:bg-slate-100 rounded w-1/2 mx-auto mb-2"></div>
                          <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded w-2/3 mx-auto"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-slate-300 dark:bg-slate-600 rounded w-full"></div>
                          <div className="h-2 bg-slate-300 dark:bg-slate-600 rounded w-5/6"></div>
                          <div className="h-2 bg-slate-300 dark:bg-slate-600 rounded w-4/5"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-slate-300 dark:bg-slate-600 rounded w-3/4"></div>
                          <div className="h-2 bg-slate-300 dark:bg-slate-600 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 bg-white dark:bg-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg">
                        <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          Formato Harvard
                        </h3>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          Disponible ahora
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      El formato Harvard es uno de los más respetados y utilizados en el ámbito profesional. 
                      Diseño limpio, estructura clara y enfoque en tus logros y experiencia.
                    </p>

                    <ul className="space-y-3 mb-8">
                      {[
                        'Estructura profesional y reconocida internacionalmente',
                        'Diseño limpio que facilita la lectura',
                        'Énfasis en experiencia y logros cuantificables',
                        'Totalmente editable y personalizable'
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      size="lg"
                    >
                      Usar formato Harvard
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-block bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Próximamente: Más plantillas
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                Estamos trabajando en nuevos formatos para que puedas elegir el que mejor se adapte 
                a tu industria y estilo profesional. Formatos modernos, creativos y especializados 
                estarán disponibles pronto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}