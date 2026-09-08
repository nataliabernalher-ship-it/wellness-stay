import { renderButton } from "../button/button.js";
import { escapeHtml } from "../html.js";

export function renderNewsletterForm({
  placeholder = "tu@email.com",
  submitLabel = "Suscribirme",
} = {}) {
  return `
<form class="newsletter-form" action="#" method="post">
  <label class="field newsletter-field">
    <span class="field-label">Email</span>
    <input
      class="field-input"
      name="email"
      type="email"
      inputmode="email"
      autocomplete="email"
      placeholder="${escapeHtml(placeholder)}"
      required
    />
  </label>
  ${renderButton({
    label: submitLabel,
    variant: "primary",
    size: "full",
    type: "submit",
  })}
  <p class="newsletter-legal">
    Al suscribirte aceptas recibir correos. Puedes darte de baja cuando quieras.
  </p>
</form>`.trim();
}

export function renderNewsletterBlock({
  title = "Consejos wellness en tu inbox",
  body = "Ideas simples para dormir mejor, moverte con intención, comer más consciente y sostener hábitos que sí duran.",
  placeholder,
  submitLabel,
} = {}) {
  return `
<section class="section newsletter" aria-label="Suscripción a newsletter">
  <div class="container">
    <div class="newsletter-card glass glass--strong">
      <div class="newsletter-copy">
        <h2>${escapeHtml(title)}</h2>
        <p class="newsletter-copy">${escapeHtml(body)}</p>
        <ul class="newsletter-points" aria-label="Qué recibirás">
          <li>Rutinas cortas y prácticas (5–10 min)</li>
          <li>Guías para bajar el estrés y recuperar foco</li>
          <li>Recomendaciones de retiros y experiencias</li>
        </ul>
      </div>
      ${renderNewsletterForm({ placeholder, submitLabel })}
    </div>
  </div>
</section>`.trim();
}
