'use strict';

/* locallink shop — static storefront, no backend.
   Orders go to email (FormSubmit → locallink.ge@gmail.com) or WhatsApp —
   the customer chooses at checkout. */

var WA_NUMBER = '995597777619';
var WA_URL = 'https://wa.me/' + WA_NUMBER;
var FB_URL = 'https://www.facebook.com/people/Local-Link-%E1%83%A8%E1%83%94%E1%83%9C%E1%83%98-%E1%83%91%E1%83%98%E1%83%96%E1%83%9C%E1%83%94%E1%83%A1%E1%83%98%E1%83%A1%E1%83%97%E1%83%95%E1%83%98%E1%83%A1/61595909386695/';
var PHONE_DISPLAY = '597 777 619';
var PHONE_LINK = 'tel:+995597777619';
var EMAIL = 'locallink.ge@gmail.com';
var FORMSUBMIT_URL = 'https://formsubmit.co/ajax/' + EMAIL;
var SITE_URL = 'https://locallink.store/';
var STOCK_API_URL = 'https://locallink-stock.shao42ia.workers.dev/api/stock';

var PRODUCTS = [
  {
    slug: 'sticker-black',
    price: 15,
    img: 'images/sticker-black.jpg',
    name: {
      ka: 'NFC სტიკერი — Google შეფასება (შავი)',
      en: 'NFC Sticker — Google Review (Black)',
      ru: 'NFC-наклейка — отзыв в Google (чёрная)'
    },
    desc: {
      ka: 'მრგვალი NFC სტიკერი შავი ფერის. ტელეფონის მიდებით იხსნება Google შეფასების გვერდი. დიამეტრი: 2.5 სმ.',
      en: 'Round NFC sticker in black. Tap it with a phone to open the Google review page. Diameter: 2.5 cm.',
      ru: 'Круглая NFC-наклейка чёрного цвета. Приложите телефон — откроется страница отзывов в Google. Диаметр: 2,5 см.'
    }
  },
  {
    slug: 'sticker-white',
    price: 15,
    img: 'images/sticker-white.jpg',
    name: {
      ka: 'NFC სტიკერი — Google შეფასება (თეთრი)',
      en: 'NFC Sticker — Google Review (White)',
      ru: 'NFC-наклейка — отзыв в Google (белая)'
    },
    desc: {
      ka: 'მრგვალი NFC სტიკერი თეთრი ფერის. ტელეფონის მიდებით იხსნება Google შეფასების გვერდი. დიამეტრი: 2.5 სმ.',
      en: 'Round NFC sticker in white. Tap it with a phone to open the Google review page. Diameter: 2.5 cm.',
      ru: 'Круглая NFC-наклейка белого цвета. Приложите телефон — откроется страница отзывов в Google. Диаметр: 2,5 см.'
    }
  },
  {
    slug: 'nfc-card',
    price: 40,
    img: 'images/nfc-card.jpg',
    name: {
      ka: 'ორფხრივი NFC ბარათი — Google შეფასება',
      en: 'Double-Sided NFC Card — Google Review',
      ru: 'Двусторонняя NFC-карта — отзыв в Google'
    },
    desc: {
      ka: 'ორფხრივი ბარათი NFC ჩიპითა და QR კოდით. ტელეფონის მიდებით ან QR კოდის დასკანერებით იხსნება Google შეფასების გვერდი. ზომა: 8.55 × 5.4 სმ.',
      en: 'Double-sided card with an NFC chip and a QR code. Tap a phone or scan the QR code to open the Google review page. Size: 8.55 × 5.4 cm.',
      ru: 'Двусторонняя карта с NFC-чипом и QR-кодом. Приложите телефон или отсканируйте QR-код — откроется страница отзывов в Google. Размер: 8,55 × 5,4 см.'
    }
  },
  {
    slug: 'nfc-stand',
    price: 50,
    img: 'images/nfc-stand.jpg',
    name: {
      ka: 'NFC სტენდი — Google შეფასება',
      en: 'NFC Stand — Google Review',
      ru: 'NFC-стенд — отзыв в Google'
    },
    desc: {
      ka: 'მაგიდის სტენდი NFC ჩიპით. მომხმარებელი ტელეფონს ადებს სტენდს და მაშინვე იხსნება თქვენი Google შეფასების გვერდი. ზომა: 12 × 12 სმ.',
      en: 'Table stand with an NFC chip. Customers tap it with their phone and your Google review page opens instantly. Size: 12 × 12 cm.',
      ru: 'Настольный стенд с NFC-чипом. Клиент прикладывает телефон — и сразу открывается страница отзывов в Google. Размер: 12 × 12 см.'
    }
  },
  {
    slug: 'photo-stand',
    price: 60,
    img: 'images/photo-stand.jpg',
    name: {
      ka: 'სტენდი ჩასასმელი ფოტოთი — QR + NFC',
      en: 'Photo-Insert Stand — QR + NFC',
      ru: 'Стенд со вставным фото — QR + NFC'
    },
    desc: {
      ka: 'სტენდი, რომელშიც ნებისმიერი ფოტოს ან დიზაინის ჩასმა შეიძლება. QR კოდის დასკანერებით ან ტელეფონის მიდებით (NFC) იხსნება თქვენი გვერდი. ზომა: 15 × 10 × 3 სმ.',
      en: 'A stand you can insert any photo or design into. Scanning the QR code or tapping with a phone (NFC) opens your page. Size: 15 × 10 × 3 cm.',
      ru: 'Стенд, в который можно вставить любое фото или дизайн. Сканирование QR-кода или касание телефоном (NFC) открывает вашу страницу. Размер: 15 × 10 × 3 см.'
    }
  }
];

