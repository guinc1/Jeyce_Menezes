import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const ease = [0.22, 1, 0.36, 1] as const;

const blocks = [
  {
    eyebrow: "No que acredito",
    title: "Cuidar da saúde mental não é luxo. É uma forma de respeito por si.",
    paragraphs: [
      "Muita gente adia o próprio cuidado — por rotina, por medo ou por acreditar que precisa dar conta de tudo sozinha. Mas buscar ajuda não é fraqueza: é um passo de coragem e de responsabilidade com a própria vida.",
      "Meu trabalho é sustentar um espaço seguro, ético e acolhedor para esse cuidado: um lugar onde é possível falar sobre o que pesa sem medo de julgamento, compreender o que se sente e construir formas mais saudáveis de existir.",
    ],
  },
  {
    eyebrow: "Escuta & acolhimento",
    title: "Escutar de verdade é uma prática — e ela se aprende com o tempo.",
    paragraphs: [
      "Foram mais de dez anos em contextos de alta demanda emocional, onde aprendi que a escuta qualificada não é técnica fria nem conselho pronto: é presença, empatia e a disposição de ficar junto quando a conversa fica difícil.",
      "Seja no consultório, em Juiz de Fora, na tela do computador ou dentro de uma empresa que decide olhar para o bem-estar de quem trabalha nela, o compromisso é o mesmo: caminhar ao seu lado, com cuidado humanizado e responsável.",
    ],
  },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-28 md:py-40 px-6 md:px-10 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Filosofia" index="06" className="mb-14 md:mb-20" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-4xl md:text-6xl leading-[1.02] text-foreground max-w-3xl mb-20 md:mb-28"
        >
          A história por trás
          <br />
          <span className="italic font-light text-accent-gradient">de cada silêncio.</span>
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-y-16 md:gap-y-24">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease }}
              className={
                i % 2 === 0 ? "md:col-span-8 md:col-start-1" : "md:col-span-8 md:col-start-5"
              }
            >
              <div className="flex items-start gap-5 md:gap-8">
                <span className="font-display text-4xl md:text-6xl leading-none text-accent-gradient tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="border-l border-border pl-5 md:pl-8">
                  <p className="text-[10px] tracking-[0.45em] uppercase text-accent-gradient mb-5">
                    {b.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl md:text-[34px] leading-snug text-foreground mb-6 max-w-2xl">
                    {b.title}
                  </h3>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-xl">
                    {b.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
