/**
 * Ponto único de configuração dos contatos do site.
 */

// (32) 99924-3089 — formato internacional, apenas dígitos.
// Manter igual ao "telephone" dos dados estruturados em index.html.
export const WHATSAPP_NUMBER = "5532999243089";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP = {
  default: whatsappLink("Olá, Jeyce! Vim pelo site e gostaria de agendar uma sessão."),
  agendar: whatsappLink("Olá, Jeyce! Vim pelo site e gostaria de agendar uma sessão."),
  hero: whatsappLink("Olá, Jeyce! Vim pelo site e gostaria de agendar uma sessão."),
};

// Pin oficial do consultório (Juiz de Fora, MG).
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/GQ2KYBYPBJcCuZCP6";

// Formulário de avaliação do Google (Place ID derivado do pin acima).
export const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJ667Fk62h0GIR6yS-hLzt9uI";

export const INSTAGRAM_URL = "https://www.instagram.com/psi.jeycemenezes/";

export const CRP = "CRP 04/85851";

export const ADDRESS = {
  street: "R. Mr. Moore, 170",
  neighborhood: "Centro",
  city: "Juiz de Fora",
  region: "MG",
  postalCode: "36013-180",
};

export const ADDRESS_LINE = `${ADDRESS.street} — ${ADDRESS.neighborhood} · CEP ${ADDRESS.postalCode}`;
