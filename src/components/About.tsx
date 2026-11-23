import { motion } from "framer-motion";
import portrait from "@/assets/jeyce-portrait.webp";
import { SectionHeader } from "@/components/SectionHeader";

const specs = [
  { label: "Registro", value: "CRP 04/85851" },
  { label: "Público", value: "Adultos e Adolescentes" },
  { label: "Formato", value: "Online · Presencial em Juiz de Fora" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-28 md:py-40 px-6 md:px-10 bg-secondary/30 overflow-hidden"
    >
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[30rem] w-[30rem] rounded-full bg-gradient-glow opacity-50" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Sobre" index="01" className="mb-14 md:mb-20" />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* LEFT — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="md:col-span-7 order-2 md:order-1"
          >
            <h2 className="font-display text-4xl md:text-6xl leading-[1.04] text-foreground mb-8">
              Jeyce Menezes<span className="text-accent-gradient">.</span>
              <br />
              <span className="italic font-light text-3xl md:text-4xl text-muted-foreground">
                Psicóloga · CRP 04/85851
              </span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              <p>
                Sou Jeyce Menezes, psicóloga clínica{" "}
                <span className="text-foreground">(CRP 04/85851)</span> com atuação na{" "}
                <span className="text-foreground">Abordagem Humanista</span>. Acredito que a
                psicoterapia é, antes de tudo, um convite para desacelerar: um espaço seguro e{" "}
                <span className="text-foreground">sem julgamentos</span> para você se escutar,
                organizar os sentimentos e respirar melhor diante das pressões do dia a dia.
              </p>
              <p>
                Auxilio <span className="text-foreground">adultos e adolescentes</span> a lidarem
                com questões como ansiedade, insegurança, baixa autoestima e sobrecarga emocional.
                Mais do que aliviar sintomas, meu objetivo é oferecer um lugar onde você possa
                olhar para a sua própria história, questionar os caminhos que tem tomado e dar
                sentido às suas escolhas.
              </p>
              <p>
                Meu compromisso é caminhar ao seu lado no processo de{" "}
                <span className="text-foreground">autoconhecimento</span>, ajudando você a resgatar
                o equilíbrio emocional e construir uma relação mais leve e autêntica consigo
                mesma(o).
              </p>
              <p>
                Realizo atendimentos na modalidade <span className="text-foreground">online</span> e
                também <span className="text-foreground">presenciais em Juiz de Fora</span>. Será um
                prazer acompanhar a sua jornada.
              </p>
            </div>

            {/* spec / ficha técnica */}
            <div className="mt-12 grid sm:grid-cols-3 gap-6 sm:gap-8">
              {specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className="pt-4 border-t border-border"
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-accent-gradient mb-2">
                    {s.label}
                  </div>
                  <div className="text-sm text-foreground font-light leading-snug">{s.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — portrait with overlapping quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="md:col-span-5 order-1 md:order-2 relative w-full max-w-sm mx-auto md:mr-0"
          >
            {/* foto suavizada: tons puxados para o creme do site, sem a sombra
                pesada; o véu mais forte embaixo clareia o teclado escuro */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5]">
              <img
                src={portrait}
                alt="Notebook com a logo de Jeyce Menezes, psicóloga, no consultório"
                className="h-full w-full object-cover object-top saturate-[.85] contrast-[.88] brightness-[1.06] sepia-[.08]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 via-50% to-background/10" />
            </div>

            {/* overlapping pull-quote */}
            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="glass-card accent-border p-5 md:p-7 max-w-[13rem] md:max-w-[16rem] absolute bottom-4 right-4 md:bottom-5 md:right-5"
            >
              <div className="relative z-10">
                <span className="font-display text-5xl leading-none text-accent-gradient">“</span>
                <p className="font-display italic text-lg md:text-xl leading-snug text-foreground -mt-3">
                  A pessoa, em contato com seu próprio eu, torna-se um ser em processo, capaz de se tornar mais do que ela é.
                </p>
              </div>
            </motion.figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
