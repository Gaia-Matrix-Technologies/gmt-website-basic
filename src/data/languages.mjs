export const DEFAULT_LANGUAGE = 'en';

export const SUPPORTED_LANGUAGES = ['en', 'de'];

export const LANGUAGE_LABELS = {
  en: 'EN',
  de: 'DE',
};

export const LANGUAGE_SWITCHER_LABELS = {
  en: 'Select language',
  de: 'Sprache auswählen',
};

export const LOCALIZED_CITY_NAMES = {
  en: 'Zurich',
  de: 'Zürich',
};

export const LOCALIZED_COUNTRY_NAMES = {
  en: 'Switzerland',
  de: 'Schweiz',
};

export function isSupportedLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language);
}

export function getSupportedLanguage(language) {
  return isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE;
}

export function getPathWithoutLocale(path = '') {
  const localePattern = new RegExp(`^/(${SUPPORTED_LANGUAGES.join('|')})(?=/|$)`);
  return path.replace(localePattern, '');
}

export function getLocalizedPath(language, path = '') {
  return `/${language}${getPathWithoutLocale(path)}`;
}
