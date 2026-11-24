import { motion } from "framer-motion";
import { GraduationCap, BookOpen, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const ease = [0.22, 1, 0.36, 1] as const;

type Group = {
  icon: LucideIcon;
  label: string;
  items: string[];
};

const groups: Group[] = [
  {
    icon: GraduationCap,
    label: "Graduação & Especializações",
    items: [
      "Graduação em Psicologia — Universidade Salgado de Oliveira (Juiz de Fora)",
      "Pós-graduação em Psicologia Humanista: Abordagem Centrada na Pessoa (ACP)",
      "Pós-graduação em Psicologia Social",
      "Pós-graduação em Avaliação Psicológica",
    ],
  },
  {
    icon: BookOpen,
    label: "Abordagem & Atuação",
    items: [
      "Abordagem Humanista",
      "Psicologia Clínica — adultos e adolescentes",
    ],
  },
];

export function Formation() {
  return (
    <section id="formacao" className="relative py-28 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-[60vw] h-[50vw] bg-gradient-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="Formação" index="02" className="mb-14 md:mb-20" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="md:col-span-5 md:sticky md:top-28"
          >
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              Mais que corrigir o que dói,
              <br />
              <span className="italic font-light text-accent-gradient">habitar a própria história.</span>
            </h2>
          </motion.div>

          <div className="md:col-span-7 space-y-14 md:space-y-20">
            {groups.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, delay: gi * 0.1, ease }}
                >
                  <div className="flex items-center gap-4 border-b border-border pb-5 mb-7">
                    <div className="h-11 w-11 rounded-full bg-gradient-accent grid place-items-center shadow-accent shrink-0">
                      <Icon size={18} className="text-background" />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                      {group.label}
                    </h3>
                  </div>

                  <ul>
                    {group.items.map((item, i) => (
                      <li
                        key={item}
                        className="group flex items-baseline gap-5 border-t border-border first:border-t-0 py-4"
                      >
                        <span className="font-display text-xs text-accent-gradient tabular-nums shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm md:text-base font-light text-foreground/90 leading-snug transition-colors group-hover:text-accent-gradient">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