var SERVICES = [
  {
    title: { ka: 'Google Business პროფილი', en: 'Google Business Profile', ru: 'Профиль Google Business' },
    items: [
      { id: 'gbp-create', amount: 10, name: { ka: 'პროფილის შექმნა', en: 'Profile creation', ru: 'Создание профиля' }, price: { ka: '10₾', en: '10₾', ru: '10₾' } },
      { id: 'gbp-fill', amount: 20, name: { ka: 'სრულად შევსება', en: 'Full profile fill-out', ru: 'Полное заполнение' }, price: { ka: '20₾', en: '20₾', ru: '20₾' } },
      { id: 'gbp-verify', amount: 30, name: { ka: 'ვერიფიკაციის მოთხოვნის გამზადება', en: 'Verification request preparation', ru: 'Подготовка запроса на верификацию' }, price: { ka: '30₾', en: '30₾', ru: '30₾' } },
      { id: 'gbp-all', amount: 50, name: { ka: 'სამივე ერთად (60₾-ის ნაცვლად)', en: 'All three together (instead of 60₾)', ru: 'Все три вместе (вместо 60₾)' }, price: { ka: '50₾', en: '50₾', ru: '50₾' } }
    ]
  },
  {
    title: { ka: 'სოციალური ქსელები', en: 'Social media', ru: 'Соцсети' },
    items: [
      { id: 'fb-page', amount: 10, name: { ka: 'Facebook გვერდის შექმნა და გამზადება (+ 1 პოსტი საჩუქრად)', en: 'Facebook page setup (+ 1 post as a gift)', ru: 'Создание и оформление страницы Facebook (+ 1 пост в подарок)' }, price: { ka: '10₾', en: '10₾', ru: '10₾' } },
      { id: 'ig-page', amount: 10, name: { ka: 'Instagram გვერდის შექმნა და გამზადება (+ 1 პოსტი საჩუქრად)', en: 'Instagram page setup (+ 1 post as a gift)', ru: 'Создание и оформление страницы Instagram (+ 1 пост в подарок)' }, price: { ka: '10₾', en: '10₾', ru: '10₾' } }
    ]
  },
  {
    title: { ka: 'ვებსაიტები', en: 'Websites', ru: 'Сайты' },
    items: [
      { id: 'site-build', amount: 50, from: true, name: { ka: 'ვებსაიტის აწყობა', en: 'Website build', ru: 'Создание сайта' }, price: { ka: '50₾-დან', en: 'from 50₾', ru: 'от 50₾' } },
      { id: 'domain', amount: 5, from: true, name: { ka: 'დომენი (ცალკე)', en: 'Domain (separate)', ru: 'Домен (отдельно)' }, price: { ka: '5₾-დან', en: 'from 5₾', ru: 'от 5₾' } },
      { id: 'menu-site', amount: 50, from: true, name: { ka: 'მენიუს საიტი (QR უფასოდ)', en: 'Menu website (QR code free)', ru: 'Сайт меню (QR-код бесплатно)' }, price: { ka: '50₾-დან', en: 'from 50₾', ru: 'от 50₾' } },
      { id: 'site-update', amount: 15, name: { ka: 'ერთჯერადი განახლება (1 ცვლილება)', en: 'One-off update (1 change)', ru: 'Разовое обновление (1 изменение)' }, price: { ka: '15₾', en: '15₾', ru: '15₾' } },
      { id: 'site-page', amount: 20, from: true, name: { ka: 'ახალი გვერდის/სექციის დამატება', en: 'New page/section', ru: 'Добавление страницы/раздела' }, price: { ka: '20₾-დან', en: 'from 20₾', ru: 'от 20₾' } },
      { id: 'site-redesign', amount: 50, from: true, name: { ka: 'დიზაინის სრული შეცვლა', en: 'Full redesign', ru: 'Полная смена дизайна' }, price: { ka: '50₾-დან', en: 'from 50₾', ru: 'от 50₾' } }
    ]
  },
  {
    title: { ka: 'დიზაინი და ფოტო', en: 'Design & photos', ru: 'Дизайн и фото' },
    items: [
      { id: 'logo', amount: 10, name: { ka: 'ბიზნესის ლოგო', en: 'Business logo', ru: 'Логотип бизнеса' }, price: { ka: '10₾', en: '10₾', ru: '10₾' } },
      { id: 'banner', amount: 5, from: true, name: { ka: 'ბანერი', en: 'Banner', ru: 'Баннер' }, price: { ka: '5₾-დან', en: 'from 5₾', ru: 'от 5₾' } },
      { id: 'photo-edit', amount: 3, from: true, name: { ka: 'ფოტოს დამუშავება (1 ფოტო)', en: 'Photo editing (1 photo)', ru: 'Обработка фото (1 фото)' }, price: { ka: '3₾-დან', en: 'from 3₾', ru: 'от 3₾' } }
    ]
  },
  {
    title: { ka: 'QR კოდები', en: 'QR codes', ru: 'QR-коды' },
    items: [
      { id: 'qr-wifi', amount: 5, name: { ka: 'Wi-Fi QR სტიკერი (კედელზე საკრავი)', en: 'Wi-Fi QR sticker (wall-mounted)', ru: 'Wi-Fi QR-наклейка (на стену)' }, price: { ka: '5₾', en: '5₾', ru: '5₾' } },
      { id: 'qr-vcard', amount: 5, name: { ka: 'ვიზიტკის QR (კონტაქტის შენახვა)', en: 'Business-card QR (save contact)', ru: 'QR-визитка (сохранение контакта)' }, price: { ka: '5₾', en: '5₾', ru: '5₾' } }
    ]
  },
  {
    title: { ka: 'WhatsApp და Google პოსტები', en: 'WhatsApp & Google posts', ru: 'WhatsApp и посты в Google' },
    items: [
      { id: 'wa-setup', amount: 30, name: { ka: 'WhatsApp Business-ის დაყენება (მისალმება, ავტო-პასუხები)', en: 'WhatsApp Business setup (greeting, auto-replies)', ru: 'Настройка WhatsApp Business (приветствие, автоответы)' }, price: { ka: '30₾', en: '30₾', ru: '30₾' } },
      { id: 'gpost-one', amount: 10, name: { ka: 'Google პოსტი (1 ცალი)', en: 'Google post (single)', ru: 'Пост в Google (1 шт.)' }, price: { ka: '10₾', en: '10₾', ru: '10₾' } }
    ]
  },
  {
    title: { ka: 'ყოველთვიური მომსახურება', en: 'Monthly services', ru: 'Ежемесячные услуги' },
    items: [
      { id: 'm-reviews', amount: 30, monthly: true, name: { ka: 'შეფასებებზე პასუხები (ინდივიდუალური პასუხი ყოველ შეფასებაზე)', en: 'Review replies (a personal reply to every review)', ru: 'Ответы на отзывы (личный ответ на каждый отзыв)' }, price: { ka: '30₾/თვე', en: '30₾/mo', ru: '30₾/мес' } },
      { id: 'm-posts', amount: 25, monthly: true, name: { ka: 'Google პოსტები (4 პოსტი თვეში)', en: 'Google posts (4 posts a month)', ru: 'Посты в Google (4 поста в месяц)' }, price: { ka: '25₾/თვე', en: '25₾/mo', ru: '25₾/мес' } },
      { id: 'm-care', amount: 25, monthly: true, name: { ka: 'საიტის მოვლა (განახლებები, შემოწმება, დომენის კონტროლი)', en: 'Website care (updates, checks, domain watch)', ru: 'Обслуживание сайта (обновления, проверка, контроль домена)' }, price: { ka: '25₾/თვე', en: '25₾/mo', ru: '25₾/мес' } }
    ],
    note: { ka: 'ცალ-ცალკე იყიდება, პაკეტის ფასდაკლების გარეშე.', en: 'Sold separately, no bundle discount.', ru: 'Продаются отдельно, без скидки за пакет.' }
  },
  {
    title: { ka: 'სასწრაფო გამოძახება', en: 'Emergency callout', ru: 'Срочный выезд' },
    items: [
      { id: 'call-day', amount: 20, name: { ka: 'გამოძახება 10:00–18:00', en: 'Callout 10:00–18:00', ru: 'Выезд 10:00–18:00' }, price: { ka: '20₾', en: '20₾', ru: '20₾' } },
      { id: 'call-247', amount: 30, name: { ka: 'გამოძახება 24/7', en: 'Callout 24/7', ru: 'Выезд 24/7' }, price: { ka: '30₾', en: '30₾', ru: '30₾' } }
    ],
    note: { ka: 'მარტივი გასწორება (30 წუთამდე) ფასში შედის. 30 წუთზე მეტი — სხვა ფასი, გასაკეთებელზეა დამოკიდებული.', en: 'A simple fix (up to 30 minutes) is included. Longer work is priced separately, depending on the job.', ru: 'Простое исправление (до 30 минут) включено. Более долгая работа оплачивается отдельно, в зависимости от задачи.' }
  },
  {
    title: { ka: 'VIP მომსახურება', en: 'VIP service', ru: 'VIP-обслуживание' },
    items: [
      { id: 'vip1', amount: 99, monthly: true, name: { ka: 'VIP 1 — 10:00–18:00, 10 ვიზიტამდე', en: 'VIP 1 — 10:00–18:00, up to 10 visits', ru: 'VIP 1 — 10:00–18:00, до 10 визитов' }, price: { ka: '99₾/თვე', en: '99₾/mo', ru: '99₾/мес' } },
      { id: 'vip2', amount: 149, monthly: true, name: { ka: 'VIP 2 — 24/7, 20 ვიზიტამდე', en: 'VIP 2 — 24/7, up to 20 visits', ru: 'VIP 2 — 24/7, до 20 визитов' }, price: { ka: '149₾/თვე', en: '149₾/mo', ru: '149₾/мес' } }
    ],
    note: { ka: 'მხოლოდ ახალციხეში. VIP 1-ით ზოგავთ 101₾-ს, VIP 2-ით — 451₾-ს თვეში.', en: 'Akhaltsikhe only. VIP 1 saves you 101₾ a month, VIP 2 saves 451₾.', ru: 'Только в Ахалцихе. VIP 1 экономит 101₾ в месяц, VIP 2 — 451₾.' }
  }
];

function serviceInCart(id) {
  var e = cart[id];
  return !!e && entryKind(e) === 'service' && entryQty(e) > 0;
}

/* One service row, rendered from the CURRENT cart state: an added service
   shows a "✓ in cart" tag next to its name and a "−" button; otherwise
   the row shows a "+" button. Used both at page render and for in-place
   updates when a service is toggled (no full page re-render). */
function serviceRowHtml(item) {
  var added = serviceInCart(item.id);
  var tag = added ? ' <span class="service-added-tag">✓ ' + esc(t('inCartTag')) + '</span>' : '';
  var btn = added
    ? '<button class="service-add is-added" type="button" data-toggle-service="' + item.id + '" aria-label="' + esc(t('remove')) + '">−</button>'
    : '<button class="service-add" type="button" data-toggle-service="' + item.id + '" aria-label="' + esc(t('addToCart')) + '">+</button>';
  return '<span>' + esc(item.name[lang]) + tag + '</span>' +
    '<span class="service-side"><strong>' + esc(item.price[lang]) + '</strong>' + btn + '</span>';
}

