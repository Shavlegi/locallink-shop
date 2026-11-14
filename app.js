'use strict';

/* locallink shop — static storefront, orders go to WhatsApp. No backend. */

var WA_NUMBER = '995597777619';
var WA_URL = 'https://wa.me/' + WA_NUMBER;
var FB_URL = 'https://www.facebook.com/people/Local-Link-%E1%83%A8%E1%83%94%E1%83%9C%E1%83%98-%E1%83%91%E1%83%98%E1%83%96%E1%83%9C%E1%83%94%E1%83%A1%E1%83%98%E1%83%A1%E1%83%97%E1%83%95%E1%83%98%E1%83%A1/61595909386695/';
var PHONE_DISPLAY = '597 777 619';
var PHONE_LINK = 'tel:+995597777619';
var EMAIL = 'locallink.ge@gmail.com';
var SITE_URL = 'https://locallink.store/';

var PRODUCTS = [
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
    remove: 'წაშლა',
    formTitle: 'შეკვეთის გაფორმება',
    fName: 'სახელი და გვარი',
    fPhone: 'ტელეფონის ნომერი',
    fCity: 'ქალაქი',
    fAddress: 'მისამართი',
    fComment: 'კომენტარი (არასავალდებულო)',
    fCommentShort: 'კომენტარი',
    cashNote: 'გადახდა ხდება ნაღდი ანგარიშსწორებით.',
    submitOrder: 'შეკვეთის გაფორმება',
    toastAdded: 'პროდუქტი დაემატა კალათაში',
    popupTitle: 'შეკვეთა მიღებულია',
    popupBody: 'გმადლობთ! შეკვეთა WhatsApp-ით გაიგზავნა, მალე დაგიკავშირდებით.',
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
    remove: 'Remove',
    formTitle: 'Checkout',
    fName: 'Full name',
    fPhone: 'Phone number',
    fCity: 'City',
    fAddress: 'Address',
    fComment: 'Comment (optional)',
    fCommentShort: 'Comment',
    cashNote: 'Payment is cash on delivery.',
    submitOrder: 'Place order',
    toastAdded: 'Product added to cart',
    popupTitle: 'Order received',
    popupBody: 'Thank you! Your order was sent via WhatsApp. We will contact you soon.',
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
    remove: 'Удалить',
    formTitle: 'Оформление заказа',
    fName: 'Имя и фамилия',
    fPhone: 'Номер телефона',
    fCity: 'Город',
    fAddress: 'Адрес',
    fComment: 'Комментарий (необязательно)',
    fCommentShort: 'Комментарий',
    cashNote: 'Оплата — наличными при получении.',
    submitOrder: 'Оформить заказ',
    toastAdded: 'Товар добавлен в корзину',
    popupTitle: 'Заказ получен',
    popupBody: 'Спасибо! Ваш заказ отправлен через WhatsApp. Мы скоро свяжемся с вами.',
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
var query = '';

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
function saveCart() { storeSet('locallink-cart', JSON.stringify(cart)); }
function cartCount() {
  var n = 0;
  for (var k in cart) n += cart[k];
  return n;
}
function cartTotal() {
  var sum = 0;
  for (var k in cart) {
    var p = productBySlug(k);
    if (p) sum += p.price * cart[k];
  }
  return sum;
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
function showPopup() {
  document.getElementById('popup-title').textContent = t('popupTitle');
  document.getElementById('popup-body').textContent = t('popupBody');
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

    '<section class="section section-alt" id="about"><div class="container"><div class="split">' +
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
  var keys = Object.keys(cart).filter(function (k) { return cart[k] > 0 && productBySlug(k); });
  if (!keys.length) {
    return '<div class="page"><div class="container"><div class="empty-cart">' +
      '<div class="empty-icon" aria-hidden="true">🛒</div>' +
      '<p>' + esc(t('emptyCart')) + '</p>' +
      '<a class="btn" href="#/" data-section="products">' + esc(t('viewProducts')) + '</a>' +
    '</div></div></div>';
  }
  var rows = keys.map(function (slug) {
    var p = productBySlug(slug);
    var qty = cart[slug];
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

  return '<div class="page"><div class="container">' +
    '<h1 class="page-title">' + esc(t('cartTitle')) + '</h1>' +
    '<div class="cart-layout">' +
      '<div class="cart-items">' + rows +
        '<div class="cart-total-row"><span>' + esc(t('total')) + '</span><span>' + price(cartTotal()) + '</span></div>' +
      '</div>' +
      '<form class="order-form" id="order-form" novalidate>' +
        '<h2>' + esc(t('formTitle')) + '</h2>' +
        '<div class="field"><label for="f-name">' + esc(t('fName')) + '</label><input id="f-name" name="name" type="text" autocomplete="name" required></div>' +
        '<div class="field"><label for="f-phone">' + esc(t('fPhone')) + '</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required></div>' +
        '<div class="field"><label for="f-city">' + esc(t('fCity')) + '</label><input id="f-city" name="city" type="text" autocomplete="address-level2" required></div>' +
        '<div class="field"><label for="f-address">' + esc(t('fAddress')) + '</label><input id="f-address" name="address" type="text" autocomplete="street-address" required></div>' +
        '<div class="field"><label for="f-comment">' + esc(t('fComment')) + '</label><textarea id="f-comment" name="comment" rows="3"></textarea></div>' +
        '<p class="cash-note">' + esc(t('cashNote')) + '</p>' +
        '<button class="btn btn-large" type="submit">' + esc(t('submitOrder')) + '</button>' +
      '</form>' +
    '</div>' +
  '</div></div>';
}

/* ---------- routing ---------- */

function currentRoute() {
  var h = location.hash.replace(/^#/, '');
  if (h.indexOf('/product/') === 0) return { name: 'product', slug: decodeURIComponent(h.slice(9)) };
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
  window.scrollTo(0, 0);
}

function scrollToSection(id) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- cart actions ---------- */

function addToCart(slug, qty) {
  cart[slug] = (cart[slug] || 0) + qty;
  saveCart();
  updateBadge();
  showToast(t('toastAdded'));
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

function bindCartPage() {
  var form = document.getElementById('order-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var keys = Object.keys(cart).filter(function (k) { return cart[k] > 0 && productBySlug(k); });
    if (!keys.length) return;
    var lines = [t('orderTitle'), ''];
    keys.forEach(function (slug, i) {
      var p = productBySlug(slug);
      lines.push((i + 1) + '. ' + p.name[lang] + ' × ' + cart[slug] + ' — ' + price(p.price * cart[slug]));
    });
    lines.push('', t('total') + ': ' + price(cartTotal()), '');
    lines.push(t('fName') + ': ' + form.name.value.trim());
    lines.push(t('fPhone') + ': ' + form.phone.value.trim());
    lines.push(t('fCity') + ': ' + form.city.value.trim());
    lines.push(t('fAddress') + ': ' + form.address.value.trim());
    var comment = form.comment.value.trim();
    if (comment) lines.push(t('fCommentShort') + ': ' + comment);
    lines.push(t('orderPayment'));
    window.open(WA_URL + '?text=' + encodeURIComponent(lines.join('\n')), '_blank');
    cart = {};
    saveCart();
    updateBadge();
    showPopup();
    renderView();
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
  var inc = e.target.closest('[data-cart-inc]');
  if (inc) {
    var s1 = inc.getAttribute('data-cart-inc');
    if (cart[s1] < 99) cart[s1]++;
    saveCart(); updateBadge(); renderView();
    return;
  }
  var dec = e.target.closest('[data-cart-dec]');
  if (dec) {
    var s2 = dec.getAttribute('data-cart-dec');
    cart[s2]--;
    if (cart[s2] <= 0) delete cart[s2];
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
