import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './public/locales/en/translation.json';
import es from './public/locales/es/translation.json';
import fr from './public/locales/fr/translation.json';
import de from './public/locales/de/translation.json';
import pt from './public/locales/pt/translation.json';
import it from './public/locales/it/translation.json';
import nl from './public/locales/nl/translation.json';
import pl from './public/locales/pl/translation.json';
import ru from './public/locales/ru/translation.json';
import tr from './public/locales/tr/translation.json';
import ar from './public/locales/ar/translation.json';
import ja from './public/locales/ja/translation.json';
import ko from './public/locales/ko/translation.json';
import zh from './public/locales/zh/translation.json';
import hi from './public/locales/hi/translation.json';
import id from './public/locales/id/translation.json';
import th from './public/locales/th/translation.json';
import vi from './public/locales/vi/translation.json';
import uk from './public/locales/uk/translation.json';
import cs from './public/locales/cs/translation.json';
import ro from './public/locales/ro/translation.json';
import sv from './public/locales/sv/translation.json';

export const supportedLngs = [
	'en',
	'es',
	'fr',
	'de',
	'pt',
	'it',
	'nl',
	'pl',
	'ru',
	'tr',
	'ar',
	'ja',
	'ko',
	'zh',
	'hi',
	'id',
	'th',
	'vi',
	'uk',
	'cs',
	'ro',
	'sv',
];

const catalogs = { en, es, fr, de, pt, it, nl, pl, ru, tr, ar, ja, ko, zh, hi, id, th, vi, uk, cs, ro, sv };

const resources = Object.fromEntries(supportedLngs.map((lng) => [lng, { translation: catalogs[lng] }]));

if (!i18n.isInitialized) {
	i18n
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			resources,
			fallbackLng: 'en',
			supportedLngs,
			nonExplicitSupportedLngs: true,
			load: 'languageOnly',
			interpolation: {
				escapeValue: false,
			},
			detection: {
				order: ['cookie', 'navigator', 'htmlTag'],
				lookupCookie: 'fc_locale',
				caches: ['cookie'],
				cookieMinutes: 525600,
				cookieOptions: { path: '/', sameSite: 'lax' },
			},
			react: {
				useSuspense: false,
			},
		});
}

export default i18n;