/* Re-render every visible service row in place from the current cart
   state — keeps toggle states consistent after adds, removes and the
   automatic bundle-exclusivity removals. */
function refreshServiceRows() {
  var rows = document.querySelectorAll('[data-service-row]');
  for (var i = 0; i < rows.length; i++) {
    var svc = serviceById(rows[i].getAttribute('data-service-row'));
    if (svc) rows[i].innerHTML = serviceRowHtml(svc);
  }
}

function servicesGroupsHtml() {
  var html = '';
  for (var gi = 0; gi < SERVICES.length; gi++) {
    var g = SERVICES[gi];
    html += '<div class="service-group"><h3>' + esc(g.title[lang]) + '</h3><ul class="service-list">';
    for (var ii = 0; ii < g.items.length; ii++) {
      var item = g.items[ii];
      html += '<li data-service-row="' + item.id + '">' + serviceRowHtml(item) + '</li>';
    }
    html += '</ul>';
    if (g.note) html += '<p class="service-note">' + esc(g.note[lang]) + '</p>';
    html += '</div>';
  }
  return html;
}

var I18N = {
  ka: {
    siteTitle: 'locallink — NFC პროდუქტები შენი ბიზნესისთვის',
    topbar: 'უფასო მიწოდება და მონტაჟი ახალციხეში',
    navHome: 'მთავარი',
    navProducts: 'პროდუქტები',
    navAbout: 'ჩვენს შესახებ',
    navContact: 'კონტაქტი',
    searchPlaceholder: 'პროდუქტების ძიება…',
    heroTitle: 'ჭკვიანი გადაწყვეტილებები შენი ბიზნესისთვის.',
    heroSubtitle: 'NFC პროდუქტები, რომლებიც შენს ბიზნესს ამარტივებს.',
    heroCta: 'პროდუქტების ნახვა',
    catalogTitle: 'პროდუქტები',
    catalogSub: 'სტენდები, ბარათები და სტიკერები — ტელეფონის ერთი შეხებით მომხმარებელი თქვენს Google შეფასების გვერდზე გადადის.',
    details: 'დეტალურად',
    addToCart: 'კალათაში დამატება',
    freeDelivery: 'უფასო მიწოდება',
    stockIn: 'მარაგშია: {n} ცალი',
    stockOut: 'მარაგი ამოწურულია',
    stockIncoming: 'მალე დაემატება: {n} ცალი',
    noResults: 'ვერაფერი მოიძებნა.',
    whyTitle: 'რატომ ჩვენ?',
    why1t: 'უფასო მიწოდება და მონტაჟი',
    why1d: 'ახალციხეში მიწოდება და მონტაჟი უფასოა.',
    why2t: 'გადახდა მიღებისას',
    why2d: 'იხდით ნაღდი ანგარიშსწორებით, პროდუქტის მიღებისას.',
    why3t: 'ერთი შეხება',
    why3d: 'მომხმარებელი ტელეფონს ადებს პროდუქტს და იხსნება Google შეფასების გვერდი.',
    why4t: 'დახმარება მონტაჟში',
    why4d: 'დაგეხმარებით შეფასების გვერდის დაკავშირებასა და სტენდის დამონტაჟებაში.',
    deliveryTitle: 'მიწოდება და მონტაჟი',
    deliveryText: 'ახალციხეში მიწოდება და მონტაჟი უფასოა. შეკვეთას მოგიტანთ და ადგილზე დაგიმონტაჟებთ.',
    navServices: 'სერვისები',
    servicesTitle: 'სერვისები და ფასები',
    servicesText: 'სერვისები თქვენი ბიზნესისთვის — Google პროფილი, საიტები, სოცქსელები, QR კოდები და ყოველთვიური მოვლა. დეტალებისთვის დაგვიკავშირდით.',
    servicesWhatsApp: 'WhatsApp-ით დაკავშირება',
    servicesCall: 'დარეკვა',
    servicesWaText: 'გამარჯობა, სერვისები მაინტერესებს.',
    aboutTitle: 'ჩვენს შესახებ',
    aboutText: 'locallink — NFC პროდუქტები ბიზნესისთვის: სტენდები, ბარათები და სტიკერები, რომლებიც მომხმარებელს Google შეფასების გვერდზე გადასვლას უმარტივებს.',
    contactTitle: 'კონტაქტი',
    contactPhone: 'ტელეფონი',
    contactEmail: 'ელფოსტა',
    contactSite: 'ვებსაიტი',
    footerAbout: 'NFC პროდუქტები ბიზნესისთვის — სტენდები, ბარათები და სტიკერები Google შეფასებებისთვის.',
    footerNav: 'ნავიგაცია',
    footerContact: 'კონტაქტი',
    footerTerms: 'მიწოდება და დაბრუნება',
    footerTermsText: 'ახალციხეში მიწოდება და მონტაჟი უფასოა. გადახდა — ნაღდი ანგარიშსწორებით, მიღებისას. დაბრუნების საკითხებზე დაგვიკავშირდით.',
    copyright: '© 2026 locallink. ყველა უფლება დაცულია.',
    backToProducts: '← პროდუქტებზე დაბრუნება',
    quantity: 'რაოდენობა',
    cartTitle: 'კალათა',
    emptyCart: 'თქვენი კალათა ცარიელია',
    viewProducts: 'პროდუქტების ნახვა',
    total: 'ჯამი',
    totalOnce: 'ერთჯერადი ჯამი',
    totalMonthly: 'ყოველთვიური ჯამი',
    fromPriceNote: 'საბოლოო ფასი შეთანხმებით.',
    toastServiceAdded: 'სერვისი დაემატა კალათაში',
    inCartTag: 'კალათაშია',
    monthlySuffix: '/თვე',
    optionalHint: '(არასავალდებულო)',
    remove: 'წაშლა',
    formTitle: 'შეკვეთის გაფორმება',
    fName: 'სახელი და გვარი',
    fPhone: 'ტელეფონის ნომერი',
    fCity: 'ქალაქი',
    fAddress: 'მისამართი',
    fComment: 'კომენტარი (არასავალდებულო)',
    fCommentShort: 'კომენტარი',
    cashNote: 'გადახდა ხდება ნაღდი ანგარიშსწორებით.',
    sendChoice: 'როგორ გსურთ შეკვეთის გაგზავნა?',
    submitEmail: 'გაგზავნა ელფოსტით',
    submitWhatsApp: 'გაგზავნა WhatsApp-ით',
    sending: 'იგზავნება…',
    sendError: 'შეკვეთის გაგზავნა ვერ მოხერხდა. გთხოვთ, სცადოთ WhatsApp-ით ან ცოტა მოგვიანებით.',
    toastAdded: 'პროდუქტი დაემატა კალათაში',
    popupTitle: 'შეკვეთა მიღებულია',
    popupBody: 'გმადლობთ! შეკვეთა WhatsApp-ით გაიგზავნა, მალე დაგიკავშირდებით.',
    popupBodyEmail: 'გმადლობთ! შეკვეთა ელფოსტით გაიგზავნა, მალე დაგიკავშირდებით.',
    popupClose: 'დახურვა',
    orderTitle: 'ახალი შეკვეთა — locallink',
    orderPayment: 'გადახდა: ნაღდი ანგარიშსწორება'
  },
  en: {
    siteTitle: 'locallink — NFC products for your business',
    topbar: 'Free delivery and installation in Akhaltsikhe',
    navHome: 'Home',
    navProducts: 'Products',
    navAbout: 'About us',
    navContact: 'Contact',
    searchPlaceholder: 'Search products…',
    heroTitle: 'Smart solutions for your business.',
    heroSubtitle: 'NFC products that make your business simpler.',
    heroCta: 'View products',
    catalogTitle: 'Products',
    catalogSub: 'Stands, cards and stickers — one tap with a phone takes customers to your Google review page.',
    details: 'Details',
    addToCart: 'Add to cart',
    freeDelivery: 'Free delivery',
    stockIn: 'In stock: {n} pcs',
    stockOut: 'Out of stock',
    stockIncoming: 'Coming soon: {n} pcs',
    noResults: 'Nothing found.',
    whyTitle: 'Why us?',
    why1t: 'Free delivery and installation',
    why1d: 'Delivery and installation in Akhaltsikhe are free.',
    why2t: 'Pay on delivery',
    why2d: 'You pay in cash when you receive the product.',
    why3t: 'One tap',
    why3d: 'Customers tap the product with a phone and the Google review page opens.',
    why4t: 'Help with setup',
    why4d: 'We help connect your review page and install the stand.',
    deliveryTitle: 'Delivery and installation',
    deliveryText: 'Delivery and installation in Akhaltsikhe are free. We bring your order and install it on site.',
    navServices: 'Services',
    servicesTitle: 'Services & prices',
    servicesText: 'Services for your business — Google profile, websites, social media, QR codes and monthly care. Contact us for details.',
    servicesWhatsApp: 'Contact via WhatsApp',
    servicesCall: 'Call',
    servicesWaText: 'Hello, I am interested in your services.',
    aboutTitle: 'About us',
    aboutText: 'locallink — NFC products for businesses: stands, cards and stickers that make it easy for customers to reach your Google review page.',
    contactTitle: 'Contact',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactSite: 'Website',
    footerAbout: 'NFC products for businesses — stands, cards and stickers for Google reviews.',
    footerNav: 'Navigation',
    footerContact: 'Contact',
    footerTerms: 'Delivery and returns',
    footerTermsText: 'Delivery and installation in Akhaltsikhe are free. Payment is cash on delivery. For returns, please contact us.',
    copyright: '© 2026 locallink. All rights reserved.',
    backToProducts: '← Back to products',
    quantity: 'Quantity',
    cartTitle: 'Cart',
    emptyCart: 'Your cart is empty',
    viewProducts: 'View products',
    total: 'Total',
    totalOnce: 'One-time total',
    totalMonthly: 'Monthly total',
    fromPriceNote: 'Final price to be agreed.',
    toastServiceAdded: 'Service added to cart',
    inCartTag: 'In cart',
    monthlySuffix: '/mo',
    optionalHint: '(optional)',
    remove: 'Remove',
    formTitle: 'Checkout',
    fName: 'Full name',
    fPhone: 'Phone number',
    fCity: 'City',
    fAddress: 'Address',
    fComment: 'Comment (optional)',
    fCommentShort: 'Comment',
    cashNote: 'Payment is cash on delivery.',
    sendChoice: 'How would you like to send your order?',
    submitEmail: 'Send by email',
    submitWhatsApp: 'Send via WhatsApp',
    sending: 'Sending…',
    sendError: 'The order could not be sent. Please try WhatsApp or try again later.',
    toastAdded: 'Product added to cart',
    popupTitle: 'Order received',
    popupBody: 'Thank you! Your order was sent via WhatsApp. We will contact you soon.',
    popupBodyEmail: 'Thank you! Your order was sent by email. We will contact you soon.',
    popupClose: 'Close',
    orderTitle: 'New order — locallink',
    orderPayment: 'Payment: cash on delivery'
  },
  ru: {
    siteTitle: 'locallink — NFC-продукты для вашего бизнеса',
    topbar: 'Бесплатная доставка и установка в Ахалцихе',
    navHome: 'Главная',
    navProducts: 'Продукты',
    navAbout: 'О нас',
    navContact: 'Контакты',
    searchPlaceholder: 'Поиск продуктов…',
    heroTitle: 'Умные решения для вашего бизнеса.',
    heroSubtitle: 'NFC-продукты, которые упрощают ваш бизнес.',
    heroCta: 'Смотреть продукты',
    catalogTitle: 'Продукты',
    catalogSub: 'Стенды, карты и наклейки — одно касание телефоном, и клиент попадает на страницу отзывов в Google.',
    details: 'Подробнее',
    addToCart: 'В корзину',
    freeDelivery: 'Бесплатная доставка',
    stockIn: 'В наличии: {n} шт.',
    stockOut: 'Нет в наличии',
    stockIncoming: 'Скоро поступит: {n} шт.',
    noResults: 'Ничего не найдено.',
    whyTitle: 'Почему мы?',
    why1t: 'Бесплатная доставка и установка',
    why1d: 'Доставка и установка в Ахалцихе бесплатны.',
    why2t: 'Оплата при получении',
    why2d: 'Вы платите наличными при получении товара.',
    why3t: 'Одно касание',
    why3d: 'Клиент прикладывает телефон — и открывается страница отзывов в Google.',
    why4t: 'Помощь с установкой',
    why4d: 'Поможем подключить страницу отзывов и установить стенд.',
    deliveryTitle: 'Доставка и установка',
    deliveryText: 'В Ахалцихе доставка и установка бесплатны. Мы привезём заказ и установим его на месте.',
    navServices: 'Услуги',
    servicesTitle: 'Услуги и цены',
    servicesText: 'Услуги для вашего бизнеса — профиль в Google, сайты, соцсети, QR-коды и ежемесячное обслуживание. Свяжитесь с нами для деталей.',
    servicesWhatsApp: 'Связаться в WhatsApp',
    servicesCall: 'Позвонить',
    servicesWaText: 'Здравствуйте, меня интересуют ваши услуги.',
    aboutTitle: 'О нас',
    aboutText: 'locallink — NFC-продукты для бизнеса: стенды, карты и наклейки, с которыми клиенты легко переходят на страницу отзывов в Google.',
    contactTitle: 'Контакты',
    contactPhone: 'Телефон',
    contactEmail: 'Эл. почта',
    contactSite: 'Сайт',
    footerAbout: 'NFC-продукты для бизнеса — стенды, карты и наклейки для отзывов в Google.',
    footerNav: 'Навигация',
    footerContact: 'Контакты',
    footerTerms: 'Доставка и возврат',
    footerTermsText: 'Доставка и установка в Ахалцихе бесплатны. Оплата — наличными при получении. По вопросам возврата свяжитесь с нами.',
    copyright: '© 2026 locallink. Все права защищены.',
    backToProducts: '← Назад к продуктам',
    quantity: 'Количество',
    cartTitle: 'Корзина',
    emptyCart: 'Ваша корзина пуста',
    viewProducts: 'Смотреть продукты',
    total: 'Итого',
    totalOnce: 'Разовый итог',
    totalMonthly: 'Ежемесячный итог',
    fromPriceNote: 'Итоговая цена — по договорённости.',
    toastServiceAdded: 'Услуга добавлена в корзину',
    inCartTag: 'В корзине',
    monthlySuffix: '/мес',
    optionalHint: '(необязательно)',
    remove: 'Удалить',
    formTitle: 'Оформление заказа',
    fName: 'Имя и фамилия',
    fPhone: 'Номер телефона',
    fCity: 'Город',
    fAddress: 'Адрес',
    fComment: 'Комментарий (необязательно)',
    fCommentShort: 'Комментарий',
    cashNote: 'Оплата — наличными при получении.',
    sendChoice: 'Как вы хотите отправить заказ?',
    submitEmail: 'Отправить по почте',
    submitWhatsApp: 'Отправить через WhatsApp',
    sending: 'Отправка…',
    sendError: 'Не удалось отправить заказ. Попробуйте WhatsApp или повторите попытку позже.',
    toastAdded: 'Товар добавлен в корзину',
    popupTitle: 'Заказ получен',
    popupBody: 'Спасибо! Ваш заказ отправлен через WhatsApp. Мы скоро свяжемся с вами.',
    popupBodyEmail: 'Спасибо! Ваш заказ отправлен по почте. Мы скоро свяжемся с вами.',
    popupClose: 'Закрыть',
    orderTitle: 'Новый заказ — locallink',
    orderPayment: 'Оплата: наличными при получении'
  }
};

