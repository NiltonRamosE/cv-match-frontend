import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿Puedo tener más de un CV en mi cuenta?',
    answer: 'Sí, puedes crear tantos CVs como necesites. Cada CV es una versión personalizada de tu perfil profesional, adaptada para diferentes empresas, puestos o industrias. Tu información base se mantiene centralizada y solo seleccionas qué mostrar en cada versión.'
  },
  {
    question: '¿Puedo editar una plantilla sin afectar las otras?',
    answer: 'Absolutamente. Cada CV que creas es independiente. Cuando duplicas una plantilla o creas una nueva versión, puedes modificar el contenido, seleccionar diferentes habilidades y experiencias, sin que esto afecte tus otros CVs. Tu perfil base siempre permanece intacto.'
  },
  {
    question: '¿El formato Harvard es totalmente editable?',
    answer: 'Sí, el formato Harvard es completamente personalizable. Puedes elegir qué secciones incluir, qué experiencias mostrar y cómo ordenar tu información. El diseño profesional se mantiene automáticamente mientras tú te enfocas en el contenido.'
  },
  {
    question: '¿Habrá más formatos de plantilla disponibles?',
    answer: 'Sí, estamos trabajando activamente en añadir más formatos profesionales. Pronto tendrás acceso a plantillas modernas, creativas y especializadas para diferentes industrias. El formato Harvard es solo el comienzo de nuestra colección de plantillas.'
  },
  {
    question: '¿Cómo funciona la descarga del CV?',
    answer: 'Una vez que hayas personalizado tu CV, puedes descargarlo directamente en formato PDF profesional con un solo clic. El PDF mantiene el formato, tipografía y diseño perfectamente, listo para enviar a cualquier empresa.'
  },
  {
    question: '¿Puedo actualizar mi información sin rehacer mis CVs?',
    answer: 'Sí, esa es una de las ventajas principales de CV Match. Actualizas tu perfil profesional una sola vez y todos tus CVs existentes pueden reflejar esos cambios. Tienes control total sobre qué información mostrar en cada versión específica.'
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 mb-6">
              <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Preguntas frecuentes
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Todo lo que necesitas saber
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Resolvemos tus dudas sobre CV Match
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-6 data-[state=open]:border-blue-300 dark:data-[state=open]:border-blue-700 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Help */}
          <div className="mt-12 text-center p-8 bg-linear-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/30 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Estamos aquí para ayudarte a aprovechar al máximo CV Match
            </p>
            <a 
              href="mailto:soporte@cvmatch.com" 
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Contáctanos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}