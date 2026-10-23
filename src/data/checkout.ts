import { brand } from './brand';

const raw = (brand.checkoutUrl ?? '').trim();

/** True only when a real http(s) checkout URL is set. */
export const checkoutIsLive = /^https?:\/\//i.test(raw);

/** Buy buttons use `#` and do not navigate while checkout is empty. */
export const buyHref = checkoutIsLive ? raw : '#';

/** Schema.org offer URL — never an affiliate hop. */
export const offerPageUrl = `${brand.url.replace(/\/$/, '')}/battlefield-6-cheats/`;