/* ---------- state ---------- */

function storeGet(key) {
  try { return window.localStorage.getItem(key); } catch (e) { return null; }
}
function storeSet(key, value) {
  try { window.localStorage.setItem(key, value); } catch (e) { /* private mode */ }
}

var lang = storeGet('locallink-lang') || 'ka';
if (!I18N[lang]) lang = 'ka';

var cart = {};
try { cart = JSON.parse(storeGet('locallink-cart') || '{}') || {}; } catch (e) { cart = {}; }
/* Cart entries are { kind: 'product' | 'service', qty: n }, keyed by product
   slug or service id. Old saved carts stored a bare number per slug — those
   are products, normalized here so old and new formats behave the same. */
for (var ck in cart) {
  var cv = cart[ck];
  if (typeof cv === 'number') {
    cart[ck] = { kind: 'product', qty: cv };
  } else if (cv && typeof cv === 'object' && typeof cv.qty === 'number') {
    if (cv.kind !== 'service') cv.kind = 'product';
  } else {
    delete cart[ck];
  }
}
var query = '';
var stockData = null; /* null = stock API unreachable or not loaded yet: no stock lines shown */

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.ka[key] || key;
}
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function price(n) { return n + '₾'; }
function productBySlug(slug) {
  for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].slug === slug) return PRODUCTS[i];
  return null;
}
function serviceById(id) {
  for (var gi = 0; gi < SERVICES.length; gi++) {
    var items = SERVICES[gi].items;
    for (var ii = 0; ii < items.length; ii++) if (items[ii].id === id) return items[ii];
  }
  return null;
}
function entryQty(e) {
  if (typeof e === 'number') return e;
  return (e && typeof e.qty === 'number') ? e.qty : 0;
}
function entryKind(e) {
  return (e && typeof e === 'object' && e.kind === 'service') ? 'service' : 'product';
}
function saveCart() { storeSet('locallink-cart', JSON.stringify(cart)); }
function cartCount() {
  var n = 0;
  for (var k in cart) n += entryQty(cart[k]);
  return n;
}
/* Split totals: one-time (products + one-time services) vs monthly.
   hasFrom is true when a "from" price service is in the cart. */
