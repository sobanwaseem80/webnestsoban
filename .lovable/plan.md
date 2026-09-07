# Integrate EmailJS into the contact form

## Goal
Replace the current fake contact-form submission with a real EmailJS send so messages arrive in `sobanwaseem80@gmail.com`.

## Credentials received
- Service ID: `service_964agwt`
- Template ID: `template_lwffosq`
- Public Key: `mjlWN_UIW6w4ClN5i`

## What will change
- Install `@emailjs/browser`.
- Add EmailJS configuration constants in `src/routes/index.tsx`.
- Rewrite `handleSubmit` to:
  - prevent default,
  - set `sending` state,
  - call `emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)`,
  - show a success toast and reset the form on success,
  - show an error toast on failure.
- Keep the existing UI, validation, and styling untouched.

## Verification
- Run `bunx tsgo --noEmit` to confirm TypeScript compiles.
- Use Playwright to confirm the contact form still renders and the submit button shows the correct states.
