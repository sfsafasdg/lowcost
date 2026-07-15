import { ProductAccent, ProductShape } from "@/components/product/product-visual";

export type CategorySlug = "iphone" | "macbook" | "ipad" | "watch" | "airpods" | "jbl" | "accessories";

export type StoreProduct = {
  id: string;
  category: CategorySlug;
  name: string;
  model: string;
  description: string;
  price: number;
  priceLabel: string;
  shape: ProductShape;
  accent: ProductAccent;
  label: string;
  colors: string[];
  storage?: string[];
  specs: Array<[string, string]>;
  searchTerms: string[];
};

export type StoreCategory = {
  slug: CategorySlug;
  name: string;
  navLabel: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  heroProductId: string;
  shape: ProductShape;
  accent: ProductAccent;
  models: Array<{ name: string; description: string; productId: string }>;
  technical: Array<[string, string]>;
  menuItems: Array<{ name: string; description: string; productId: string; shape: ProductShape; accent: ProductAccent }>;
};

export const products: StoreProduct[] = [
  {
    id: "iphone-17-pro",
    category: "iphone",
    name: "iPhone 17 Pro",
    model: "256GB / Natural Titanium",
    description: "Флагманський iPhone для фото, відео та роботи без компромісів.",
    price: 49999,
    priceLabel: "від 49 999 ₴",
    shape: "phone",
    accent: "green",
    label: "Новинка",
    colors: ["Natural Titanium", "Black Titanium", "White Titanium"],
    storage: ["256GB", "512GB", "1TB"],
    specs: [["Дисплей", "6.3-inch Super Retina XDR"], ["Камера", "Pro camera system"], ["Чип", "A-series Pro"], ["Гарантія", "12 місяців"]],
    searchTerms: ["iphone", "айфон", "17 pro", "pro iphone", "apple phone"],
  },
  {
    id: "iphone-17",
    category: "iphone",
    name: "iPhone 17",
    model: "128GB / Black",
    description: "Сучасний iPhone для щоденного користування, фото та відео.",
    price: 38999,
    priceLabel: "від 38 999 ₴",
    shape: "phone",
    accent: "neutral",
    label: "Популярний",
    colors: ["Black", "White", "Green"],
    storage: ["128GB", "256GB"],
    specs: [["Дисплей", "6.1-inch OLED"], ["Камера", "Dual camera system"], ["Face ID", "Так"], ["Доставка", "24-48 год"]],
    searchTerms: ["iphone", "айфон", "iphone 17", "apple"],
  },
  {
    id: "iphone-accessories",
    category: "accessories",
    name: "iPhone Accessories",
    model: "Cases / MagSafe / Glass",
    description: "Захист і заряд для iPhone у мінімальному преміальному стилі.",
    price: 699,
    priceLabel: "від 699 ₴",
    shape: "case",
    accent: "green",
    label: "Аксесуари",
    colors: ["Black", "Clear", "Green"],
    specs: [["Сумісність", "iPhone 13-17"], ["Матеріали", "Silicone / Glass"], ["MagSafe", "Опційно"], ["Гарантія", "14 днів"]],
    searchTerms: ["iphone accessories", "чохол", "magsafe", "скло"],
  },
  {
    id: "macbook-air",
    category: "macbook",
    name: "MacBook Air",
    model: "13-inch / Midnight",
    description: "Легкий ноутбук для навчання, бізнесу та щоденної мобільної роботи.",
    price: 42999,
    priceLabel: "від 42 999 ₴",
    shape: "laptop",
    accent: "purple",
    label: "Легкий",
    colors: ["Midnight", "Starlight", "Space Gray"],
    storage: ["256GB", "512GB"],
    specs: [["Дисплей", "13-inch Liquid Retina"], ["Автономність", "до 18 год"], ["Пам'ять", "8GB / 16GB"], ["Вага", "1.24 кг"]],
    searchTerms: ["macbook", "macbook air", "макбук", "ноутбук"],
  },
  {
    id: "macbook-pro",
    category: "macbook",
    name: "MacBook Pro",
    model: "14-inch / Space Black",
    description: "Потужність для монтажу, дизайну, розробки та складних робочих задач.",
    price: 72999,
    priceLabel: "від 72 999 ₴",
    shape: "laptop",
    accent: "purple",
    label: "Pro",
    colors: ["Space Black", "Silver"],
    storage: ["512GB", "1TB", "2TB"],
    specs: [["Дисплей", "Liquid Retina XDR"], ["Чип", "M-series Pro"], ["Порти", "HDMI / SD / Thunderbolt"], ["Гарантія", "12 місяців"]],
    searchTerms: ["macbook pro", "macbook", "макбук про", "laptop"],
  },
  {
    id: "ipad-air",
    category: "ipad",
    name: "iPad Air",
    model: "11-inch / Wi-Fi",
    description: "Тонкий iPad для навчання, творчості, нотаток і контенту.",
    price: 26999,
    priceLabel: "від 26 999 ₴",
    shape: "tablet",
    accent: "neutral",
    label: "Для навчання",
    colors: ["Space Gray", "Purple", "Blue"],
    storage: ["128GB", "256GB"],
    specs: [["Дисплей", "11-inch Liquid Retina"], ["Apple Pencil", "Підтримка"], ["Камера", "12MP"], ["Вага", "462 г"]],
    searchTerms: ["ipad", "айпад", "tablet", "планшет"],
  },
  {
    id: "ipad-pro",
    category: "ipad",
    name: "iPad Pro",
    model: "13-inch / Space Black",
    description: "Професійний iPad для дизайну, монтажу та максимальної мобільності.",
    price: 52999,
    priceLabel: "від 52 999 ₴",
    shape: "tablet",
    accent: "purple",
    label: "Pro display",
    colors: ["Space Black", "Silver"],
    storage: ["256GB", "512GB", "1TB"],
    specs: [["Дисплей", "Ultra Retina XDR"], ["Чип", "M-series"], ["Apple Pencil", "Pro support"], ["Face ID", "Так"]],
    searchTerms: ["ipad pro", "ipad", "айпад про", "tablet"],
  },
  {
    id: "apple-watch-series",
    category: "watch",
    name: "Apple Watch Series",
    model: "45mm / Midnight",
    description: "Стильний годинник для здоров'я, спорту, сповіщень і щоденного ритму.",
    price: 16499,
    priceLabel: "від 16 499 ₴",
    shape: "watch",
    accent: "green",
    label: "Smart choice",
    colors: ["Midnight", "Starlight", "Silver"],
    specs: [["Розмір", "41mm / 45mm"], ["Датчики", "Health tracking"], ["Захист", "Water resistant"], ["Сумісність", "iPhone"]],
    searchTerms: ["apple watch", "watch", "годинник", "смарт годинник"],
  },
  {
    id: "apple-watch-ultra",
    category: "watch",
    name: "Apple Watch Ultra",
    model: "49mm / Titanium",
    description: "Максимальна автономність, міцність і навігація для активного ритму.",
    price: 32999,
    priceLabel: "від 32 999 ₴",
    shape: "watch",
    accent: "purple",
    label: "Ultra",
    colors: ["Titanium", "Black Titanium"],
    specs: [["Корпус", "49mm Titanium"], ["Автономність", "до 36 год"], ["GPS", "Precision dual-frequency"], ["Захист", "WR100"]],
    searchTerms: ["apple watch ultra", "watch ultra", "ultra", "годинник"],
  },
  {
    id: "airpods-pro",
    category: "airpods",
    name: "AirPods Pro",
    model: "USB-C / MagSafe Case",
    description: "Чистий звук, адаптивне шумозаглушення та комфорт на кожен день.",
    price: 9499,
    priceLabel: "від 9 499 ₴",
    shape: "buds",
    accent: "neutral",
    label: "Хіт продажів",
    colors: ["White"],
    specs: [["Звук", "Adaptive Audio"], ["Шумозаглушення", "Active Noise Cancellation"], ["Кейс", "MagSafe USB-C"], ["Захист", "IP54"]],
    searchTerms: ["airpods", "airpods pro", "навушники", "аірподс"],
  },
  {
    id: "airpods-max",
    category: "airpods",
    name: "AirPods Max",
    model: "Space Gray",
    description: "Повнорозмірний звук з преміальними матеріалами і глибокою сценою.",
    price: 24999,
    priceLabel: "від 24 999 ₴",
    shape: "buds",
    accent: "purple",
    label: "Premium audio",
    colors: ["Space Gray", "Silver", "Green"],
    specs: [["Формат", "Over-ear"], ["Звук", "Spatial Audio"], ["ANC", "Так"], ["Кейс", "Smart Case"]],
    searchTerms: ["airpods max", "airpods", "навушники", "max"],
  },
  {
    id: "jbl-charge",
    category: "jbl",
    name: "JBL Charge",
    model: "Black / Portable",
    description: "Глибокий звук, автономність і захист для дому, дороги та вечірок.",
    price: 5799,
    priceLabel: "від 5 799 ₴",
    shape: "speaker",
    accent: "purple",
    label: "В наявності",
    colors: ["Black", "Blue", "Red"],
    specs: [["Автономність", "до 20 год"], ["Захист", "IP67"], ["Powerbank", "Так"], ["Підключення", "Bluetooth"]],
    searchTerms: ["jbl", "speaker", "charge", "колонка"],
  },
  {
    id: "jbl-flip",
    category: "jbl",
    name: "JBL Flip",
    model: "Black / Compact",
    description: "Компактна портативна колонка з чистим звуком і захистом від води.",
    price: 3999,
    priceLabel: "від 3 999 ₴",
    shape: "speaker",
    accent: "green",
    label: "Compact",
    colors: ["Black", "Green", "Purple"],
    specs: [["Автономність", "до 12 год"], ["Захист", "IP67"], ["Формат", "Portable"], ["Підключення", "Bluetooth"]],
    searchTerms: ["jbl flip", "jbl", "speaker", "колонка"],
  },
  {
    id: "usb-c-charger",
    category: "accessories",
    name: "USB-C Charger",
    model: "Fast Charge",
    description: "Швидка зарядка для iPhone, iPad, MacBook та щоденного сетапу.",
    price: 899,
    priceLabel: "від 899 ₴",
    shape: "charger",
    accent: "neutral",
    label: "Fast charge",
    colors: ["White", "Black"],
    specs: [["Потужність", "20W / 35W / 67W"], ["Порт", "USB-C"], ["Сумісність", "Apple devices"], ["Гарантія", "14 днів"]],
    searchTerms: ["charger", "зарядка", "usb-c", "адаптер"],
  },
  {
    id: "power-bank",
    category: "accessories",
    name: "Power Bank",
    model: "Magnetic / USB-C",
    description: "Автономність для подорожей, навчання і довгих робочих днів.",
    price: 1299,
    priceLabel: "від 1 299 ₴",
    shape: "charger",
    accent: "green",
    label: "Travel",
    colors: ["Black", "White"],
    specs: [["Ємність", "10 000 mAh"], ["Порт", "USB-C"], ["Magnetic", "Опційно"], ["Захист", "Overheat protection"]],
    searchTerms: ["power bank", "павербанк", "зарядка", "battery"],
  },
];