function cartTotals() {
  var once = 0, monthly = 0, hasMonthly = false, hasFrom = false;
  for (var k in cart) {
    var qty = entryQty(cart[k]);
    if (qty <= 0) continue;
    if (entryKind(cart[k]) === 'service') {
      var svc = serviceById(k);
      if (!svc) continue;
      if (svc.monthly) { monthly += svc.amount * qty; hasMonthly = true; }
      else once += svc.amount * qty;
      if (svc.from) hasFrom = true;
    } else {
      var p = productBySlug(k);
      if (p) once += p.price * qty;
    }
  }
  return { once: once, monthly: monthly, hasMonthly: hasMonthly, hasFrom: hasFrom };
}
function cartProductKeys() {
  return Object.keys(cart).filter(function (k) { return entryQty(cart[k]) > 0 && entryKind(cart[k]) === 'product' && productBySlug(k); });
}
function cartServiceKeys() {
  return Object.keys(cart).filter(function (k) { return entryQty(cart[k]) > 0 && entryKind(cart[k]) === 'service' && serviceById(k); });
}
/* Localized price display for a service at a given quantity. Reuses the
   approved per-language price string, replacing its number with the
   quantity total — so "50₾-დან" / "from 50₾" / "от 50₾" stay correct.
   useLang overrides the current language (the inbox email is Georgian). */
function servicePriceForQty(svc, qty, useLang) {
  var l = useLang || lang;
  var base = svc.price[l] || svc.price.ka;
  var total = svc.amount * qty;
  if (qty === 1) return base;
  if (/\d/.test(base)) return base.replace(/\d+/, String(total));
  return base;
}

/* ---------- chrome (topbar, nav, footer, badge) ---------- */

function renderChrome() {
  document.documentElement.lang = lang;
  document.title = t('siteTitle');
  document.getElementById('topbar-text').textContent = t('topbar');

  var nav = document.getElementById('main-nav');
  nav.innerHTML =
    '<a href="#/" data-section="top">' + esc(t('navHome')) + '</a>' +
    '<a href="#/" data-section="products">' + esc(t('navProducts')) + '</a>' +
    '<a href="#/" data-section="services">' + esc(t('navServices')) + '</a>' +
    '<a href="#/" data-section="about">' + esc(t('navAbout')) + '</a>' +
    '<a href="#/" data-section="contact">' + esc(t('navContact')) + '</a>';

  var search = document.getElementById('search-input');
  search.placeholder = t('searchPlaceholder');
  search.setAttribute('aria-label', t('searchPlaceholder'));

  var langs = [['ka', 'GE'], ['en', 'EN'], ['ru', 'RU']];
  var sw = document.getElementById('lang-switch');
  sw.innerHTML = langs.map(function (l) {
    return '<button type="button" data-lang="' + l[0] + '"' +
      (l[0] === lang ? ' class="active" aria-pressed="true"' : '') + '>' + l[1] + '</button>';
  }).join('');

  document.getElementById('cart-link').setAttribute('aria-label', t('cartTitle'));
  updateBadge();
  renderFooter();
}

function renderFooter() {
  document.getElementById('footer').innerHTML =
    '<div class="container">' +
      '<div class="footer-grid">' +
        '<div>' +
          '<a class="brand" href="#/"><img src="images/logo.png" alt="locallink" width="36" height="36"><span class="brand-name">locallink</span></a>' +
          '<p>' + esc(t('footerAbout')) + '</p>' +
          '<div class="social-row">' +
            '<a href="' + FB_URL + '" target="_blank" rel="noopener" aria-label="Facebook" title="Facebook">' +
              '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
            '</a>' +
            '<a href="' + WA_URL + '" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">' +
              '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2z"/><path d="M9 8.6c.5-1 1.2-1 1.6-.5l.8 1.1c.3.4.2.9-.2 1.2l-.5.4c.6 1.2 1.5 2.1 2.7 2.7l.4-.5c.3-.4.8-.5 1.2-.2l1.1.8c.5.4.5 1.1-.5 1.6-2.6 1.3-7.9-4-6.6-6.6z" fill="currentColor" stroke="none"/></svg>' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<h4>' + esc(t('footerNav')) + '</h4>' +
          '<ul>' +
            '<li><a href="#/" data-section="top">' + esc(t('navHome')) + '</a></li>' +
            '<li><a href="#/" data-section="products">' + esc(t('navProducts')) + '</a></li>' +
            '<li><a href="#/" data-section="about">' + esc(t('navAbout')) + '</a></li>' +
            '<li><a href="#/" data-section="contact">' + esc(t('navContact')) + '</a></li>' +
            '<li><a href="#/cart">' + esc(t('cartTitle')) + '</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h4>' + esc(t('footerContact')) + '</h4>' +
          '<ul>' +
            '<li><a href="' + PHONE_LINK + '">' + esc(PHONE_DISPLAY) + '</a></li>' +
            '<li><a href="mailto:' + EMAIL + '">' + esc(EMAIL) + '</a></li>' +
            '<li><a href="' + SITE_URL + '" target="_blank" rel="noopener">locallink.store</a></li>' +
          '</ul>' +
          '<h4 style="margin-top:18px">' + esc(t('footerTerms')) + '</h4>' +
          '<p>' + esc(t('footerTermsText')) + '</p>' +
        '</div>' +
      '</div>' +
      '<p class="copyright">' + esc(t('copyright')) + '</p>' +
    '</div>';
}

function updateBadge() {
  var badge = document.getElementById('cart-badge');
  var n = cartCount();
  badge.textContent = n;
  badge.hidden = n === 0;
}

/* ---------- toast & popup ---------- */

var toastTimer = null;
function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toast.hidden = true; }, 2200);
}
function showPopup(bodyKey) {
  document.getElementById('popup-title').textContent = t('popupTitle');
  document.getElementById('popup-body').textContent = t(bodyKey || 'popupBody');
  document.getElementById('popup-close').textContent = t('popupClose');
  document.getElementById('popup').hidden = false;
}
function hidePopup() { document.getElementById('popup').hidden = true; }

/* ---------- catalog ---------- */

function cardHtml(p) {
  return '<article class="card">' +
    '<a class="card-media" href="#/product/' + p.slug + '">' +
      '<img src="' + p.img + '" alt="' + esc(p.name[lang]) + '" loading="lazy">' +
      '<span class="badge">' + esc(t('freeDelivery')) + '</span>' +
    '</a>' +
    '<div class="card-body">' +
      '<h3><a href="#/product/' + p.slug + '">' + esc(p.name[lang]) + '</a></h3>' +
      '<p class="price">' + price(p.price) + '</p>' +
      '<p class="desc">' + esc(p.desc[lang]) + '</p>' +
      '<div class="stock-lines" data-stock-for="' + p.slug + '"></div>' +
      '<div class="card-actions">' +
        '<a class="btn btn-outline" href="#/product/' + p.slug + '">' + esc(t('details')) + '</a>' +
        '<button class="btn" type="button" data-add="' + p.slug + '">' + esc(t('addToCart')) + '</button>' +
      '</div>' +
    '</div>' +
  '</article>';
}

