import { motion } from "framer-motion";
import {
  Sprout,
  HeartPulse,
  Sparkles,
  Building2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { WHATSAPP } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  cta?: { label: string; href: string };
};

const services: Service[] = [
  {
    icon: Sprout,
    title: "Psicoterapia Individual",
    tagline: "Um espaço só seu, na abordagem humanista.",
    description:
      "Atendimento clínico para adultos que querem se compreender melhor e viver com mais equilíbrio. Uma escuta acolhedora, empática e sem julgamentos, que respeita a sua história e o seu tempo — presencial em Juiz de Fora ou online.",
  },
  {
    icon: HeartPulse,
    title: "Ansiedade e Sobrecarga Emocional",
    tagline: "Quando a mente não desacelera e o corpo cobra a conta.",
    description:
      "Acompanhamento para quem convive com ansiedade, estresse contínuo, exaustão e a sensação de estar sempre dando conta de tudo sozinho. Um processo para reconhecer os próprios limites e recuperar o fôlego.",
  },
  {
    icon: Sparkles,
    title: "Autoestima e Insegurança",
    tagline: "Uma relação mais gentil com você mesmo.",
    description:
      "Para quem se cobra demais, duvida do próprio valor ou tem dificuldade de se posicionar. Um caminho de autoconhecimento para construir confiança, limites saudáveis e uma voz interna menos dura.",
  },
  {
    icon: Building2,
    title: "NR-1 e Saúde Mental no Trabalho",
    tagline: "Cuidado emocional também é responsabilidade da empresa.",
    description:
      "Consultoria para a implementação da NR-1: identificação e prevenção de riscos psicossociais, mediação de conflitos e ações voltadas ao bem-estar dos colaboradores — com a mesma escuta qualificada da clínica, aplicada ao contexto corporativo.",
    cta: { label: "Falar sobre a NR-1 na minha empresa", href: WHATSAPP.empresas },
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
                  {s.cta && (
                    <a
                      href={s.cta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/cta mt-6 inline-flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="border-b border-accent/40 pb-1 transition-colors group-hover/cta:border-accent group-hover/cta:text-accent-gradient">
                        {s.cta.label}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="text-accent-gradient transition-transform duration-300 group-hover/cta:rotate-45"
                      />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
