import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'bf6-esp'
	| 'bf6-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'javelin'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'bf6-esp': '/battlefield-6-esp/',
	'bf6-aimbot': '/battlefield-6-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-battlefield-6-cheats/',
	wallhack: '/battlefield-6-wallhack/',
	radar: '/bf6-dma-cheats/',
	javelin: '/ea-javelin-bypass/',
	'cheats-2026': '/battlefield-6-cheats-2026/',
	hacks: '/battlefield-6-cheats/',
	'cheat-download': '/battlefield-6-cheat-download/',
	'mod-menu': '/battlefield-6-mod-menu/',
	'soft-aim': '/battlefield-6-soft-aim/',
	'best-cheats': '/best-battlefield-6-cheats/',
	'aimbot-hack': '/battlefield-6-aimbot-hack/',
	'esp-hack': '/battlefield-6-esp-hack/',
	'unlock-all': '/battlefield-6-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'bf6-esp': {
		en: 'battlefield-6-esp',
		es: 'trucos-battlefield-6-esp',
		fr: 'triche-battlefield-6-esp',
		de: 'battlefield-6-esp-wallhack',
		pt: 'cheats-battlefield-6-esp',
		it: 'trucchi-battlefield-6-esp',
		nl: 'battlefield-6-esp-wallhack',
		pl: 'cheaty-battlefield-6-esp',
		ru: 'battlefield-6-esp-chity',
		tr: 'battlefield-6-esp-hile',
		ar: 'battlefield-6-esp-wallhack',
		ja: 'battlefield-6-esp-wallhack',
		ko: 'battlefield-6-esp-wallhack',
		zh: 'battlefield-6-esp-wallhack',
		hi: 'battlefield-6-esp-wallhack',
		id: 'battlefield-6-esp-wallhack',
		th: 'battlefield-6-esp-wallhack',
		vi: 'battlefield-6-esp-wallhack',
		uk: 'battlefield-6-esp-chity',
		cs: 'battlefield-6-esp-wallhack',
		ro: 'battlefield-6-esp-wallhack',
		sv: 'battlefield-6-esp-wallhack',
	},
	'bf6-aimbot': {
		en: 'battlefield-6-aimbot',
		es: 'trucos-battlefield-6-aimbot',
		fr: 'triche-battlefield-6-aimbot',
		de: 'battlefield-6-aimbot',
		pt: 'cheats-battlefield-6-aimbot',
		it: 'trucchi-battlefield-6-aimbot',
		nl: 'battlefield-6-aimbot',
		pl: 'cheaty-battlefield-6-aimbot',
		ru: 'battlefield-6-aimbot-chity',
		tr: 'battlefield-6-aimbot-hile',
		ar: 'battlefield-6-aimbot',
		ja: 'battlefield-6-aimbot',
		ko: 'battlefield-6-aimbot',
		zh: 'battlefield-6-aimbot',
		hi: 'battlefield-6-aimbot',
		id: 'battlefield-6-aimbot',
		th: 'battlefield-6-aimbot',
		vi: 'battlefield-6-aimbot',
		uk: 'battlefield-6-aimbot-chity',
		cs: 'battlefield-6-aimbot',
		ro: 'battlefield-6-aimbot',
		sv: 'battlefield-6-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-battlefield-6',
		fr: 'fonctionnalites-triche-battlefield-6',
		de: 'battlefield-6-cheats-funktionen',
		pt: 'recursos-cheats-battlefield-6',
		it: 'funzioni-trucchi-battlefield-6',
		nl: 'battlefield-6-cheats-functies',
		pl: 'funkcje-cheatow-battlefield-6',
		ru: 'funkcii-chitov-battlefield-6',
		tr: 'battlefield-6-hile-ozellikleri',
		ar: 'battlefield-6-cheats-features',
		ja: 'battlefield-6-cheats-features',
		ko: 'battlefield-6-cheats-features',
		zh: 'battlefield-6-cheats-features',
		hi: 'battlefield-6-cheats-features',
		id: 'battlefield-6-cheats-features',
		th: 'battlefield-6-cheats-features',
		vi: 'battlefield-6-cheats-features',
		uk: 'funkcii-chitiv-battlefield-6',
		cs: 'battlefield-6-cheats-funkce',
		ro: 'functii-cheats-battlefield-6',
		sv: 'battlefield-6-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-battlefield-6',
		fr: 'prix-triche-battlefield-6',
		de: 'escape-from-battlefield-6-cheats-preise',
		pt: 'precos-cheats-battlefield-6',
		it: 'prezzi-trucchi-battlefield-6',
		nl: 'escape-from-battlefield-6-cheats-prijzen',
		pl: 'ceny-cheatow-battlefield-6',
		ru: 'ceny-chitov-battlefield-6',
		tr: 'battlefield-6-hile-fiyatlari',
		ar: 'escape-from-battlefield-6-cheats-pricing',
		ja: 'escape-from-battlefield-6-cheats-pricing',
		ko: 'escape-from-battlefield-6-cheats-pricing',
		zh: 'escape-from-battlefield-6-cheats-pricing',
		hi: 'escape-from-battlefield-6-cheats-pricing',
		id: 'escape-from-battlefield-6-cheats-pricing',
		th: 'escape-from-battlefield-6-cheats-pricing',
		vi: 'escape-from-battlefield-6-cheats-pricing',
		uk: 'ciny-chitiv-battlefield-6',
		cs: 'escape-from-battlefield-6-cheats-ceny',
		ro: 'preturi-cheats-battlefield-6',
		sv: 'escape-from-battlefield-6-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-battlefield-6',
		fr: 'installation-triche-battlefield-6',
		de: 'escape-from-battlefield-6-cheats-installation',
		pt: 'instalacao-cheats-battlefield-6',
		it: 'installazione-trucchi-battlefield-6',
		nl: 'escape-from-battlefield-6-cheats-installatie',
		pl: 'instalacja-cheatow-battlefield-6',
		ru: 'ustanovka-chitov-battlefield-6',
		tr: 'battlefield-6-hile-kurulum',
		ar: 'escape-from-battlefield-6-cheats-setup',
		ja: 'escape-from-battlefield-6-cheats-setup',
		ko: 'escape-from-battlefield-6-cheats-setup',
		zh: 'escape-from-battlefield-6-cheats-setup',
		hi: 'escape-from-battlefield-6-cheats-setup',
		id: 'escape-from-battlefield-6-cheats-setup',
		th: 'escape-from-battlefield-6-cheats-setup',
		vi: 'escape-from-battlefield-6-cheats-setup',
		uk: 'vstanovka-chitiv-battlefield-6',
		cs: 'escape-from-battlefield-6-cheats-instalace',
		ro: 'instalare-cheats-battlefield-6',
		sv: 'escape-from-battlefield-6-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-battlefield-6',
		fr: 'mises-a-jour-triche-battlefield-6',
		de: 'escape-from-battlefield-6-cheats-updates',
		pt: 'atualizacoes-cheats-battlefield-6',
		it: 'aggiornamenti-trucchi-battlefield-6',
		nl: 'escape-from-battlefield-6-cheats-updates',
		pl: 'aktualizacje-cheatow-battlefield-6',
		ru: 'obnovleniya-chitov-battlefield-6',
		tr: 'battlefield-6-hile-guncellemeleri',
		ar: 'escape-from-battlefield-6-cheats-updates',
		ja: 'escape-from-battlefield-6-cheats-updates',
		ko: 'escape-from-battlefield-6-cheats-updates',
		zh: 'escape-from-battlefield-6-cheats-updates',
		hi: 'escape-from-battlefield-6-cheats-updates',
		id: 'escape-from-battlefield-6-cheats-updates',
		th: 'escape-from-battlefield-6-cheats-updates',
		vi: 'escape-from-battlefield-6-cheats-updates',
		uk: 'onovlennya-chitiv-battlefield-6',
		cs: 'escape-from-battlefield-6-cheats-aktualizace',
		ro: 'actualizari-cheats-battlefield-6',
		sv: 'escape-from-battlefield-6-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-battlefield-6',
		fr: 'faq-triche-battlefield-6',
		de: 'escape-from-battlefield-6-cheats-faq',
		pt: 'faq-cheats-battlefield-6',
		it: 'faq-trucchi-battlefield-6',
		nl: 'escape-from-battlefield-6-cheats-faq',
		pl: 'faq-cheatow-battlefield-6',
		ru: 'faq-chitov-battlefield-6',
		tr: 'battlefield-6-hile-sss',
		ar: 'escape-from-battlefield-6-cheats-faq',
		ja: 'escape-from-battlefield-6-cheats-faq',
		ko: 'escape-from-battlefield-6-cheats-faq',
		zh: 'escape-from-battlefield-6-cheats-faq',
		hi: 'escape-from-battlefield-6-cheats-faq',
		id: 'escape-from-battlefield-6-cheats-faq',
		th: 'escape-from-battlefield-6-cheats-faq',
		vi: 'escape-from-battlefield-6-cheats-faq',
		uk: 'faq-chitiv-battlefield-6',
		cs: 'escape-from-battlefield-6-cheats-faq',
		ro: 'faq-cheats-battlefield-6',
		sv: 'escape-from-battlefield-6-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-battlefield-6',
		fr: 'support-triche-battlefield-6',
		de: 'escape-from-battlefield-6-cheats-support',
		pt: 'suporte-cheats-battlefield-6',
		it: 'supporto-trucchi-battlefield-6',
		nl: 'escape-from-battlefield-6-cheats-support',
		pl: 'wsparcie-cheatow-battlefield-6',
		ru: 'podderzhka-chitov-battlefield-6',
		tr: 'battlefield-6-hile-destek',
		ar: 'escape-from-battlefield-6-cheats-support',
		ja: 'escape-from-battlefield-6-cheats-support',
		ko: 'escape-from-battlefield-6-cheats-support',
		zh: 'escape-from-battlefield-6-cheats-support',
		hi: 'escape-from-battlefield-6-cheats-support',
		id: 'escape-from-battlefield-6-cheats-support',
		th: 'escape-from-battlefield-6-cheats-support',
		vi: 'escape-from-battlefield-6-cheats-support',
		uk: 'pidtrymka-chitiv-battlefield-6',
		cs: 'escape-from-battlefield-6-cheats-podpora',
		ro: 'suport-cheats-battlefield-6',
		sv: 'escape-from-battlefield-6-cheats-support',
	},
	undetected: {
		en: 'undetected-battlefield-6-cheats',
		es: 'trucos-battlefield-6-indetectables',
		fr: 'triche-battlefield-6-indetectable',
		de: 'unentdeckte-battlefield-6-cheats',
		pt: 'cheats-battlefield-6-indetectaveis',
		it: 'trucchi-battlefield-6-indetectabili',
		nl: 'undetected-battlefield-6-cheats',
		pl: 'niewykrywalne-cheats-battlefield-6',
		ru: 'nedecektiruemye-chity-battlefield-6',
		tr: 'tespit-edilemeyen-battlefield-6-hileleri',
		ar: 'undetected-battlefield-6-cheats',
		ja: 'undetected-battlefield-6-cheats',
		ko: 'undetected-battlefield-6-cheats',
		zh: 'undetected-battlefield-6-cheats',
		hi: 'undetected-battlefield-6-cheats',
		id: 'undetected-battlefield-6-cheats',
		th: 'undetected-battlefield-6-cheats',
		vi: 'undetected-battlefield-6-cheats',
		uk: 'nedecektovani-chity-battlefield-6',
		cs: 'undetected-battlefield-6-cheats',
		ro: 'cheats-battlefield-6-nedetectabile',
		sv: 'undetected-battlefield-6-cheats',
	},
	wallhack: {
		en: 'battlefield-6-wallhack',
		es: 'wallhack-trucos-battlefield-6',
		fr: 'wallhack-triche-battlefield-6',
		de: 'battlefield-6-wallhack',
		pt: 'wallhack-cheats-battlefield-6',
		it: 'wallhack-trucchi-battlefield-6',
		nl: 'battlefield-6-wallhack',
		pl: 'wallhack-cheatow-battlefield-6',
		ru: 'wallhack-chity-battlefield-6',
		tr: 'battlefield-6-wallhack-hile',
		ar: 'battlefield-6-wallhack',
		ja: 'battlefield-6-wallhack',
		ko: 'battlefield-6-wallhack',
		zh: 'battlefield-6-wallhack',
		hi: 'battlefield-6-wallhack',
		id: 'battlefield-6-wallhack',
		th: 'battlefield-6-wallhack',
		vi: 'battlefield-6-wallhack',
		uk: 'wallhack-chity-battlefield-6',
		cs: 'battlefield-6-wallhack',
		ro: 'wallhack-cheats-battlefield-6',
		sv: 'battlefield-6-wallhack',
	},
	radar: {
		en: 'bf6-dma-cheats',
		es: 'bf6-dma-cheats-trucos',
		fr: 'bf6-dma-cheats-triche',
		de: 'bf6-dma-cheats',
		pt: 'bf6-dma-cheats-truques',
		it: 'bf6-dma-cheats-trucchi',
		nl: 'bf6-dma-cheats',
		pl: 'bf6-dma-cheats-cheatow',
		ru: 'bf6-dma-cheats-chity',
		tr: 'bf6-dma-cheats',
		ar: 'bf6-dma-cheats',
		ja: 'bf6-dma-cheats',
		ko: 'bf6-dma-cheats',
		zh: 'bf6-dma-cheats',
		hi: 'bf6-dma-cheats',
		id: 'bf6-dma-cheats',
		th: 'bf6-dma-cheats',
		vi: 'bf6-dma-cheats',
		uk: 'bf6-dma-cheats-chity',
		cs: 'bf6-dma-cheats',
		ro: 'bf6-dma-cheats',
		sv: 'bf6-dma-cheats',
	},
	javelin: {
		en: 'ea-javelin-bypass',
		es: 'ea-javelin-bypass-trucos',
		fr: 'ea-javelin-bypass-triche',
		de: 'ea-javelin-bypass',
		pt: 'ea-javelin-bypass-cheats',
		it: 'ea-javelin-bypass-trucchi',
		nl: 'ea-javelin-bypass',
		pl: 'ea-javelin-bypass-cheatow',
		ru: 'ea-javelin-bypass-chity',
		tr: 'ea-javelin-bypass',
		ar: 'ea-javelin-bypass',
		ja: 'ea-javelin-bypass',
		ko: 'ea-javelin-bypass',
		zh: 'ea-javelin-bypass',
		hi: 'ea-javelin-bypass',
		id: 'ea-javelin-bypass',
		th: 'ea-javelin-bypass',
		vi: 'ea-javelin-bypass',
		uk: 'ea-javelin-bypass-chity',
		cs: 'ea-javelin-bypass',
		ro: 'ea-javelin-bypass-cheats',
		sv: 'ea-javelin-bypass',
	},
	'cheats-2026': {
		en: 'battlefield-6-cheats-2026',
		es: 'trucos-battlefield-6-2026',
		fr: 'triche-battlefield-6-2026',
		de: 'battlefield-6-cheats-2026',
		pt: 'cheats-battlefield-6-2026',
		it: 'trucchi-battlefield-6-2026',
		nl: 'battlefield-6-cheats-2026',
		pl: 'cheaty-battlefield-6-2026',
		ru: 'chity-battlefield-6-2026',
		tr: 'battlefield-6-hileleri-2026',
		ar: 'battlefield-6-cheats-2026',
		ja: 'battlefield-6-cheats-2026',
		ko: 'battlefield-6-cheats-2026',
		zh: 'battlefield-6-cheats-2026',
		hi: 'battlefield-6-cheats-2026',
		id: 'battlefield-6-cheats-2026',
		th: 'battlefield-6-cheats-2026',
		vi: 'battlefield-6-cheats-2026',
		uk: 'chity-battlefield-6-2026',
		cs: 'battlefield-6-cheats-2026',
		ro: 'cheats-battlefield-6-2026',
		sv: 'battlefield-6-cheats-2026',
	},
	hacks: {
		en: 'battlefield-6-cheats',
		es: 'hacks-trucos-battlefield-6',
		fr: 'hacks-triche-battlefield-6',
		de: 'battlefield-6-cheats',
		pt: 'hacks-cheats-battlefield-6',
		it: 'hacks-trucchi-battlefield-6',
		nl: 'battlefield-6-cheats',
		pl: 'hacks-cheatow-battlefield-6',
		ru: 'haksy-chity-battlefield-6',
		tr: 'battlefield-6-hile-hacks',
		ar: 'battlefield-6-cheats',
		ja: 'battlefield-6-cheats',
		ko: 'battlefield-6-cheats',
		zh: 'battlefield-6-cheats',
		hi: 'battlefield-6-cheats',
		id: 'battlefield-6-cheats',
		th: 'battlefield-6-cheats',
		vi: 'battlefield-6-cheats',
		uk: 'haksy-chity-battlefield-6',
		cs: 'battlefield-6-cheats',
		ro: 'hacks-cheats-battlefield-6',
		sv: 'battlefield-6-cheats',
	},
	'cheat-download': {
		en: 'battlefield-6-cheat-download',
		es: 'descarga-trucos-battlefield-6',
		fr: 'telechargement-triche-battlefield-6',
		de: 'battlefield-6-cheat-download',
		pt: 'download-cheats-battlefield-6',
		it: 'download-trucchi-battlefield-6',
		nl: 'battlefield-6-cheat-download',
		pl: 'pobieranie-cheatow-battlefield-6',
		ru: 'skachat-chity-battlefield-6',
		tr: 'battlefield-6-hile-indir',
		ar: 'battlefield-6-cheat-download',
		ja: 'battlefield-6-cheat-download',
		ko: 'battlefield-6-cheat-download',
		zh: 'battlefield-6-cheat-download',
		hi: 'battlefield-6-cheat-download',
		id: 'battlefield-6-cheat-download',
		th: 'battlefield-6-cheat-download',
		vi: 'battlefield-6-cheat-download',
		uk: 'zavantazhennya-chitiv-battlefield-6',
		cs: 'battlefield-6-cheat-download',
		ro: 'descarcare-cheats-battlefield-6',
		sv: 'battlefield-6-cheat-download',
	},
	'mod-menu': {
		en: 'battlefield-6-mod-menu',
		es: 'menu-mod-trucos-battlefield-6',
		fr: 'menu-mod-triche-battlefield-6',
		de: 'battlefield-6-mod-menu',
		pt: 'menu-mod-cheats-battlefield-6',
		it: 'menu-mod-trucchi-battlefield-6',
		nl: 'battlefield-6-mod-menu',
		pl: 'menu-mod-cheatow-battlefield-6',
		ru: 'mod-menu-chity-battlefield-6',
		tr: 'battlefield-6-mod-menu',
		ar: 'battlefield-6-mod-menu',
		ja: 'battlefield-6-mod-menu',
		ko: 'battlefield-6-mod-menu',
		zh: 'battlefield-6-mod-menu',
		hi: 'battlefield-6-mod-menu',
		id: 'battlefield-6-mod-menu',
		th: 'battlefield-6-mod-menu',
		vi: 'battlefield-6-mod-menu',
		uk: 'mod-menu-chity-battlefield-6',
		cs: 'battlefield-6-mod-menu',
		ro: 'meniu-mod-cheats-battlefield-6',
		sv: 'battlefield-6-mod-menu',
	},
	'soft-aim': {
		en: 'battlefield-6-soft-aim',
		es: 'soft-aim-trucos-battlefield-6',
		fr: 'soft-aim-triche-battlefield-6',
		de: 'battlefield-6-soft-aim',
		pt: 'soft-aim-cheats-battlefield-6',
		it: 'soft-aim-trucchi-battlefield-6',
		nl: 'battlefield-6-soft-aim',
		pl: 'soft-aim-cheatow-battlefield-6',
		ru: 'soft-aim-chity-battlefield-6',
		tr: 'battlefield-6-soft-aim',
		ar: 'battlefield-6-soft-aim',
		ja: 'battlefield-6-soft-aim',
		ko: 'battlefield-6-soft-aim',
		zh: 'battlefield-6-soft-aim',
		hi: 'battlefield-6-soft-aim',
		id: 'battlefield-6-soft-aim',
		th: 'battlefield-6-soft-aim',
		vi: 'battlefield-6-soft-aim',
		uk: 'soft-aim-chity-battlefield-6',
		cs: 'battlefield-6-soft-aim',
		ro: 'soft-aim-cheats-battlefield-6',
		sv: 'battlefield-6-soft-aim',
	},
	'best-cheats': {
		en: 'best-battlefield-6-cheats',
		es: 'mejores-trucos-battlefield-6',
		fr: 'meilleures-triches-battlefield-6',
		de: 'beste-battlefield-6-cheats',
		pt: 'melhores-cheats-battlefield-6',
		it: 'migliori-trucchi-battlefield-6',
		nl: 'beste-battlefield-6-cheats',
		pl: 'najlepsze-cheats-battlefield-6',
		ru: 'luchshie-chity-battlefield-6',
		tr: 'en-iyi-battlefield-6-hileleri',
		ar: 'best-battlefield-6-cheats',
		ja: 'best-battlefield-6-cheats',
		ko: 'best-battlefield-6-cheats',
		zh: 'best-battlefield-6-cheats',
		hi: 'best-battlefield-6-cheats',
		id: 'best-battlefield-6-cheats',
		th: 'best-battlefield-6-cheats',
		vi: 'best-battlefield-6-cheats',
		uk: 'naykrashchi-chity-battlefield-6',
		cs: 'nejlepsi-battlefield-6-cheats',
		ro: 'cele-mai-bune-cheats-battlefield-6',
		sv: 'basta-battlefield-6-cheats',
	},
	'aimbot-hack': {
		en: 'battlefield-6-aimbot-hack',
		es: 'aimbot-hack-trucos-battlefield-6',
		fr: 'aimbot-hack-triche-battlefield-6',
		de: 'battlefield-6-aimbot-hack',
		pt: 'aimbot-hack-cheats-battlefield-6',
		it: 'aimbot-hack-trucchi-battlefield-6',
		nl: 'battlefield-6-aimbot-hack',
		pl: 'aimbot-hack-cheatow-battlefield-6',
		ru: 'aimbot-hack-chity-battlefield-6',
		tr: 'battlefield-6-aimbot-hack',
		ar: 'battlefield-6-aimbot-hack',
		ja: 'battlefield-6-aimbot-hack',
		ko: 'battlefield-6-aimbot-hack',
		zh: 'battlefield-6-aimbot-hack',
		hi: 'battlefield-6-aimbot-hack',
		id: 'battlefield-6-aimbot-hack',
		th: 'battlefield-6-aimbot-hack',
		vi: 'battlefield-6-aimbot-hack',
		uk: 'aimbot-hack-chity-battlefield-6',
		cs: 'battlefield-6-aimbot-hack',
		ro: 'aimbot-hack-cheats-battlefield-6',
		sv: 'battlefield-6-aimbot-hack',
	},
	'esp-hack': {
		en: 'battlefield-6-esp-hack',
		es: 'esp-hack-trucos-battlefield-6',
		fr: 'esp-hack-triche-battlefield-6',
		de: 'battlefield-6-esp-hack',
		pt: 'esp-hack-cheats-battlefield-6',
		it: 'esp-hack-trucchi-battlefield-6',
		nl: 'battlefield-6-esp-hack',
		pl: 'esp-hack-cheatow-battlefield-6',
		ru: 'esp-hack-chity-battlefield-6',
		tr: 'battlefield-6-esp-hack',
		ar: 'battlefield-6-esp-hack',
		ja: 'battlefield-6-esp-hack',
		ko: 'battlefield-6-esp-hack',
		zh: 'battlefield-6-esp-hack',
		hi: 'battlefield-6-esp-hack',
		id: 'battlefield-6-esp-hack',
		th: 'battlefield-6-esp-hack',
		vi: 'battlefield-6-esp-hack',
		uk: 'esp-hack-chity-battlefield-6',
		cs: 'battlefield-6-esp-hack',
		ro: 'esp-hack-cheats-battlefield-6',
		sv: 'battlefield-6-esp-hack',
	},
	'unlock-all': {
		en: 'battlefield-6-unlock-all',
		es: 'unlock-all-trucos-battlefield-6',
		fr: 'unlock-all-triche-battlefield-6',
		de: 'battlefield-6-unlock-all',
		pt: 'unlock-all-cheats-battlefield-6',
		it: 'unlock-all-trucchi-battlefield-6',
		nl: 'battlefield-6-unlock-all',
		pl: 'unlock-all-cheatow-battlefield-6',
		ru: 'unlock-all-chity-battlefield-6',
		tr: 'battlefield-6-unlock-all',
		ar: 'battlefield-6-unlock-all',
		ja: 'battlefield-6-unlock-all',
		ko: 'battlefield-6-unlock-all',
		zh: 'battlefield-6-unlock-all',
		hi: 'battlefield-6-unlock-all',
		id: 'battlefield-6-unlock-all',
		th: 'battlefield-6-unlock-all',
		vi: 'battlefield-6-unlock-all',
		uk: 'unlock-all-chity-battlefield-6',
		cs: 'battlefield-6-unlock-all',
		ro: 'unlock-all-cheats-battlefield-6',
		sv: 'battlefield-6-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('battlefield-6-aimbot', locale), pageId: 'battlefield-6-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('battlefield-6-esp', locale), pageId: 'battlefield-6-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
