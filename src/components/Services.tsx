import { motion } from "framer-motion";
import { Sprout, HeartPulse, Sparkles, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const ease = [0.22, 1, 0.36, 1] as const;

type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Sprout,
    title: "Psicoterapia Individual",
    tagline: "Um lugar para habitar a própria história.",
    description:
      "Encontro clínico para adultos que buscam compreender a própria experiência e viver com mais presença e sentido. Um espaço sem julgamentos e sem pressa, que respeita o seu tempo — presencial em Juiz de Fora ou online.",
  },
  {
    icon: HeartPulse,
    title: "Ansiedade e Sobrecarga Emocional",
    tagline: "Quando o excesso pede pausa e escuta.",
    description:
      "Acompanhamento para quem vive no ritmo da pressa, da tensão contínua ou da sensação de ter que sustentar tudo sozinho. Um processo para reconhecer seus limites, dar nome ao que pesa e voltar a respirar com mais liberdade.",
  },
  {
    icon: Sparkles,
    title: "Autoestima e Insegurança",
    tagline: "Aprender a ocupar o próprio lugar.",
    description:
      "Para quem convive com a cobrança excessiva, a dúvida sobre si ou a dificuldade de sustentar escolhas e limites. Um percurso de elaboração e autonomia para construir uma postura mais inteira e menos dura consigo mesmo.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 md:py-40 px-6 md:px-10 bg-secondary/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Serviços" index="04" className="mb-14 md:mb-20" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-4xl md:text-6xl leading-[1.02] text-foreground max-w-3xl mb-16 md:mb-20"
        >
          Onde eu posso
          <br />
          <span className="italic font-light text-accent-gradient">caminhar com você.</span>
        </motion.h2>

        <div>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.06, ease }}
                className="group grid md:grid-cols-12 gap-y-5 md:gap-8 items-start border-t border-border py-10 md:py-12 last:border-b"
              >
                <div className="md:col-span-1">
                  <span className="font-display text-sm text-accent-gradient tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:col-span-5 flex flex-col gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-accent grid place-items-center shadow-accent transition-transform duration-500 group-hover:scale-105">
                    <Icon size={20} className="text-background" />
                  </div>
                  <h3 className="font-display text-2xl md:text-[28px] text-foreground leading-tight">
                    {s.title}
                  </h3>
                  <p className="font-display italic text-base md:text-lg text-accent-gradient leading-snug">
                    {s.tagline}
                  </p>
                </div>

                <div className="md:col-span-6 md:pt-1">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    {s.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