function filteredProducts() {
  if (!query) return PRODUCTS;
  return PRODUCTS.filter(function (p) {
    var hay = (p.name[lang] + ' ' + p.desc[lang]).toLowerCase();
    return hay.indexOf(query) !== -1;
  });
}

function renderCatalog() {
  var grid = document.getElementById('catalog-grid');
  if (!grid) return;
  var list = filteredProducts();
  grid.innerHTML = list.length
    ? list.map(cardHtml).join('')
    : '<p class="empty-results">' + esc(t('noResults')) + '</p>';
  applyStock();
}

/* ---------- stock (Cloudflare Worker API, display only) ---------- */

function loadStock() {
  if (typeof fetch !== 'function') return;
  fetch(STOCK_API_URL, { headers: { 'Accept': 'application/json' } }).then(function (res) {
    if (!res.ok) throw new Error('stock http ' + res.status);
    return res.json();
  }).then(function (data) {
    if (data && typeof data === 'object') {
      stockData = data;
      applyStock();
    }
  }).catch(function () { /* stock lines stay hidden — graceful degradation */ });
}

function stockLinesHtml(slug) {
  if (!stockData) return '';
  var e = stockData[slug];
  if (!e || typeof e !== 'object') return '';
  var s = (typeof e.stock === 'number' && isFinite(e.stock)) ? Math.max(0, Math.floor(e.stock)) : null;
  var inc = (typeof e.incoming === 'number' && isFinite(e.incoming)) ? Math.max(0, Math.floor(e.incoming)) : null;
  var out = '';
  if (s !== null) {
    out += s > 0
      ? '<span class="stock-line">' + esc(t('stockIn').replace('{n}', String(s))) + '</span>'
      : '<span class="stock-line stock-line-out">' + esc(t('stockOut')) + '</span>';
  }
  if (inc !== null && inc > 0) {
    out += '<span class="stock-line">' + esc(t('stockIncoming').replace('{n}', String(inc))) + '</span>';
  }
  return out;
}

function applyStock() {
  var els = document.querySelectorAll('[data-stock-for]');
  for (var i = 0; i < els.length; i++) {
    els[i].innerHTML = stockLinesHtml(els[i].getAttribute('data-stock-for'));
  }
}

/* ---------- views ---------- */

function homeView() {
  return '<section class="hero" id="top"><div class="container">' +
      '<h1>' + esc(t('heroTitle')) + '</h1>' +
      '<p>' + esc(t('heroSubtitle')) + '</p>' +
      '<a class="btn btn-large" style="width:auto" href="#/" data-section="products">' + esc(t('heroCta')) + '</a>' +
    '</div></section>' +

    '<section class="section" id="products"><div class="container">' +
      '<h2>' + esc(t('catalogTitle')) + '</h2>' +
      '<p class="section-sub">' + esc(t('catalogSub')) + '</p>' +
      '<div class="catalog-grid" id="catalog-grid"></div>' +
    '</div></section>' +

    '<section class="section section-alt"><div class="container">' +
      '<h2>' + esc(t('whyTitle')) + '</h2>' +
      '<div class="why-grid">' +
        '<div class="why-item"><h3>' + esc(t('why1t')) + '</h3><p>' + esc(t('why1d')) + '</p></div>' +
        '<div class="why-item"><h3>' + esc(t('why2t')) + '</h3><p>' + esc(t('why2d')) + '</p></div>' +
        '<div class="why-item"><h3>' + esc(t('why3t')) + '</h3><p>' + esc(t('why3d')) + '</p></div>' +
        '<div class="why-item"><h3>' + esc(t('why4t')) + '</h3><p>' + esc(t('why4d')) + '</p></div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="container">' +
      '<div class="delivery-box">' +
        '<div class="delivery-icon" aria-hidden="true">🚚</div>' +
        '<div><h2>' + esc(t('deliveryTitle')) + '</h2><p>' + esc(t('deliveryText')) + '</p></div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section section-alt" id="services"><div class="container">' +
      '<div class="services-head"><h2>' + esc(t('servicesTitle')) + '</h2><p>' + esc(t('servicesText')) + '</p></div>' +
      '<div class="services-groups">' + servicesGroupsHtml() + '</div>' +
      '<div class="services-actions">' +
        '<a class="btn" style="width:auto" href="' + WA_URL + '?text=' + encodeURIComponent(t('servicesWaText')) + '" target="_blank" rel="noopener">' + esc(t('servicesWhatsApp')) + '</a>' +
        '<a class="btn btn-outline" style="width:auto" href="' + PHONE_LINK + '">' + esc(t('servicesCall')) + '</a>' +
      '</div>' +
    '</div></section>' +

    '<section class="section" id="about"><div class="container"><div class="split">' +
      '<div><h2>' + esc(t('aboutTitle')) + '</h2><p>' + esc(t('aboutText')) + '</p></div>' +
      '<div id="contact"><h2>' + esc(t('contactTitle')) + '</h2>' +
        '<ul class="contact-list">' +
          '<li><span>' + esc(t('contactPhone')) + '</span><a href="' + PHONE_LINK + '">' + esc(PHONE_DISPLAY) + '</a></li>' +
          '<li><span>' + esc(t('contactEmail')) + '</span><a href="mailto:' + EMAIL + '">' + esc(EMAIL) + '</a></li>' +
          '<li><span>' + esc(t('contactSite')) + '</span><a href="' + SITE_URL + '" target="_blank" rel="noopener">locallink.store</a></li>' +
        '</ul>' +
      '</div>' +
    '</div></div></section>';
}

function productView(slug) {
  var idx = -1;
  for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].slug === slug) idx = i;
  if (idx === -1) return homeView();
  var p = PRODUCTS[idx];
  var flip = idx % 2 === 1 ? ' flip' : '';
  return '<div class="page"><div class="container">' +
    '<a class="back-link" href="#/">' + esc(t('backToProducts')) + '</a>' +
    '<div class="product-grid' + flip + '">' +
      '<div class="p-media"><img src="' + p.img + '" alt="' + esc(p.name[lang]) + '"></div>' +
      '<div class="p-info">' +
        '<h1>' + esc(p.name[lang]) + '</h1>' +
        '<p class="price">' + price(p.price) + '</p>' +
        '<p class="desc">' + esc(p.desc[lang]) + '</p>' +
        '<div class="stock-lines" data-stock-for="' + p.slug + '"></div>' +
        '<span class="badge badge-static">' + esc(t('freeDelivery')) + '</span>' +
        '<div class="qty-row"><span>' + esc(t('quantity')) + '</span>' +
          '<div class="qty">' +
            '<button type="button" data-qty-dec aria-label="−">−</button>' +
            '<span id="qty-val">1</span>' +
            '<button type="button" data-qty-inc aria-label="+">+</button>' +
          '</div>' +
        '</div>' +
        '<button class="btn btn-large" type="button" data-add="' + p.slug + '" data-add-qty="1">' + esc(t('addToCart')) + '</button>' +
      '</div>' +
    '</div>' +
  '</div></div>';
}

