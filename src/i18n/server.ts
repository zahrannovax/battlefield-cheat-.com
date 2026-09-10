import en from '../../public/locales/en/translation.json';
import es from '../../public/locales/es/translation.json';
import fr from '../../public/locales/fr/translation.json';
import de from '../../public/locales/de/translation.json';
import pt from '../../public/locales/pt/translation.json';
import it from '../../public/locales/it/translation.json';
import nl from '../../public/locales/nl/translation.json';
import pl from '../../public/locales/pl/translation.json';
import ru from '../../public/locales/ru/translation.json';
import tr from '../../public/locales/tr/translation.json';
import ar from '../../public/locales/ar/translation.json';
import ja from '../../public/locales/ja/translation.json';
import ko from '../../public/locales/ko/translation.json';
import zh from '../../public/locales/zh/translation.json';
import hi from '../../public/locales/hi/translation.json';
import id from '../../public/locales/id/translation.json';
import th from '../../public/locales/th/translation.json';
import vi from '../../public/locales/vi/translation.json';
import uk from '../../public/locales/uk/translation.json';
import cs from '../../public/locales/cs/translation.json';
import ro from '../../public/locales/ro/translation.json';
import sv from '../../public/locales/sv/translation.json';

const catalogs: Record<string, typeof en> = {
	en,
	es,
	fr,
	de,
	pt,
	it,
	nl,
	pl,
	ru,
	tr,
	ar,
	ja,
	ko,
	zh,
	hi,
	id,
	th,
	vi,
	uk,
	cs,
	ro,
	sv,
};

function lookup(obj: unknown, path: string): string | undefined {
	const parts = path.split('.');
	let cur: unknown = obj;
	for (const part of parts) {
		if (!cur || typeof cur !== 'object') return undefined;
		cur = (cur as Record<string, unknown>)[part];
	}
	return typeof cur === 'string' ? cur : undefined;
}

/** Sync translator for Astro frontmatter (SSR). React islands use useTranslation(). */
export function getT(locale: string) {
	const catalog = catalogs[locale] ?? catalogs.en;
	return (key: string, vars?: Record<string, string | number>) => {
		let value = lookup(catalog, key) ?? lookup(catalogs.en, key) ?? key;
		if (vars) {
			for (const [k, v] of Object.entries(vars)) {
				value = value.replaceAll(`{{${k}}}`, String(v));
			}
		}
		return value;
	};
}