export const categories: StoreCategory[] = [
  {
    slug: "iphone",
    name: "iPhone",
    navLabel: "iPhone",
    href: "/iphone",
    eyebrow: "iPhone",
    title: "iPhone для роботи, фото і щоденного ритму.",
    description: "Оберіть модель, пам'ять і колір з консультацією перед покупкою та гарантією.",
    heroProductId: "iphone-17-pro",
    shape: "phone",
    accent: "green",
    models: [
      { name: "iPhone 17 Pro", description: "Максимум камер і продуктивності.", productId: "iphone-17-pro" },
      { name: "iPhone 17", description: "Оптимальний вибір на кожен день.", productId: "iphone-17" },
      { name: "Аксесуари", description: "Чохли, скло та MagSafe.", productId: "iphone-accessories" },
    ],
    technical: [["Гарантія", "12 місяців"], ["Доставка", "24-48 год"], ["Консультація", "Підбір під бюджет"], ["Комплектація", "Уточнюється до покупки"]],
    menuItems: [
      { name: "iPhone 17 Pro", description: "Pro camera system", productId: "iphone-17-pro", shape: "phone", accent: "green" },
      { name: "iPhone 17", description: "Everyday flagship", productId: "iphone-17", shape: "phone", accent: "neutral" },
      { name: "iPhone accessories", description: "Cases and MagSafe", productId: "iphone-accessories", shape: "case", accent: "green" },
    ],
  },
  {
    slug: "macbook",
    name: "MacBook",
    navLabel: "MacBook",
    href: "/macbook",
    eyebrow: "MacBook",
    title: "Преміальна продуктивність у чистому форматі.",
    description: "MacBook Air для мобільності або MacBook Pro для складної роботи.",
    heroProductId: "macbook-pro",
    shape: "laptop",
    accent: "purple",
    models: [
      { name: "MacBook Air", description: "Легкий ноутбук для щоденних задач.", productId: "macbook-air" },
      { name: "MacBook Pro", description: "Потужність для професійної роботи.", productId: "macbook-pro" },
      { name: "USB-C Chargers", description: "Правильна зарядка для Mac.", productId: "usb-c-charger" },
    ],
    technical: [["Дисплеї", "Liquid Retina / XDR"], ["Пам'ять", "8GB-36GB"], ["Накопичувач", "256GB-2TB"], ["Підбір", "Під роботу або навчання"]],
    menuItems: [
      { name: "MacBook Air", description: "Thin and light", productId: "macbook-air", shape: "laptop", accent: "neutral" },
      { name: "MacBook Pro", description: "Pro performance", productId: "macbook-pro", shape: "laptop", accent: "purple" },
      { name: "Mac mini", description: "Compact desktop idea", productId: "macbook-pro", shape: "laptop", accent: "green" },
    ],
  },
  {
    slug: "ipad",
    name: "iPad",
    navLabel: "iPad",
    href: "/ipad",
    eyebrow: "iPad",
    title: "Планшет для навчання, творчості і легкого робочого дня.",
    description: "Порівняємо iPad Air та iPad Pro, підберемо пам'ять і аксесуари.",
    heroProductId: "ipad-pro",
    shape: "tablet",
    accent: "neutral",
    models: [
      { name: "iPad Air", description: "Тонкий і універсальний.", productId: "ipad-air" },
      { name: "iPad Pro", description: "Професійний дисплей і потужність.", productId: "ipad-pro" },
      { name: "USB-C Charger", description: "Швидка зарядка для iPad.", productId: "usb-c-charger" },
    ],
    technical: [["Apple Pencil", "Підтримка"], ["Дисплей", "Liquid Retina / XDR"], ["Сценарії", "Навчання, дизайн, контент"], ["Доставка", "По Україні"]],
    menuItems: [
      { name: "iPad Air", description: "Light and capable", productId: "ipad-air", shape: "tablet", accent: "neutral" },
      { name: "iPad Pro", description: "Pro creative power", productId: "ipad-pro", shape: "tablet", accent: "purple" },
      { name: "iPad accessories", description: "Chargers and protection", productId: "usb-c-charger", shape: "charger", accent: "green" },
    ],
  },
  {
    slug: "watch",
    name: "Apple Watch",
    navLabel: "Watch",
    href: "/watch",
    eyebrow: "Apple Watch",
    title: "Годинник, який тримає ритм дня.",
    description: "Apple Watch для здоров'я, спорту, повідомлень і стилю.",
    heroProductId: "apple-watch-series",
    shape: "watch",
    accent: "green",
    models: [
      { name: "Apple Watch Series", description: "Оптимальний вибір для більшості.", productId: "apple-watch-series" },
      { name: "Apple Watch Ultra", description: "Максимум автономності та міцності.", productId: "apple-watch-ultra" },
      { name: "Power Bank", description: "Заряд у подорожі.", productId: "power-bank" },
    ],
    technical: [["Розміри", "41mm / 45mm / 49mm"], ["Сумісність", "iPhone"], ["Захист", "Water resistant"], ["Сценарії", "Спорт, здоров'я, стиль"]],
    menuItems: [
      { name: "Apple Watch Series", description: "Everyday watch", productId: "apple-watch-series", shape: "watch", accent: "green" },
      { name: "Apple Watch Ultra", description: "Adventure ready", productId: "apple-watch-ultra", shape: "watch", accent: "purple" },
      { name: "Watch accessories", description: "Bands and charge", productId: "power-bank", shape: "charger", accent: "neutral" },
    ],
  },
  {
    slug: "airpods",
    name: "AirPods",
    navLabel: "AirPods",
    href: "/airpods",
    eyebrow: "AirPods",
    title: "Звук, який зникає в досвіді.",
    description: "AirPods для дзвінків, музики, подорожей і роботи без зайвого шуму.",
    heroProductId: "airpods-pro",
    shape: "buds",
    accent: "neutral",
    models: [
      { name: "AirPods Pro", description: "ANC і USB-C кейс.", productId: "airpods-pro" },
      { name: "AirPods Max", description: "Повнорозмірний преміальний звук.", productId: "airpods-max" },
      { name: "Power Bank", description: "Додаткова автономність.", productId: "power-bank" },
    ],
    technical: [["Шумозаглушення", "Доступно у Pro/Max"], ["Кейс", "USB-C / MagSafe"], ["Сценарії", "Музика, дзвінки, робота"], ["Гарантія", "12 місяців"]],
    menuItems: [
      { name: "AirPods Pro", description: "Adaptive Audio", productId: "airpods-pro", shape: "buds", accent: "neutral" },
      { name: "AirPods Max", description: "Premium over-ear", productId: "airpods-max", shape: "buds", accent: "purple" },
      { name: "Audio accessories", description: "Charge and cases", productId: "power-bank", shape: "charger", accent: "green" },
    ],
  },
  {
    slug: "jbl",
    name: "JBL",
    navLabel: "JBL",
    href: "/jbl",
    eyebrow: "JBL",
    title: "Портативний звук для дому, дороги і вечорів.",
    description: "Колонки JBL з глибоким звуком, автономністю і захистом.",
    heroProductId: "jbl-charge",
    shape: "speaker",
    accent: "purple",
    models: [
      { name: "JBL Charge", description: "Баланс звуку і автономності.", productId: "jbl-charge" },
      { name: "JBL Flip", description: "Компактний портативний формат.", productId: "jbl-flip" },
      { name: "Power Bank", description: "Енергія для дороги.", productId: "power-bank" },
    ],
    technical: [["Підключення", "Bluetooth"], ["Захист", "IP67"], ["Автономність", "до 20 год"], ["Сценарії", "Дім, подорожі, вечірки"]],
    menuItems: [
      { name: "JBL Charge", description: "Powerful portable sound", productId: "jbl-charge", shape: "speaker", accent: "purple" },
      { name: "JBL Flip", description: "Compact speaker", productId: "jbl-flip", shape: "speaker", accent: "green" },
      { name: "Audio power", description: "Power banks", productId: "power-bank", shape: "charger", accent: "neutral" },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    navLabel: "Аксесуари",
    href: "/accessories",
    eyebrow: "Accessories",
    title: "Заряд, захист і деталі для завершеного сетапу.",
    description: "Чохли, зарядні пристрої та power banks, які не псують преміальний вигляд техніки.",
    heroProductId: "usb-c-charger",
    shape: "charger",
    accent: "green",
    models: [
      { name: "USB-C Charger", description: "Швидка зарядка для Apple.", productId: "usb-c-charger" },
      { name: "Power Bank", description: "Автономність у дорозі.", productId: "power-bank" },
      { name: "iPhone Accessories", description: "Чохли, скло і MagSafe.", productId: "iphone-accessories" },
    ],
    technical: [["Категорії", "Заряд, чохли, скло"], ["Сумісність", "Apple devices"], ["Підбір", "Під конкретну модель"], ["Доставка", "По Україні"]],
    menuItems: [
      { name: "USB-C Chargers", description: "Fast charge", productId: "usb-c-charger", shape: "charger", accent: "neutral" },
      { name: "Power Banks", description: "Extra energy", productId: "power-bank", shape: "charger", accent: "green" },
      { name: "Cases", description: "Minimal protection", productId: "iphone-accessories", shape: "case", accent: "green" },
    ],
  },
];

export const popularSearches = ["iPhone 17 Pro", "MacBook Air", "AirPods Pro", "Apple Watch", "JBL Charge", "MagSafe", "Power Bank"];

export function getCategory(slug: CategorySlug) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryProducts(slug: CategorySlug) {
  return products.filter((product) => product.category === slug || (slug === "iphone" && product.id === "iphone-accessories"));
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(product: StoreProduct) {
  return products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
}