function cartView() {
  var pKeys = cartProductKeys();
  var sKeys = cartServiceKeys();
  if (!pKeys.length && !sKeys.length) {
    return '<div class="page"><div class="container"><div class="empty-cart">' +
      '<div class="empty-icon" aria-hidden="true">🛒</div>' +
      '<p>' + esc(t('emptyCart')) + '</p>' +
      '<a class="btn" href="#/" data-section="products">' + esc(t('viewProducts')) + '</a>' +
    '</div></div></div>';
  }
  var mixed = pKeys.length > 0 && sKeys.length > 0;
  var totals = cartTotals();
  var itemsHtml = '';
  if (pKeys.length) {
    if (mixed) itemsHtml += '<h2 class="cart-section-title">' + esc(t('catalogTitle')) + '</h2>';
    itemsHtml += pKeys.map(function (slug) {
      var p = productBySlug(slug);
      var qty = entryQty(cart[slug]);
      return '<div class="cart-row">' +
        '<a href="#/product/' + p.slug + '"><img src="' + p.img + '" alt="' + esc(p.name[lang]) + '"></a>' +
        '<div>' +
          '<h3><a href="#/product/' + p.slug + '">' + esc(p.name[lang]) + '</a></h3>' +
          '<p class="unit">' + price(p.price) + '</p>' +
          '<div class="qty qty-sm">' +
            '<button type="button" data-cart-dec="' + p.slug + '" aria-label="−">−</button>' +
            '<span>' + qty + '</span>' +
            '<button type="button" data-cart-inc="' + p.slug + '" aria-label="+">+</button>' +
          '</div>' +
          '<button class="remove-btn" type="button" data-cart-remove="' + p.slug + '">' + esc(t('remove')) + '</button>' +
        '</div>' +
        '<div class="line-total">' + price(p.price * qty) + '</div>' +
      '</div>';
    }).join('');
  }
  if (sKeys.length) {
    /* The services heading shows whenever any service is in the cart,
       including services-only carts. Products-only carts keep no heading. */
    itemsHtml += '<h2 class="cart-section-title">' + esc(t('navServices')) + '</h2>';
    itemsHtml += sKeys.map(function (id) {
      var svc = serviceById(id);
      var qty = entryQty(cart[id]);
      var qtyHtml = '';
      if (id === 'photo-edit') {
        qtyHtml = '<div class="qty qty-sm">' +
          '<button type="button" data-cart-dec="' + id + '" aria-label="−">−</button>' +
          '<span>' + qty + '</span>' +
          '<button type="button" data-cart-inc="' + id + '" aria-label="+">+</button>' +
        '</div>';
      }
      return '<div class="cart-row cart-row-service">' +
        '<div>' +
          '<h3>' + esc(svc.name[lang]) + '</h3>' +
          '<p class="unit">' + esc(servicePriceForQty(svc, 1)) + '</p>' +
          qtyHtml +
          '<button class="remove-btn" type="button" data-cart-remove="' + id + '">' + esc(t('remove')) + '</button>' +
        '</div>' +
        '<div class="line-total">' + esc(servicePriceForQty(svc, qty)) + '</div>' +
      '</div>';
    }).join('');
  }
  var totalsHtml = '';
  if (!sKeys.length) {
    totalsHtml = '<div class="cart-total-row"><span>' + esc(t('total')) + '</span><span>' + price(totals.once) + '</span></div>';
  } else {
    if (totals.once > 0 || !totals.hasMonthly) {
      totalsHtml += '<div class="cart-total-row"><span>' + esc(t('totalOnce')) + '</span><span>' + price(totals.once) + '</span></div>';
    }
    if (totals.hasMonthly) {
      totalsHtml += '<div class="cart-total-row"><span>' + esc(t('totalMonthly')) + '</span><span>' + price(totals.monthly) + esc(t('monthlySuffix')) + '</span></div>';
    }
    if (totals.hasFrom) {
      totalsHtml += '<p class="from-note">' + esc(t('fromPriceNote')) + '</p>';
    }
  }
  /* City/address are required only when products are in the cart — a
     services-only order needs no delivery address. */
  var hasProducts = pKeys.length > 0;
  var reqAttr = hasProducts ? ' required' : '';
  var optSuffix = hasProducts ? '' : ' ' + esc(t('optionalHint'));

  return '<div class="page"><div class="container">' +
    '<h1 class="page-title">' + esc(t('cartTitle')) + '</h1>' +
    '<div class="cart-layout">' +
      '<div class="cart-items">' + itemsHtml + totalsHtml + '</div>' +
      '<form class="order-form" id="order-form" novalidate>' +
        '<h2>' + esc(t('formTitle')) + '</h2>' +
        '<input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden">' +
        '<div class="field"><label for="f-name">' + esc(t('fName')) + '</label><input id="f-name" name="name" type="text" autocomplete="name" required></div>' +
        '<div class="field"><label for="f-phone">' + esc(t('fPhone')) + '</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required></div>' +
        '<div class="field"><label for="f-city">' + esc(t('fCity')) + optSuffix + '</label><input id="f-city" name="city" type="text" autocomplete="address-level2"' + reqAttr + '></div>' +
        '<div class="field"><label for="f-address">' + esc(t('fAddress')) + optSuffix + '</label><input id="f-address" name="address" type="text" autocomplete="street-address"' + reqAttr + '></div>' +
        '<div class="field"><label for="f-comment">' + esc(t('fComment')) + '</label><textarea id="f-comment" name="comment" rows="3"></textarea></div>' +
        '<p class="cash-note">' + esc(t('cashNote')) + '</p>' +
        '<p class="send-choice-label">' + esc(t('sendChoice')) + '</p>' +
        '<div class="send-choice">' +
          '<button class="btn btn-large" type="submit" data-send="email">' + esc(t('submitEmail')) + '</button>' +
          '<button class="btn btn-large btn-outline" type="submit" data-send="whatsapp">' + esc(t('submitWhatsApp')) + '</button>' +
        '</div>' +
        '<p class="form-error" id="form-error" role="alert" hidden></p>' +
      '</form>' +
    '</div>' +
  '</div></div>';
}

/* ---------- routing ---------- */

