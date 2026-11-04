import { brand } from './brand';

const raw = (brand.checkoutUrl ?? '').trim();

/** True only when a real http(s) checkout URL is set. */
export const checkoutIsLive = /^https?:\/\//i.test(raw);

/** Buy buttons link to checkout when set; otherwise `#` and disabled. */
export const buyHref = checkoutIsLive ? raw : '#';

/** Schema.org offer URL — never an affiliate hop. */
export const offerPageUrl = `${brand.url.replace(/\/$/, '')}/battlefield-6-cheats/`;
