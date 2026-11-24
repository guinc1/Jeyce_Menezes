import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const ease = [0.22, 1, 0.36, 1] as const;

const pilares = [
  "Escuta qualificada e sem julgamentos",
  "Ética profissional e sigilo",
  "Empatia e acolhimento em cada encontro",
  "Respeito à sua história e ao seu tempo",
  "Autoconhecimento e equilíbrio emocional",
  "Atendimento online e presencial",
];

export function Approach() {
  return (
    <section id="abordagem" className="relative py-28 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] bg-gradient-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="Abordagem" index="03" className="mb-14 md:mb-20" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="md:col-span-5 md:sticky md:top-28"
          >
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
              Onde o que você sente
              <br />
              <span className="italic font-light text-accent-gradient">deixa de ser peso</span>
              <br />
              e ganha palavra.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="md:col-span-7 space-y-7 text-base md:text-lg text-muted-foreground leading-relaxed font-light"
          >
            <p>
              Acredito na <span className="text-foreground">abordagem humanista</span> porque ela
              parte de uma certeza simples: ninguém habita a sua história melhor do que você. Meu
              papel não é oferecer respostas prontas, mas sustentar um{" "}
              <span className="text-foreground">espaço de pausa</span> onde o que hoje pesa possa,
              enfim, ser dito e compreendido.
            </p>
            <p>
              Mais do que olhar para o sintoma, caminhamos juntos para entender{" "}
              <span className="text-foreground">o que faz sentido na sua existência</span> e abrir
              espaço para <span className="text-foreground">novos modos de estar no mundo</span> —
              sempre com ética, rigor clínico e respeito ao seu próprio ritmo.
            </p>
          </motion.div>
        </div>

        {/* Pilares — grade numerada editorial */}
        <div className="mt-20 md:mt-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
            className="text-[10px] tracking-[0.4em] uppercase text-accent-gradient mb-8"
          >
            Pilares da atuação
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-px">
            {pilares.map((pilar, i) => (
              <motion.div
                key={pilar}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease }}
                className="group flex items-baseline gap-5 border-t border-border py-6"
              >
                <span className="font-display text-sm text-accent-gradient tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base md:text-lg font-light text-foreground leading-snug transition-colors group-hover:text-accent-gradient">
                  {pilar}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