function currentRoute() {
  var h = location.hash.replace(/^#/, '');
  if (h.indexOf('/product/') === 0) {
    var slug;
    try {
      slug = decodeURIComponent(h.slice(9));
    } catch (e) {
      return { name: 'home' }; /* malformed hash — fall back to home */
    }
    return { name: 'product', slug: slug };
  }
  if (h === '/cart') return { name: 'cart' };
  return { name: 'home' };
}

function renderView() {
  var app = document.getElementById('app');
  var r = currentRoute();
  if (r.name === 'product') {
    app.innerHTML = productView(r.slug);
    bindProductPage();
    if (!productBySlug(r.slug)) renderCatalog();
  } else if (r.name === 'cart') {
    app.innerHTML = cartView();
    bindCartPage();
  } else {
    app.innerHTML = homeView();
    renderCatalog();
  }
  applyStock();
  window.scrollTo(0, 0);
}

function scrollToSection(id) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- cart actions ---------- */

function addToCart(slug, qty) {
  var e = cart[slug];
  if (e && typeof e === 'object') {
    e.qty = entryQty(e) + qty;
  } else if (typeof e === 'number') {
    cart[slug] = { kind: 'product', qty: e + qty };
  } else {
    cart[slug] = { kind: 'product', qty: qty };
  }
  saveCart();
  updateBadge();
  showToast(t('toastAdded'));
}

/* The "all three together" bundle (gbp-all) and its three components are
   mutually exclusive in the cart — the bundle must never be counted
   together with any component. Enforced here, in the single service
   add path, so every entry point behaves the same. */
var GBP_BUNDLE_ID = 'gbp-all';
var GBP_COMPONENT_IDS = ['gbp-create', 'gbp-fill', 'gbp-verify'];

/* Services have a fixed quantity of 1 (photo-edit quantity is adjusted in
   the cart). Adding a service that is already in the cart is a no-op. */
function addServiceToCart(id) {
  if (!serviceById(id)) return;
  if (id === GBP_BUNDLE_ID) {
    for (var i = 0; i < GBP_COMPONENT_IDS.length; i++) delete cart[GBP_COMPONENT_IDS[i]];
  } else if (GBP_COMPONENT_IDS.indexOf(id) !== -1) {
    delete cart[GBP_BUNDLE_ID];
  }
  if (!cart[id]) cart[id] = { kind: 'service', qty: 1 };
  saveCart();
  updateBadge();
  showToast(t('toastServiceAdded'));
}

/* Toggle a service from its row button: "+" adds it (with the normal add
   toast), "−" removes the whole entry at once (all quantity, e.g.
   photo-edit). Row states refresh in place, including rows auto-removed
   by the bundle rule. */
function toggleServiceInCart(id) {
  if (!serviceById(id)) return;
  if (serviceInCart(id)) {
    delete cart[id];
    saveCart();
    updateBadge();
  } else {
    addServiceToCart(id);
  }
  refreshServiceRows();
}

function bindProductPage() {
  var qty = 1;
  var val = document.getElementById('qty-val');
  var addBtn = document.querySelector('[data-add-qty]');
  function sync() {
    if (val) val.textContent = qty;
    if (addBtn) addBtn.setAttribute('data-add-qty', String(qty));
  }
  var dec = document.querySelector('[data-qty-dec]');
  var inc = document.querySelector('[data-qty-inc]');
  if (dec) dec.addEventListener('click', function () { if (qty > 1) { qty--; sync(); } });
  if (inc) inc.addEventListener('click', function () { if (qty < 99) { qty++; sync(); } });
}

function orderFormValues(form) {
  var honeyField = form.querySelector('input[name="_honey"]');
  return {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    city: form.city.value.trim(),
    address: form.address.value.trim(),
    comment: form.comment.value.trim(),
    honey: honeyField ? honeyField.value : ''
  };
}

/* WhatsApp text in the customer's language. Products-only orders keep the
   exact previous format; orders with services list both groups with the
   split totals and the from-price note. */
function buildOrderLines(pKeys, sKeys, v) {
  var totals = cartTotals();
  var lines = [t('orderTitle'), ''];
  var n = 0;
  pKeys.forEach(function (slug) {
    var p = productBySlug(slug);
    lines.push((++n) + '. ' + p.name[lang] + ' × ' + entryQty(cart[slug]) + ' — ' + price(p.price * entryQty(cart[slug])));
  });
  if (sKeys.length) {
    if (pKeys.length) lines.push('');
    lines.push(t('navServices') + ':');
    sKeys.forEach(function (id) {
      var svc = serviceById(id);
      var qty = entryQty(cart[id]);
      lines.push((++n) + '. ' + svc.name[lang] + (qty > 1 ? ' × ' + qty : '') + ' — ' + servicePriceForQty(svc, qty));
    });
  }
  lines.push('');
  if (!sKeys.length) {
    lines.push(t('total') + ': ' + price(totals.once));
  } else {
    if (totals.once > 0 || !totals.hasMonthly) lines.push(t('totalOnce') + ': ' + price(totals.once));
    if (totals.hasMonthly) lines.push(t('totalMonthly') + ': ' + price(totals.monthly));
    if (totals.hasFrom) lines.push(t('fromPriceNote'));
  }
  lines.push('');
  lines.push(t('fName') + ': ' + v.name);
  lines.push(t('fPhone') + ': ' + v.phone);
  if (v.city) lines.push(t('fCity') + ': ' + v.city);
  if (v.address) lines.push(t('fAddress') + ': ' + v.address);
  if (v.comment) lines.push(t('fCommentShort') + ': ' + v.comment);
  lines.push(t('orderPayment'));
  return lines;
}

/* Email fields with fixed Georgian labels — the inbox owner reads Georgian. */
function buildEmailFields(pKeys, sKeys, v) {
  var totals = cartTotals();
  var fields = { '_subject': 'ახალი შეკვეთა — locallink' };
  if (pKeys.length) {
    fields['პროდუქტები'] = pKeys.map(function (slug, i) {
      var p = productBySlug(slug);
      return (i + 1) + '. ' + p.name.ka + ' × ' + entryQty(cart[slug]) + ' — ' + price(p.price * entryQty(cart[slug]));
    }).join('\n');
  }
  if (sKeys.length) {
    fields['სერვისები'] = sKeys.map(function (id, i) {
      var svc = serviceById(id);
      var qty = entryQty(cart[id]);
      return (i + 1) + '. ' + svc.name.ka + (qty > 1 ? ' × ' + qty : '') + ' — ' + servicePriceForQty(svc, qty, 'ka');
    }).join('\n');
  }
  if (!sKeys.length) {
    fields['ჯამი'] = price(totals.once);
  } else {
    if (totals.once > 0 || !totals.hasMonthly) fields['ერთჯერადი ჯამი'] = price(totals.once);
    if (totals.hasMonthly) fields['ყოველთვიური ჯამი'] = price(totals.monthly);
    if (totals.hasFrom) fields['შენიშვნა'] = 'საბოლოო ფასი შეთანხმებით.';
  }
  fields['სახელი და გვარი'] = v.name;
  fields['ტელეფონი'] = v.phone;
  if (v.city) fields['ქალაქი'] = v.city;
  if (v.address) fields['მისამართი'] = v.address;
  fields['გადახდა'] = 'ნაღდი ანგარიშსწორება';
  fields['_template'] = 'table';
  fields['_captcha'] = 'false';
  fields['_honey'] = v.honey || '';
  if (v.comment) fields['კომენტარი'] = v.comment;
  return fields;
}

function finishOrder(bodyKey) {
  cart = {};
  saveCart();
  updateBadge();
  showPopup(bodyKey);
  renderView();
}

function sendOrderByEmail(form, pKeys, sKeys, v) {
  var buttons = form.querySelectorAll('[data-send]');
  var emailBtn = form.querySelector('[data-send="email"]');
  var err = document.getElementById('form-error');
  var originalLabel = emailBtn ? emailBtn.textContent : '';
  err.hidden = true;
  for (var i = 0; i < buttons.length; i++) buttons[i].disabled = true;
  if (emailBtn) emailBtn.textContent = t('sending');
  fetch(FORMSUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(buildEmailFields(pKeys, sKeys, v))
  }).then(function (res) {
    if (!res.ok) throw new Error('formsubmit http ' + res.status);
    finishOrder('popupBodyEmail');
  }).catch(function () {
    for (var j = 0; j < buttons.length; j++) buttons[j].disabled = false;
    if (emailBtn) emailBtn.textContent = originalLabel;
    err.textContent = t('sendError');
    err.hidden = false;
  });
}

function bindCartPage() {
  var form = document.getElementById('order-form');
  if (!form) return;
  var channel = 'email';
  form.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-send]') : null;
    if (b) channel = b.getAttribute('data-send');
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var pKeys = cartProductKeys();
    var sKeys = cartServiceKeys();
    if (!pKeys.length && !sKeys.length) return;
    var v = orderFormValues(form);
    if (channel === 'whatsapp') {
      window.open(WA_URL + '?text=' + encodeURIComponent(buildOrderLines(pKeys, sKeys, v).join('\n')), '_blank');
      finishOrder('popupBody');
    } else {
      sendOrderByEmail(form, pKeys, sKeys, v);
    }
  });
}

/* ---------- global events ---------- */

document.addEventListener('click', function (e) {
  var langBtn = e.target.closest('[data-lang]');
  if (langBtn) {
    lang = langBtn.getAttribute('data-lang');
    storeSet('locallink-lang', lang);
    renderChrome();
    renderView();
    return;
  }
  var addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    addToCart(addBtn.getAttribute('data-add'), parseInt(addBtn.getAttribute('data-add-qty') || '1', 10) || 1);
    return;
  }
  var toggleSvcBtn = e.target.closest('[data-toggle-service]');
  if (toggleSvcBtn) {
    toggleServiceInCart(toggleSvcBtn.getAttribute('data-toggle-service'));
    return;
  }
  var inc = e.target.closest('[data-cart-inc]');
  if (inc) {
    var s1 = inc.getAttribute('data-cart-inc');
    var e1 = cart[s1];
    if (e1 && typeof e1 === 'object') {
      if (e1.qty < 99) e1.qty++;
    } else if (typeof e1 === 'number') {
      cart[s1] = { kind: 'product', qty: Math.min(99, e1 + 1) };
    }
    saveCart(); updateBadge(); renderView();
    return;
  }
  var dec = e.target.closest('[data-cart-dec]');
  if (dec) {
    var s2 = dec.getAttribute('data-cart-dec');
    var e2 = cart[s2];
    if (e2 && typeof e2 === 'object') {
      e2.qty--;
      if (e2.qty <= 0) delete cart[s2];
    } else if (typeof e2 === 'number') {
      if (e2 <= 1) delete cart[s2];
      else cart[s2] = { kind: 'product', qty: e2 - 1 };
    }
    saveCart(); updateBadge(); renderView();
    return;
  }
  var rem = e.target.closest('[data-cart-remove]');
  if (rem) {
    delete cart[rem.getAttribute('data-cart-remove')];
    saveCart(); updateBadge(); renderView();
    return;
  }
  var sec = e.target.closest('[data-section]');
  if (sec) {
    e.preventDefault();
    var id = sec.getAttribute('data-section');
    if (currentRoute().name !== 'home') {
      location.hash = '#/';
      setTimeout(function () { scrollToSection(id); }, 80);
    } else {
      scrollToSection(id);
    }
  }
});

document.getElementById('search-input').addEventListener('input', function (e) {
  query = e.target.value.trim().toLowerCase();
  if (currentRoute().name !== 'home') {
    location.hash = '#/';
  } else {
    renderCatalog();
  }
});

document.getElementById('popup-close').addEventListener('click', hidePopup);
document.getElementById('popup').addEventListener('click', function (e) {
  if (e.target === this) hidePopup();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') hidePopup();
});

window.addEventListener('hashchange', renderView);

/* ---------- init ---------- */

renderChrome();
renderView();
loadStock();
