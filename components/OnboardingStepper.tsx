'use client';

import { useState } from 'react';
import { CheckCircle, UserPlus, ClipboardEdit, LucideIcon } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  content: string;
  icon: LucideIcon;
}

export default function OnboardingStepper() {
  const [activeStep, setActiveStep] = useState(1);

  const steps: Step[] = [
    {
      id: 1,
      title: "Inscription",
      content: "Créez votre compte praticien en quelques minutes. Aucune installation technique requise, tout se fait depuis votre navigateur.",
      icon: CheckCircle
    },
    {
      id: 2,
      title: "Invitation du patient",
      content: "Invitez votre premier patient afin qu'il commence à travailler. Il reçoit l'accès à l'application mobile instantanément.",
      icon: UserPlus
    },
    {
      id: 3,
      title: "Personnalisation du suivi",
      content: "Paramétrez les exercices TCC que vous souhaitez donner à votre patient selon votre approche clinique. L'outil s'adapte à votre méthode.",
      icon: ClipboardEdit
    }
  ];

  return (
    <div className="w-full flex flex-col relative gap-1">
      {steps.map((step) => {
        const isActive = activeStep === step.id;
        const Icon = step.icon;
        
        return (
          <div
            key={step.id}
            className="relative flex flex-row items-center cursor-pointer py-6 pr-4 pl-8 lg:pl-10 group"
            onMouseEnter={() => setActiveStep(step.id)}
            onClick={() => setActiveStep(step.id)}
          >
            {/* Trame */}
            <div 
              className={`absolute left-0 top-1 bottom-1 w-[3px] rounded-full transition-colors duration-300 ${
                isActive ? "bg-[#2fb0a1]" : "bg-[#2fb0a1]/20"
              }`}
            />
            
            {/* Bloc Icône : FLAT DESIGN (0 bordure, 0 ombre) */}
            <div 
              className={`shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isActive 
                  ? 'bg-[#2fb0a1]/15 text-[#011a17]' // Juste le fond teal et l'icône sombre
                  : 'bg-transparent text-[#1b544b]/40' // Juste l'icône transparente (fond invisible)
              }`}
            >
              <Icon className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
            </div>

            {/* Bloc Texte */}
            <div className="flex-1 ml-5 lg:ml-6 flex flex-col">
              <h4 
                className={`font-serif text-[20px] lg:text-[22px] mb-1.5 transition-colors duration-300 ${
                  isActive ? 'font-bold text-[#011a17]' : 'font-medium text-[#011a17]/70'
                }`}
              >
                {step.title}
              </h4>
              <p 
                className={`font-sans text-[15px] lg:text-[16px] leading-relaxed transition-colors duration-300 ${
                  isActive ? 'text-[#1b544b]' : 'text-[#1b544b]/75'
                }`}
              >
                {step.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}