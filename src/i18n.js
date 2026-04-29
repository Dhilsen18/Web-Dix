import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import es from './locales/es.json';

/**
 * @summary Internationalization plugin configuration (English default).
 * @author Dilsen (update with your full name)
 */
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, es },
});

export default i18n;

