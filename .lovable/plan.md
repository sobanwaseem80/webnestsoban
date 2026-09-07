# Integrate EmailJS into the contact form

## Goal
Replace the current fake contact-form submission with a real EmailJS send so messages arrive in `sobanwaseem80@gmail.com`.

## What will change
- Install `@emailjs/browser`.
- Add EmailJS configuration values (service ID, template ID, public key) as constants in `src/routes/index.tsx`. These are public/ non-sensitive values.
- Rewrite `handleSubmit` to:
  - prevent default,
  - set `sending` state,
  - call `emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)`,
  - show a success toast and reset the form on success,
  - show an error toast on failure.
- Keep the existing UI, validation, and styling untouched.

## User action needed
Before implementation, you must create a free EmailJS account and provide three values:
1. **Service ID** — created when you add a Gmail service in EmailJS.
2. **Template ID** — created in the EmailJS templates section.
3. **Public Key** — found in Account → General.

If you already have these, paste them in the next message. Otherwise, create them at https://www.emailjs.com/ first.

## Verification
- Run `bunx tsgo --noEmit` to confirm TypeScript compiles.
- Use Playwright to confirm the contact form still renders and the submit button shows the correct states.
