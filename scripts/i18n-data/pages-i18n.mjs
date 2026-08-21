import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Battlefield 6 indetectables para Battlefield 6 en PC. ESP wallhack, radar hack y Aimbot con mantenimiento EA Javelin anti-cheat. Entrega digital instantánea.', h1: 'Battlefield 6 Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Battlefield 6 en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento EA Javelin anti-cheat tras cada parche.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Galería Battlefield 6 Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Battlefield 6 Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y vehicle-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Battlefield 6 indétectables pour Battlefield 6 sur PC. ESP wallhack, radar hack et Aimbot avec maintenance EA Javelin anti-cheat. Livraison numérique instantanée.', h1: 'Battlefield 6 Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Battlefield 6 sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance EA Javelin anti-cheat après chaque patch.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Galerie Battlefield 6 Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Battlefield 6 Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et vehicle-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Battlefield 6 Cheats für Battlefield 6 auf PC. ESP Wallhack, Radar Hack und Aimbot mit EA Javelin anti-cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Battlefield 6: ESP Wallhack, Radar und Aimbot mit EA Javelin anti-cheat-Wartung nach jedem Patch.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Battlefield 6 Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Battlefield 6 Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und vehicle-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Battlefield 6 indetectáveis para Battlefield 6 no PC. ESP wallhack, radar hack e Aimbot com manutenção EA Javelin anti-cheat. Entrega digital instantánea.', h1: 'Battlefield 6 Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Battlefield 6 no Windows PC: ESP wallhack, radar e Aimbot com manutenção EA Javelin anti-cheat após cada patch.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Galeria Battlefield 6 Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Battlefield 6 Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e vehicle-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Battlefield 6 indetectable per Battlefield 6 su PC. ESP wallhack, radar hack e Aimbot con manutenzione EA Javelin anti-cheat. Consegna digitale istantanea.', h1: 'Battlefield 6 Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Battlefield 6 su PC Windows: ESP wallhack, radar e Aimbot con manutenzione EA Javelin anti-cheat dopo ogni patch.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Galleria Battlefield 6 Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Battlefield 6 Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e vehicle-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Battlefield 6 cheats voor Battlefield 6 op PC. ESP wallhack, radar hack en Aimbot met EA Javelin anti-cheat-onderhoud. Directe digitale levering.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Battlefield 6: ESP wallhack, radar en Aimbot met EA Javelin anti-cheat-onderhoud na elke patch.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Battlefield 6 Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Battlefield 6 Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en vehicle-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Battlefield 6 dla Battlefield 6 na PC. ESP wallhack, radar hack i Aimbot z konserwacją EA Javelin anti-cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Battlefield 6 na Windows PC: ESP wallhack, radar i Aimbot z konserwacją EA Javelin anti-cheat po każdym patchu.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Galeria Battlefield 6 Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Battlefield 6 Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i vehicle-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Battlefield 6 для Battlefield 6 на PC. ESP wallhack, radar hack и Aimbot с обслуживанием EA Javelin anti-cheat. Мгновенная цифровая доставка.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Battlefield 6 на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием EA Javelin anti-cheat после патчей.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Галерея Battlefield 6 Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Battlefield 6 Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и vehicle-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Battlefield 6 için undetected hileler. ESP wallhack, radar hack ve Aimbot — EA Javelin anti-cheat bakımı. Anında dijital teslimat.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Battlefield 6 Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — EA Javelin anti-cheat bakımı dahil.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Battlefield 6 Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Battlefield 6 Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve vehicle-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Battlefield 6 Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Battlefield 6 undetected لـ Battlefield 6 على PC. ESP wallhack ورadar hack وAimbot مع صيانة EA Javelin anti-cheat. تسليم رقمي فوري.', h1: 'Battlefield 6 Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Battlefield 6 على Windows PC: ESP wallhack ورadar وAimbot مع صيانة EA Javelin anti-cheat.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'معرض Battlefield 6 Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Battlefield 6 Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وvehicle-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Battlefield 6 Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Battlefield 6向けundetectedチート。ESP wallhack、radar hack、Aimbot、EA Javelin anti-cheatメンテナンス。即時デジタル配信。', h1: 'Battlefield 6 Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Battlefield 6 Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、EA Javelin anti-cheatメンテナンス付き。', imageAlt: 'Battlefield 6 cheats hero ESP aimbot wallhack', gallery: 'Battlefield 6 Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にBattlefield 6 Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとvehicle-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Battlefield 6 undetected 치트. ESP wallhack, radar hack, Aimbot, EA Javelin anti-cheat 유지보수. 즉시 디지털 배송.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Battlefield 6 Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, EA Javelin anti-cheat 유지보수 포함.', imageAlt: 'Battlefield 6 cheats hero ESP aimbot wallhack', gallery: 'Battlefield 6 Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Battlefield 6 Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 vehicle-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Battlefield 6 Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Battlefield 6 undetected作弊。ESP wallhack、radar hack、Aimbot、EA Javelin anti-cheat维护。即时数字交付。', h1: 'Battlefield 6 Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Battlefield 6 Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含EA Javelin anti-cheat维护。', imageAlt: 'Battlefield 6 cheats hero ESP aimbot wallhack', gallery: 'Battlefield 6 Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Battlefield 6 Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和vehicle-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Battlefield 6 undetected cheats. ESP wallhack, radar hack, Aimbot, EA Javelin maintenance. Instant digital delivery.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Battlefield 6 Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EA Javelin maintenance सहित.', imageAlt: 'Battlefield 6 cheats hero ESP aimbot wallhack', gallery: 'Battlefield 6 Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Battlefield 6 Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और vehicle-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Battlefield 6 undetected untuk Battlefield 6 di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan EA Javelin anti-cheat. Pengiriman digital instan.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Battlefield 6 di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan EA Javelin anti-cheat.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Galeri Battlefield 6 Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Battlefield 6 Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan vehicle-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Battlefield 6 undetected สำหรับ Battlefield 6 บน PC. ESP wallhack, radar hack, Aimbot, EA Javelin maintenance. จัดส่งดิจิทัลทันที.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Battlefield 6 บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EA Javelin maintenance', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'แกลเลอรี Battlefield 6 Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Battlefield 6 Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ vehicle-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Battlefield 6 undetected cho Battlefield 6 trên PC. ESP wallhack, radar hack, Aimbot, bảo trì EA Javelin anti-cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Battlefield 6 trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì EA Javelin anti-cheat.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Thư viện Battlefield 6 Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Battlefield 6 Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và vehicle-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Battlefield 6 для Battlefield 6 на PC. ESP wallhack, radar hack, Aimbot, обслуговування EA Javelin anti-cheat. Мгновенная цифровая доставка.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Battlefield 6 на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням EA Javelin anti-cheat.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Галерея Battlefield 6 Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Battlefield 6 Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і vehicle-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Battlefield 6 cheaty pro Battlefield 6 na PC. ESP wallhack, radar hack, Aimbot, údržba EA Javelin anti-cheat. Okamžité digitální doručení.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Battlefield 6 na Windows PC: ESP wallhack, radar, Aimbot s údržbou EA Javelin anti-cheat.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Galerie Battlefield 6 Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Battlefield 6 Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a vehicle-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Battlefield 6 undetected pentru Battlefield 6 pe PC. ESP wallhack, radar hack, Aimbot, mentenanță EA Javelin anti-cheat. Livrare digitală instantă.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Battlefield 6 pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță EA Javelin anti-cheat.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Galerie Battlefield 6 Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Battlefield 6 Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și vehicle-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Battlefield 6 Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Battlefield 6 cheats för Battlefield 6 på PC. ESP wallhack, radar hack, Aimbot, EA Javelin anti-cheat-underhåll. Omedelbar digital leverans.', h1: 'Battlefield 6 Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Battlefield 6 på Windows PC: ESP wallhack, radar, Aimbot med EA Javelin anti-cheat-underhåll.', imageAlt: 'Battlefield 6 ESP player tags hack', gallery: 'Battlefield 6 Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Battlefield 6 Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och vehicle-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'bf6-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'bf6-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'EA Javelin Maintenance Log', focus: 'EA Javelin patch status and rebuild notes', altKeyword: 'updates EA Javelin maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and EA Javelin questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'EA Javelin Safe Status', focus: 'undetected maintenance after EA Javelin anti-cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	javelin: { suffix: 'Patch Maintenance', focus: 'how EA Javelin updates are handled for Battlefield 6 hacks', altKeyword: 'EA Javelin bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Battlefield 6 cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Battlefield 6 hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Battlefield 6 cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Battlefield 6', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'bf6-esp': 'Cajas de jugador y wallhack',
		'bf6-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro EA Javelin',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		javelin: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'bf6-esp': 'Boîtes joueur et wallhack',
		'bf6-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal EA Javelin',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		javelin: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'bf6-esp': 'Spielerboxen & Wallhack',
		'bf6-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'EA Javelin Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		javelin: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'bf6-esp': 'Caixas de jogador e wallhack',
		'bf6-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro EA Javelin',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		javelin: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'bf6-esp': 'Box giocatore e wallhack',
		'bf6-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione EA Javelin',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		javelin: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'bf6-esp': 'Боксы игроков и wallhack',
		'bf6-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал EA Javelin',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		javelin: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Battlefield 6 Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Battlefield 6 Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'bf6-esp': { en: 'Battlefield 6 ESP', es: 'ESP Battlefield 6', fr: 'ESP Battlefield 6', de: 'Battlefield 6 ESP', pt: 'ESP Battlefield 6', it: 'ESP Battlefield 6', nl: 'Battlefield 6 ESP', pl: 'ESP Battlefield 6', ru: 'ESP Battlefield 6', tr: 'Battlefield 6 ESP', ar: 'ESP Battlefield 6', ja: 'Battlefield 6 ESP', ko: 'Battlefield 6 ESP', zh: 'Battlefield 6 ESP', hi: 'Battlefield 6 ESP', id: 'ESP Battlefield 6', th: 'Battlefield 6 ESP', vi: 'ESP Battlefield 6', uk: 'ESP Battlefield 6', cs: 'Battlefield 6 ESP', ro: 'ESP Battlefield 6', sv: 'Battlefield 6 ESP' },
	'bf6-aimbot': { en: 'Battlefield 6 Aimbot', es: 'Aimbot Battlefield 6', fr: 'Aimbot Battlefield 6', de: 'Battlefield 6 Aimbot', pt: 'Aimbot Battlefield 6', it: 'Aimbot Battlefield 6', nl: 'Battlefield 6 Aimbot', pl: 'Aimbot Battlefield 6', ru: 'Aimbot Battlefield 6', tr: 'Battlefield 6 Aimbot', ar: 'Aimbot Battlefield 6', ja: 'Battlefield 6 Aimbot', ko: 'Battlefield 6 Aimbot', zh: 'Battlefield 6 Aimbot', hi: 'Battlefield 6 Aimbot', id: 'Aimbot Battlefield 6', th: 'Battlefield 6 Aimbot', vi: 'Aimbot Battlefield 6', uk: 'Aimbot Battlefield 6', cs: 'Battlefield 6 Aimbot', ro: 'Aimbot Battlefield 6', sv: 'Battlefield 6 Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Battlefield 6 Wallhack', es: 'Wallhack Battlefield 6', fr: 'Wallhack Battlefield 6', de: 'Battlefield 6 Wallhack', pt: 'Wallhack Battlefield 6', it: 'Wallhack Battlefield 6', nl: 'Battlefield 6 Wallhack', pl: 'Wallhack Battlefield 6', ru: 'Wallhack Battlefield 6', tr: 'Battlefield 6 Wallhack', ar: 'Wallhack Battlefield 6', ja: 'Battlefield 6 Wallhack', ko: 'Battlefield 6 Wallhack', zh: 'Battlefield 6 Wallhack', hi: 'Battlefield 6 Wallhack', id: 'Wallhack Battlefield 6', th: 'Battlefield 6 Wallhack', vi: 'Wallhack Battlefield 6', uk: 'Wallhack Battlefield 6', cs: 'Battlefield 6 Wallhack', ro: 'Wallhack Battlefield 6', sv: 'Battlefield 6 Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	javelin: { en: 'EA Javelin Bypass', es: 'Bypass EA Javelin', fr: 'Bypass EA Javelin', de: 'EA Javelin Bypass', pt: 'Bypass EA Javelin', it: 'Bypass EA Javelin', nl: 'EA Javelin Bypass', pl: 'Bypass EA Javelin', ru: 'Bypass EA Javelin', tr: 'EA Javelin bypass', ar: 'Bypass EA Javelin', ja: 'EA Javelin Bypass', ko: 'EA Javelin Bypass', zh: 'EA Javelin Bypass', hi: 'EA Javelin Bypass', id: 'Bypass EA Javelin', th: 'EA Javelin Bypass', vi: 'Bypass EA Javelin', uk: 'Bypass EA Javelin', cs: 'EA Javelin Bypass', ro: 'Bypass EA Javelin', sv: 'EA Javelin Bypass' },
	'cheats-2026': { en: 'Battlefield 6 Cheats 2026', es: 'Trucos Battlefield 6 2026', fr: 'Triches Battlefield 6 2026', de: 'Battlefield 6 Cheats 2026', pt: 'Cheats Battlefield 6 2026', it: 'Cheat Battlefield 6 2026', nl: 'Battlefield 6 Cheats 2026', pl: 'Cheaty Battlefield 6 2026', ru: 'Читы Battlefield 6 2026', tr: 'Battlefield 6 Hileleri 2026', ar: 'غش Battlefield 6 2026', ja: 'Battlefield 6 Cheats 2026', ko: 'Battlefield 6 Cheats 2026', zh: 'Battlefield 6作弊 2026', hi: 'Battlefield 6 Cheats 2026', id: 'Cheat Battlefield 6 2026', th: 'Battlefield 6 Cheats 2026', vi: 'Cheat Battlefield 6 2026', uk: 'Чіти Battlefield 6 2026', cs: 'Battlefield 6 cheaty 2026', ro: 'Cheats Battlefield 6 2026', sv: 'Battlefield 6 Cheats 2026' },
	hacks: { en: 'Battlefield 6 Cheats', es: 'Trucos Battlefield 6', fr: 'Triches Battlefield 6', de: 'Battlefield 6 Cheats', pt: 'Cheats Battlefield 6', it: 'Cheat Battlefield 6', nl: 'Battlefield 6 Cheats', pl: 'Cheaty Battlefield 6', ru: 'Читы Battlefield 6', tr: 'Battlefield 6 Hileleri', ar: 'غش Battlefield 6', ja: 'Battlefield 6 Cheats', ko: 'Battlefield 6 Cheats', zh: 'Battlefield 6作弊', hi: 'Battlefield 6 Cheats', id: 'Cheat Battlefield 6', th: 'Battlefield 6 Cheats', vi: 'Cheat Battlefield 6', uk: 'Чіти Battlefield 6', cs: 'Battlefield 6 cheaty', ro: 'Cheats Battlefield 6', sv: 'Battlefield 6 Cheats' },
	'cheat-download': { en: 'Battlefield 6 Cheat Download', es: 'Descarga Battlefield 6 Cheats', fr: 'Téléchargement Battlefield 6 Cheats', de: 'Battlefield 6 Cheat Download', pt: 'Download Battlefield 6 Cheats', it: 'Download Battlefield 6 Cheats', nl: 'Battlefield 6 Cheat Download', pl: 'Pobieranie Battlefield 6 Cheats', ru: 'Скачать Battlefield 6 Cheats', tr: 'Battlefield 6 Hile İndir', ar: 'تحميل Battlefield 6 Cheats', ja: 'Battlefield 6 Cheat Download', ko: 'Battlefield 6 Cheat Download', zh: 'Battlefield 6作弊下载', hi: 'Battlefield 6 Cheat Download', id: 'Download Cheat Battlefield 6', th: 'ดาวน์โหลด Battlefield 6 Cheats', vi: 'Tải Cheat Battlefield 6', uk: 'Завантаження Battlefield 6 Cheats', cs: 'Stáhnout Battlefield 6 Cheats', ro: 'Descărcare Battlefield 6 Cheats', sv: 'Battlefield 6 Cheat Download' },
	'mod-menu': { en: 'Battlefield 6 Mod Menu', es: 'Menú mod Battlefield 6', fr: 'Menu mod Battlefield 6', de: 'Battlefield 6 Mod-Menü', pt: 'Menu mod Battlefield 6', it: 'Mod menu Battlefield 6', nl: 'Battlefield 6 Mod Menu', pl: 'Mod menu Battlefield 6', ru: 'Мод-меню Battlefield 6', tr: 'Battlefield 6 Mod Menü', ar: 'قائمة مود Battlefield 6', ja: 'Battlefield 6 Mod Menu', ko: 'Battlefield 6 모드 메뉴', zh: 'Battlefield 6修改菜单', hi: 'Battlefield 6 Mod Menu', id: 'Menu mod Battlefield 6', th: 'เมนูมอด Battlefield 6', vi: 'Mod menu Battlefield 6', uk: 'Мод-меню Battlefield 6', cs: 'Battlefield 6 mod menu', ro: 'Meniu mod Battlefield 6', sv: 'Battlefield 6 Mod-meny' },
	'soft-aim': { en: 'Battlefield 6 Soft Aim', es: 'Soft aim Battlefield 6', fr: 'Soft aim Battlefield 6', de: 'Battlefield 6 Soft Aim', pt: 'Soft aim Battlefield 6', it: 'Soft aim Battlefield 6', nl: 'Battlefield 6 Soft Aim', pl: 'Soft aim Battlefield 6', ru: 'Soft aim Battlefield 6', tr: 'Battlefield 6 Soft Aim', ar: 'Soft aim Battlefield 6', ja: 'Battlefield 6 Soft Aim', ko: 'Battlefield 6 Soft Aim', zh: 'Battlefield 6 Soft Aim', hi: 'Battlefield 6 Soft Aim', id: 'Soft aim Battlefield 6', th: 'Battlefield 6 Soft Aim', vi: 'Soft aim Battlefield 6', uk: 'Soft aim Battlefield 6', cs: 'Battlefield 6 Soft Aim', ro: 'Soft aim Battlefield 6', sv: 'Battlefield 6 Soft Aim' },
	'best-cheats': { en: 'Best Battlefield 6 Cheats', es: 'Mejores trucos Battlefield 6', fr: 'Meilleures triches Battlefield 6', de: 'Beste Battlefield 6 Cheats', pt: 'Melhores cheats Battlefield 6', it: 'Migliori cheat Battlefield 6', nl: 'Beste Battlefield 6 Cheats', pl: 'Najlepsze cheaty Battlefield 6', ru: 'Лучшие читы Battlefield 6', tr: 'En İyi Battlefield 6 Hileleri', ar: 'أفضل غش Battlefield 6', ja: '最強Battlefield 6チート', ko: '최고의 Battlefield 6 치트', zh: '最佳Battlefield 6作弊', hi: 'सर्वश्रेष्ठ Battlefield 6 Cheats', id: 'Cheat Battlefield 6 terbaik', th: 'Cheat Battlefield 6 ที่ดีที่สุด', vi: 'Cheat Battlefield 6 tốt nhất', uk: 'Найкращі чіти Battlefield 6', cs: 'Nejlepší Battlefield 6 cheaty', ro: 'Cele mai bune cheats Battlefield 6', sv: 'Bästa Battlefield 6 Cheats' },
	'aimbot-hack': { en: 'Battlefield 6 Aimbot Hack', es: 'Hack aimbot Battlefield 6', fr: 'Hack aimbot Battlefield 6', de: 'Battlefield 6 Aimbot Hack', pt: 'Hack aimbot Battlefield 6', it: 'Hack aimbot Battlefield 6', nl: 'Battlefield 6 Aimbot Hack', pl: 'Hack aimbot Battlefield 6', ru: 'Хак aimbot Battlefield 6', tr: 'Battlefield 6 Aimbot Hilesi', ar: 'هاك Aimbot Battlefield 6', ja: 'Battlefield 6 Aimbot Hack', ko: 'Battlefield 6 에임봇 핵', zh: 'Battlefield 6自瞄外挂', hi: 'Battlefield 6 Aimbot Hack', id: 'Hack aimbot Battlefield 6', th: 'Hack Aimbot Battlefield 6', vi: 'Hack aimbot Battlefield 6', uk: 'Хак aimbot Battlefield 6', cs: 'Battlefield 6 aimbot hack', ro: 'Hack aimbot Battlefield 6', sv: 'Battlefield 6 Aimbot Hack' },
	'esp-hack': { en: 'Battlefield 6 ESP Hack', es: 'Hack ESP Battlefield 6', fr: 'Hack ESP Battlefield 6', de: 'Battlefield 6 ESP Hack', pt: 'Hack ESP Battlefield 6', it: 'Hack ESP Battlefield 6', nl: 'Battlefield 6 ESP Hack', pl: 'Hack ESP Battlefield 6', ru: 'Хак ESP Battlefield 6', tr: 'Battlefield 6 ESP Hilesi', ar: 'هاك ESP Battlefield 6', ja: 'Battlefield 6 ESP Hack', ko: 'Battlefield 6 ESP 핵', zh: 'Battlefield 6 ESP外挂', hi: 'Battlefield 6 ESP Hack', id: 'Hack ESP Battlefield 6', th: 'Hack ESP Battlefield 6', vi: 'Hack ESP Battlefield 6', uk: 'Хак ESP Battlefield 6', cs: 'Battlefield 6 ESP hack', ro: 'Hack ESP Battlefield 6', sv: 'Battlefield 6 ESP Hack' },
	'unlock-all': { en: 'Battlefield 6 Unlock All', es: 'Unlock all Battlefield 6', fr: 'Unlock all Battlefield 6', de: 'Battlefield 6 Unlock All', pt: 'Unlock all Battlefield 6', it: 'Unlock all Battlefield 6', nl: 'Battlefield 6 Unlock All', pl: 'Unlock all Battlefield 6', ru: 'Unlock all Battlefield 6', tr: 'Battlefield 6 Unlock All', ar: 'Unlock all Battlefield 6', ja: 'Battlefield 6 Unlock All', ko: 'Battlefield 6 Unlock All', zh: 'Battlefield 6 Unlock All', hi: 'Battlefield 6 Unlock All', id: 'Unlock all Battlefield 6', th: 'Battlefield 6 Unlock All', vi: 'Unlock all Battlefield 6', uk: 'Unlock all Battlefield 6', cs: 'Battlefield 6 Unlock All', ro: 'Unlock all Battlefield 6', sv: 'Battlefield 6 Unlock All' },
};

const CTA2_HREF = {
	'bf6-esp': '/battlefield-6-cheats/',
	'bf6-aimbot': '/battlefield-6-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/battlefield-6-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/battlefield-6-cheats/',
	wallhack: '/battlefield-6-esp/',
	radar: '/battlefield-6-esp/',
	javelin: '/updates/',
	'cheats-2026': '/battlefield-6-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/battlefield-6-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/battlefield-6-aimbot/',
	'esp-hack': '/battlefield-6-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Battlefield 6 Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Battlefield 6 Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for battlefieldcheat.com and Battlefield 6 licenses.`),
		imageAlt: 'battlefield 6 cheats',
		galleryTitle: 'battlefield 6 cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on battlefieldcheat.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: our Discord server',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
