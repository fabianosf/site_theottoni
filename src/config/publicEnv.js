const tel = import.meta.env.VITE_APP_PHONE_TEL ?? "+5521979432464";
const display = import.meta.env.VITE_APP_PHONE_DISPLAY ?? "(21) 97943-2464";
const primary = import.meta.env.VITE_APP_EMAIL_PRIMARY ?? "contato@theottoni.com.br";
const secondary = import.meta.env.VITE_APP_EMAIL_COMERCIAL ?? "comercial@theottoni.com.br";

export const publicEnv = Object.freeze({
  phoneTel: tel,
  phoneDisplay: display,
  emailPrimary: primary,
  emailSecondary: secondary,
});
