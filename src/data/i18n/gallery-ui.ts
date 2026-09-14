import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: "Battlefield 6 cheats",
		title: "Battlefield 6 cheats gallery",
		subtitle: "Simple Battlefield 6 cheats visuals — ESP, wallhack, aimbot, and DMA for Battlefield 6 on PC.",
		lead: "Battlefield 6 Cheats helps you spot enemies, vehicles, and objectives with ESP, aimbot, and DMA in one license.",
		highlights: [
			{ title: "Battlefield 6 cheats esp", copy: "See players through walls with Battlefield 6 cheats esp and wallhack overlays." },
			{ title: "Battlefield 6 cheats DMA", copy: "Track nearby threats with Battlefield 6 DMA before you push an objective." },
			{ title: "Battlefield 6 cheats aimbot", copy: "Use aimbot controls tuned for Battlefield 6 matches on Windows PC." },
		],
		updatesLabel: "Battlefield 6 cheats updates",
		updatesShort: "Updates",
	},
	es: {
		eyebrow: "Trucos de Battlefield 6",
		title: "Galería de trucos de Battlefield 6",
		subtitle: "Visuales simples — ESP, wallhack, aimbot y DMA para Battlefield 6 en PC.",
		lead: "Battlefield 6 Cheats te ayuda a ver enemigos, vehículos y objetivos con ESP, aimbot y DMA en una sola licencia.",
		highlights: [
			{ title: "ESP de Battlefield 6", copy: "Ve jugadores a través de paredes con ESP y wallhack de Battlefield 6." },
			{ title: "DMA de Battlefield 6", copy: "Sigue amenazas cercanas con DMA de Battlefield 6 antes de empujar un objetivo." },
			{ title: "Aimbot de Battlefield 6", copy: "Usa aim suave y controles de aimbot pensados para partidas de Battlefield 6 en PC Windows." },
		],
		updatesLabel: "Actualizaciones de Battlefield 6 Cheats",
		updatesShort: "Actualizaciones",
	},
	fr: {
		eyebrow: "Triches de Battlefield 6",
		title: "Galerie de triches Battlefield 6",
		subtitle: "Visuels simples — ESP, wallhack, aimbot et DMA pour Battlefield 6 sur PC.",
		lead: "Battlefield 6 Cheats vous aide à voir ennemis, véhicules et objectifs avec ESP, aimbot et DMA dans une seule licence.",
		highlights: [
			{ title: "ESP de Battlefield 6", copy: "Voyez les joueurs à travers les murs avec ESP et wallhack de Battlefield 6." },
			{ title: "DMA de Battlefield 6", copy: "Suivez les menaces proches avec le DMA de Battlefield 6 avant de pousser un objectif." },
			{ title: "Aimbot de Battlefield 6", copy: "Utilisez la visée douce et les commandes aimbot pensées pour les parties Battlefield 6 sur PC Windows." },
		],
		updatesLabel: "Mises à jour de Battlefield 6 Cheats",
		updatesShort: "Mises à jour",
	},
	de: {
		eyebrow: "Battlefield 6 Cheats",
		title: "Galerie der Battlefield 6 Cheats",
		subtitle: "Einfache Visuals — ESP, wallhack, aimbot und DMA für Battlefield 6 am PC.",
		lead: "Battlefield 6 Cheats hilft dir, Feinde, Fahrzeuge und Ziele mit ESP, Aimbot und DMA in einer Lizenz zu sehen.",
		highlights: [
			{ title: "ESP für Battlefield 6", copy: "Sieh Spieler durch Wände mit ESP und Wallhack für Battlefield 6." },
			{ title: "DMA für Battlefield 6", copy: "Verfolge nahe Bedrohungen mit DMA für Battlefield 6, bevor du ein Ziel angreifst." },
			{ title: "Aimbot für Battlefield 6", copy: "Nutze sanftes Aim und Aimbot-Steuerung, abgestimmt auf Battlefield 6-Matches auf Windows-PC." },
		],
		updatesLabel: "Updates zu Battlefield 6 Cheats",
		updatesShort: "Updates",
	},
	pt: {
		eyebrow: "Truques de Battlefield 6",
		title: "Galeria de truques de Battlefield 6",
		subtitle: "Visuais simples — ESP, wallhack, aimbot e DMA para Battlefield 6 em PC.",
		lead: "Battlefield 6 Cheats ajuda-te a ver inimigos, veículos e objetivos com ESP, aimbot e DMA numa só licença.",
		highlights: [
			{ title: "ESP de Battlefield 6", copy: "Vê jogadores através das paredes com ESP e wallhack de Battlefield 6." },
			{ title: "DMA de Battlefield 6", copy: "Segue ameaças próximas com DMA de Battlefield 6 antes de avançar para um objetivo." },
			{ title: "Aimbot de Battlefield 6", copy: "Usa mira suave e controlos de aimbot pensados para partidas de Battlefield 6 em PC Windows." },
		],
		updatesLabel: "Atualizações de Battlefield 6 Cheats",
		updatesShort: "Atualizações",
	},
	it: {
		eyebrow: "Trucchi di Battlefield 6",
		title: "Galleria trucchi di Battlefield 6",
		subtitle: "Immagini semplici — ESP, wallhack, aimbot e DMA per Battlefield 6 su PC.",
		lead: "Battlefield 6 Cheats ti aiuta a vedere nemici, veicoli e obiettivi con ESP, aimbot e DMA in una sola licenza.",
		highlights: [
			{ title: "ESP di Battlefield 6", copy: "Vedi i giocatori attraverso i muri con ESP e wallhack di Battlefield 6." },
			{ title: "DMA di Battlefield 6", copy: "Segui le minacce vicine con il DMA di Battlefield 6 prima di spingere un obiettivo." },
			{ title: "Aimbot di Battlefield 6", copy: "Usa mira morbida e comandi aimbot pensati per le partite di Battlefield 6 su PC Windows." },
		],
		updatesLabel: "Aggiornamenti di Battlefield 6 Cheats",
		updatesShort: "Aggiornamenti",
	},
	nl: {
		eyebrow: "Battlefield 6 cheats",
		title: "Galerie van Battlefield 6 cheats",
		subtitle: "Eenvoudige visuals — ESP, wallhack, aimbot en DMA voor Battlefield 6 op pc.",
		lead: "Battlefield 6 Cheats helpt je vijanden, voertuigen en doelen te zien met ESP, aimbot en DMA in één licentie.",
		highlights: [
			{ title: "ESP van Battlefield 6", copy: "Zie spelers door muren met ESP en wallhack van Battlefield 6." },
			{ title: "DMA van Battlefield 6", copy: "Volg nabije dreigingen met DMA van Battlefield 6 voordat je een doel aanvalt." },
			{ title: "Aimbot van Battlefield 6", copy: "Gebruik zachte aim en aimbot-bediening afgestemd op Battlefield 6-matches op Windows-pc." },
		],
		updatesLabel: "Updates van Battlefield 6 Cheats",
		updatesShort: "Updates",
	},
	pl: {
		eyebrow: "Cheaty do Battlefield 6",
		title: "Galeria cheatów do Battlefield 6",
		subtitle: "Proste grafiki — ESP, wallhack, aimbot i DMA do Battlefield 6 na PC.",
		lead: "Battlefield 6 Cheats pomaga widzieć wrogów, pojazdy i cele dzięki ESP, aimbotowi i DMA na jednej licencji.",
		highlights: [
			{ title: "ESP do Battlefield 6", copy: "Widzisz graczy przez ściany dzięki ESP i wallhackowi do Battlefield 6." },
			{ title: "DMA do Battlefield 6", copy: "Śledź pobliskie zagrożenia z DMA do Battlefield 6, zanim ruszysz na cel." },
			{ title: "Aimbot do Battlefield 6", copy: "Używaj miękkiego aimu i sterowania aimbotem dopasowanego do meczów Battlefield 6 na PC z Windows." },
		],
		updatesLabel: "Aktualizacje Battlefield 6 Cheats",
		updatesShort: "Aktualizacje",
	},
	ru: {
		eyebrow: "Читы для Battlefield 6",
		title: "Галерея читов для Battlefield 6",
		subtitle: "Простые кадры — ESP, wallhack, aimbot и DMA для Battlefield 6 на ПК.",
		lead: "Battlefield 6 Cheats помогает видеть врагов, технику и цели с ESP, aimbot и DMA по одной лицензии.",
		highlights: [
			{ title: "ESP для Battlefield 6", copy: "Видьте игроков сквозь стены с ESP и wallhack для Battlefield 6." },
			{ title: "DMA для Battlefield 6", copy: "Отслеживайте ближайшие угрозы с DMA для Battlefield 6 перед штурмом цели." },
			{ title: "Aimbot для Battlefield 6", copy: "Используйте мягкий аим и управление aimbot, заточенные под матчи Battlefield 6 на ПК с Windows." },
		],
		updatesLabel: "Обновления Battlefield 6 Cheats",
		updatesShort: "Обновления",
	},
	tr: {
		eyebrow: "Battlefield 6 hileleri",
		title: "Battlefield 6 hile galerisi",
		subtitle: "Sade görseller — PC’de Battlefield 6 için ESP, wallhack, aimbot ve DMA.",
		lead: "Battlefield 6 Cheats, tek lisansla ESP, aimbot ve DMA ile düşmanları, araçları ve hedefleri görmene yardımcı olur.",
		highlights: [
			{ title: "Battlefield 6 ESP", copy: "Battlefield 6 ESP ve wallhack ile oyuncuları duvarların arkasından görün." },
			{ title: "Battlefield 6 DMA", copy: "Bir hedefe basmadan önce Battlefield 6 DMA ile yakındaki tehditleri izleyin." },
			{ title: "Battlefield 6 Aimbot", copy: "Windows PC’deki Battlefield 6 maçları için yumuşak nişan ve aimbot kontrollerini kullanın." },
		],
		updatesLabel: "Battlefield 6 Cheats güncellemeleri",
		updatesShort: "Güncellemeler",
	},
	ar: {
		eyebrow: "غش Battlefield 6",
		title: "معرض غش Battlefield 6",
		subtitle: "صور بسيطة — ESP وwallhack وaimbot وDMA لـ Battlefield 6 على الكمبيوتر.",
		lead: "يساعدك Battlefield 6 Cheats على رؤية الأعداء والمركبات والأهداف عبر ESP وaimbot وDMA برخصة واحدة.",
		highlights: [
			{ title: "ESP لـ Battlefield 6", copy: "شاهد اللاعبين عبر الجدران مع ESP وwallhack لـ Battlefield 6." },
			{ title: "DMA لـ Battlefield 6", copy: "تتبع التهديدات القريبة مع DMA لـ Battlefield 6 قبل التقدم نحو هدف." },
			{ title: "Aimbot لـ Battlefield 6", copy: "استخدم التسديد الناعم وأدوات Aimbot المصممة لمباريات Battlefield 6 على جهاز Windows." },
		],
		updatesLabel: "تحديثات Battlefield 6 Cheats",
		updatesShort: "التحديثات",
	},
	ja: {
		eyebrow: "Battlefield 6 チート",
		title: "Battlefield 6 チートギャラリー",
		subtitle: "シンプルな映像 — PC の Battlefield 6 向け ESP、wallhack、aimbot、DMA。",
		lead: "Battlefield 6 Cheats は、1つのライセンスで ESP、Aimbot、DMA により敵、車両、目標を把握できます。",
		highlights: [
			{ title: "Battlefield 6 の ESP", copy: "Battlefield 6 の ESP と wallhack で、壁の向こうのプレイヤーを確認できます。" },
			{ title: "Battlefield 6 の DMA", copy: "目標を押す前に、Battlefield 6 の DMA で近くの脅威を追います。" },
			{ title: "Battlefield 6 の Aimbot", copy: "Windows PC の Battlefield 6 試合向けに調整したソフトエイムと Aimbot 操作を使います。" },
		],
		updatesLabel: "Battlefield 6 Cheats のアップデート",
		updatesShort: "アップデート",
	},
	ko: {
		eyebrow: "Battlefield 6 치트",
		title: "Battlefield 6 치트 갤러리",
		subtitle: "간단한 화면 — PC Battlefield 6용 ESP, wallhack, aimbot, DMA.",
		lead: "Battlefield 6 Cheats는 하나의 라이선스로 ESP, 에임봇, DMA로 적, 차량, 목표를 파악하도록 도와줍니다.",
		highlights: [
			{ title: "Battlefield 6 ESP", copy: "Battlefield 6 ESP와 wallhack으로 벽을 통해 플레이어를 보세요." },
			{ title: "Battlefield 6 DMA", copy: "목표를 밀기 전에 Battlefield 6 DMA로 근처 위협을 추적하세요." },
			{ title: "Battlefield 6 에임봇", copy: "Windows PC Battlefield 6 경기에 맞춘 소프트 에임과 에임봇 조작을 사용하세요." },
		],
		updatesLabel: "Battlefield 6 Cheats 업데이트",
		updatesShort: "업데이트",
	},
	zh: {
		eyebrow: "Battlefield 6 外挂",
		title: "Battlefield 6 外挂图库",
		subtitle: "简洁画面 — 适用于 PC 上 Battlefield 6 的 ESP、wallhack、aimbot 和 DMA。",
		lead: "Battlefield 6 Cheats 帮你用一份授权，通过 ESP、Aimbot 和 DMA 看清敌人、载具和目标。",
		highlights: [
			{ title: "Battlefield 6 的 ESP", copy: "用 Battlefield 6 的 ESP 和 wallhack 透过墙壁看到玩家。" },
			{ title: "Battlefield 6 的 DMA", copy: "在推进目标前，用 Battlefield 6 的 DMA 追踪附近威胁。" },
			{ title: "Battlefield 6 的 Aimbot", copy: "使用为 Windows PC 上 Battlefield 6 对局设计的柔和瞄准和 Aimbot 控制。" },
		],
		updatesLabel: "Battlefield 6 Cheats 更新",
		updatesShort: "更新",
	},
	hi: {
		eyebrow: "Battlefield 6 चीट्स",
		title: "Battlefield 6 चीट्स गैलरी",
		subtitle: "सरल दृश्य — PC पर Battlefield 6 के लिए ESP, wallhack, aimbot और DMA।",
		lead: "Battlefield 6 Cheats एक लाइसेंस में ESP, aimbot और DMA से दुश्मन, वाहन और लक्ष्य देखने में मदद करता है।",
		highlights: [
			{ title: "Battlefield 6 का ESP", copy: "Battlefield 6 के ESP और wallhack से दीवारों के पार खिलाड़ियों को देखें।" },
			{ title: "Battlefield 6 का DMA", copy: "लक्ष्य पर आगे बढ़ने से पहले Battlefield 6 के DMA से पास के खतरे ट्रैक करें।" },
			{ title: "Battlefield 6 का Aimbot", copy: "Windows PC पर Battlefield 6 मैचों के लिए नरम निशाना और aimbot नियंत्रण इस्तेमाल करें।" },
		],
		updatesLabel: "Battlefield 6 Cheats अपडेट",
		updatesShort: "अपडेट",
	},
	id: {
		eyebrow: "Cheat Battlefield 6",
		title: "Galeri cheat Battlefield 6",
		subtitle: "Visual sederhana — ESP, wallhack, aimbot, dan DMA untuk Battlefield 6 di PC.",
		lead: "Battlefield 6 Cheats membantu Anda melihat musuh, kendaraan, dan objektif dengan ESP, aimbot, dan DMA dalam satu lisensi.",
		highlights: [
			{ title: "ESP Battlefield 6", copy: "Lihat pemain tembus dinding dengan ESP dan wallhack Battlefield 6." },
			{ title: "DMA Battlefield 6", copy: "Lacak ancaman terdekat dengan DMA Battlefield 6 sebelum mendorong objektif." },
			{ title: "Aimbot Battlefield 6", copy: "Gunakan aim lembut dan kontrol aimbot yang disetel untuk pertandingan Battlefield 6 di PC Windows." },
		],
		updatesLabel: "Pembaruan Battlefield 6 Cheats",
		updatesShort: "Pembaruan",
	},
	th: {
		eyebrow: "ชีท Battlefield 6",
		title: "แกลเลอรีชีท Battlefield 6",
		subtitle: "ภาพเรียบง่าย — ESP, wallhack, aimbot และ DMA สำหรับ Battlefield 6 บนพีซี",
		lead: "Battlefield 6 Cheats ช่วยให้คุณเห็นศัตรู ยานพาหนะ และเป้าหมายด้วย ESP, aimbot และ DMA ในไลเซนส์เดียว",
		highlights: [
			{ title: "ESP ของ Battlefield 6", copy: "เห็นผู้เล่นทะลุกำแพงด้วย ESP และ wallhack ของ Battlefield 6" },
			{ title: "DMA ของ Battlefield 6", copy: "ติดตามภัยใกล้ตัวด้วย DMA ของ Battlefield 6 ก่อนดันเป้าหมาย" },
			{ title: "Aimbot ของ Battlefield 6", copy: "ใช้เล็งนุ่มและการควบคุม aimbot ที่ออกแบบสำหรับแมตช์ Battlefield 6 บน Windows PC" },
		],
		updatesLabel: "อัปเดต Battlefield 6 Cheats",
		updatesShort: "อัปเดต",
	},
	vi: {
		eyebrow: "Cheat Battlefield 6",
		title: "Thư viện cheat Battlefield 6",
		subtitle: "Hình ảnh đơn giản — ESP, wallhack, aimbot và DMA cho Battlefield 6 trên PC.",
		lead: "Battlefield 6 Cheats giúp bạn thấy kẻ địch, phương tiện và mục tiêu với ESP, aimbot và DMA trong một giấy phép.",
		highlights: [
			{ title: "ESP Battlefield 6", copy: "Nhìn người chơi xuyên tường với ESP và wallhack của Battlefield 6." },
			{ title: "DMA Battlefield 6", copy: "Theo dõi mối đe dọa gần với DMA Battlefield 6 trước khi đẩy mục tiêu." },
			{ title: "Aimbot Battlefield 6", copy: "Dùng ngắm mềm và điều khiển aimbot dành cho trận Battlefield 6 trên PC Windows." },
		],
		updatesLabel: "Cập nhật Battlefield 6 Cheats",
		updatesShort: "Cập nhật",
	},
	uk: {
		eyebrow: "Чіти для Battlefield 6",
		title: "Галерея чітів для Battlefield 6",
		subtitle: "Прості кадри — ESP, wallhack, aimbot і DMA для Battlefield 6 на ПК.",
		lead: "Battlefield 6 Cheats допомагає бачити ворогів, техніку й цілі за допомогою ESP, aimbot і DMA за однією ліцензією.",
		highlights: [
			{ title: "ESP для Battlefield 6", copy: "Бачте гравців крізь стіни з ESP і wallhack для Battlefield 6." },
			{ title: "DMA для Battlefield 6", copy: "Відстежуйте близькі загрози з DMA для Battlefield 6 перед штурмом цілі." },
			{ title: "Aimbot для Battlefield 6", copy: "Використовуйте м’який приціл і керування aimbot, розраховані на матчі Battlefield 6 на ПК з Windows." },
		],
		updatesLabel: "Оновлення Battlefield 6 Cheats",
		updatesShort: "Оновлення",
	},
	cs: {
		eyebrow: "Cheaty do Battlefield 6",
		title: "Galerie cheatů do Battlefield 6",
		subtitle: "Jednoduché záběry — ESP, wallhack, aimbot a DMA pro Battlefield 6 na PC.",
		lead: "Battlefield 6 Cheats vám pomůže vidět nepřátele, vozidla a cíle pomocí ESP, aimbotu a DMA na jedné licenci.",
		highlights: [
			{ title: "ESP pro Battlefield 6", copy: "Vidíte hráče skrz zdi díky ESP a wallhacku pro Battlefield 6." },
			{ title: "DMA pro Battlefield 6", copy: "Sledujte blízké hrozby pomocí DMA pro Battlefield 6, než zaútočíte na cíl." },
			{ title: "Aimbot pro Battlefield 6", copy: "Používejte jemný aim a ovládání aimbotu určené pro zápasy Battlefield 6 na PC s Windows." },
		],
		updatesLabel: "Aktualizace Battlefield 6 Cheats",
		updatesShort: "Aktualizace",
	},
	ro: {
		eyebrow: "Cheat-uri Battlefield 6",
		title: "Galerie de cheat-uri Battlefield 6",
		subtitle: "Imagini simple — ESP, wallhack, aimbot și DMA pentru Battlefield 6 pe PC.",
		lead: "Battlefield 6 Cheats te ajută să vezi inamici, vehicule și obiective cu ESP, aimbot și DMA într-o singură licență.",
		highlights: [
			{ title: "ESP pentru Battlefield 6", copy: "Vezi jucătorii prin pereți cu ESP și wallhack pentru Battlefield 6." },
			{ title: "DMA pentru Battlefield 6", copy: "Urmărește amenințările din apropiere cu DMA pentru Battlefield 6 înainte să avansezi spre un obiectiv." },
			{ title: "Aimbot pentru Battlefield 6", copy: "Folosește aim blând și comenzi aimbot gândite pentru meciurile de Battlefield 6 pe PC Windows." },
		],
		updatesLabel: "Actualizări Battlefield 6 Cheats",
		updatesShort: "Actualizări",
	},
	sv: {
		eyebrow: "Battlefield 6-cheats",
		title: "Galleri för Battlefield 6-cheats",
		subtitle: "Enkla bilder — ESP, wallhack, aimbot och DMA för Battlefield 6 på PC.",
		lead: "Battlefield 6 Cheats hjälper dig att se fiender, fordon och mål med ESP, aimbot och DMA i en licens.",
		highlights: [
			{ title: "ESP för Battlefield 6", copy: "Se spelare genom väggar med ESP och wallhack för Battlefield 6." },
			{ title: "DMA för Battlefield 6", copy: "Följ närliggande hot med DMA för Battlefield 6 innan du trycker mot ett mål." },
			{ title: "Aimbot för Battlefield 6", copy: "Använd mjuk aim och aimbot-kontroller anpassade för Battlefield 6-matcher på Windows-PC." },
		],
		updatesLabel: "Uppdateringar för Battlefield 6 Cheats",
		updatesShort: "Uppdateringar",
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
