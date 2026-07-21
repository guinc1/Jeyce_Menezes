import logo from "@/assets/jeyce-logo.webp";

export function Footer() {
  return (
    <footer className="px-6 md:px-10 bg-secondary/40">
      <div className="mx-auto max-w-6xl py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-5 text-[11px] tracking-[0.12em] text-muted-foreground">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
          <img
            src={logo}
            alt="Jeyce Menezes — Psicóloga"
            className="h-16 w-auto object-contain"
            loading="lazy"
          />
          <div className="flex flex-col items-center md:items-start gap-1">
            <span>&copy; {new Date().getFullYear()} Jeyce Menezes &middot; Psicóloga</span>
            <span className="text-muted-foreground/70">CRP 04/85851</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <span>Psicoterapia Humanista &middot; NR-1 e Saúde Mental no Trabalho</span>
          <span>Juiz de Fora &middot; MG &middot; Atendimento online</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl pb-8 text-center text-[10px] tracking-[0.12em] text-muted-foreground/70">
        Versão de desenvolvimento por{" "}
        <a
          href="https://guinc1.dev"
          target="_blank"
          rel="noreferrer"
          className="text-foreground/80 underline-offset-2 transition-colors hover:text-accent-gradient hover:underline"
        >
          guinc1.dev
        </a>
      </div>
    </footer>
  );
}
