"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { categories, products } from "@/lib/store-data";
import { designSystem as ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { SectionIntro } from "@/components/ui/section-intro";
import { ProductVisual } from "@/components/product/product-visual";
import { ProductCard } from "@/components/product/product-card";
import { EcosystemMarquee } from "@/components/home/ecosystem-marquee";

const trustStats = [
  ["5+", "років досвіду"],
  ["100%", "оригінальні товари"],
  ["12 міс.", "гарантія"],
  ["24-48 год", "доставка по Україні"],
  ["10k+", "клієнтів"],
];

const advantages = [
  ["Чесна консультація", "Пояснюємо різницю між моделями простими словами і не продаємо зайве."],
  ["Гарантія та перевірка", "Перед покупкою уточнюємо стан, комплектацію, гарантійні умови та деталі."],
  ["Швидка доставка", "Оперативно відправляємо по Україні та допомагаємо після отримання."],
  ["Правильна ціна", "Підбираємо техніку під бюджет без втрати у відчутті преміальної покупки."],
];

const purchaseSteps = [
  ["Вибір", "Обираєте модель або пишете нам, якщо потрібна порада."],
  ["Консультація", "Уточнюємо бюджет, сценарій використання, пам'ять, колір та аксесуари."],
  ["Доставка", "Підтверджуємо замовлення, перевіряємо товар і відправляємо по Україні."],
  ["Підтримка", "Залишаємось на зв'язку після покупки, якщо виникнуть питання."],
];

const featured = ["iphone-17-pro", "macbook-pro", "airpods-pro", "jbl-charge"].map((id) => products.find((product) => product.id === id)!);
const accessories = ["iphone-accessories", "usb-c-charger", "power-bank"].map((id) => products.find((product) => product.id === id)!);
const premiumCategories = categories.filter((category) => ["iphone", "watch", "airpods", "macbook", "accessories"].includes(category.slug));

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const productX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const productY = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);
  const floatX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const floatY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-10 pt-36 lg:pt-20"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,255,0.14),transparent_35rem),radial-gradient(circle_at_48%_18%,rgba(57,255,20,0.075),transparent_28rem),linear-gradient(180deg,#050505_0%,#070708_52%,#050505_100%)]" />
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-72 w-[86vw] -translate-x-1/2 rounded-[100%] bg-white/[0.032] blur-3xl" />
      <div className={cn(ds.spacing.container, "relative grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]")}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.9, ease: ds.motion.ease }} className="z-10">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
            Преміальний Apple reseller в Україні
          </div>
          <h1 className={cn(ds.typography.hero, "max-w-3xl font-semibold text-white")}>Apple-пристрої, які хочеться обрати одразу.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            iPhone, MacBook, Apple Watch, AirPods та аксесуари з гарантією, перевіркою якості і консультацією перед покупкою.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/catalog">Переглянути каталог</Button>
            <Button href="/iphone" variant="secondary">
              Обрати пристрій
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["Оригінальна техніка", "Гарантія", "Швидка доставка"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs font-medium text-zinc-300 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ x: productX, y: productY }}
          initial={{ opacity: 0, scale: 0.94, y: 34 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.05, ease: ds.motion.ease, delay: 0.12 }}
          className="hero-showcase relative min-h-[520px] sm:min-h-[610px] lg:min-h-[720px]"
        >
          <div className="absolute left-1/2 top-[54%] h-[76%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.015))] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_70px_160px_rgba(0,0,0,0.55)] backdrop-blur-2xl" />
          <div className="absolute left-1/2 top-[54%] h-[58%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14]/9 blur-3xl" />
          <div className="absolute right-[11%] top-[17%] h-64 w-64 rounded-full bg-[#8B5CFF]/13 blur-3xl" />

          <motion.div animate={{ y: [0, -9, 0], rotate: [0, 0.8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[5%] left-[16%] w-[72%] opacity-95">
            <ProductVisual shape="laptop" size="lg" accent="purple" />
          </motion.div>
          <motion.div animate={{ y: [0, -16, 0], rotate: [-3, -1, -3] }} transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[22%] top-[1%] w-[43%]">
            <ProductVisual shape="phone" size="hero" accent="green" />
          </motion.div>
          <motion.div style={{ x: floatX, y: floatY }} animate={{ y: [0, 11, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[18%] right-[4%] w-[28%]">
            <ProductVisual shape="watch" size="lg" accent="purple" />
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0], rotate: [0, -1.2, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[12%] left-[3%] w-[25%]">
            <ProductVisual shape="buds" size="md" accent="neutral" />
          </motion.div>

          <Link href="/product/iphone-17-pro" className="hero-glass-card absolute left-[2%] top-[17%] hidden w-52 rounded-3xl border border-white/12 bg-black/30 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-white/22 lg:block">
            <p className="text-xs text-zinc-500">Головний вибір</p>
            <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">iPhone 17 Pro</p>
            <p className="mt-3 text-sm text-zinc-400">від 49 999 ₴</p>
          </Link>
          <Link href="/watch" className="hero-glass-card absolute bottom-[23%] right-[1%] hidden w-48 rounded-3xl border border-white/12 bg-black/30 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-white/22 lg:block">
            <p className="text-xs text-zinc-500">Екосистема</p>
            <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">Watch + AirPods</p>
            <p className="mt-3 text-sm text-[#39FF14]">Переглянути</p>
          </Link>
          <div className="hero-reflection absolute bottom-[2%] left-1/2 h-28 w-[72%] -translate-x-1/2 rounded-[100%] bg-white/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-y border-white/[0.08] bg-white/[0.018] px-5 py-10">
      <div className={cn(ds.spacing.container, "grid gap-6 sm:grid-cols-2 lg:grid-cols-5")}>
        {trustStats.map(([value, label]) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: ds.motion.ease }}
            className="border-l border-white/10 pl-5"
          >
            <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
            <p className="mt-2 text-sm text-zinc-500">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CategoryExperience() {
  return (
    <section className={ds.spacing.section}>
      <div className={ds.spacing.container}>
        <SectionIntro
          eyebrow="Shop by category"
          title="Категорії з відчуттям преміального шоуруму."
          text="Великі продуктовые блоки, чиста навігація і зрозумілий шлях до покупки без маркетплейсного шуму."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          {premiumCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.65, ease: ds.motion.ease }}
              whileHover={{ y: -8 }}
              className={cn(index < 2 ? "lg:col-span-3" : "lg:col-span-2")}
            >
              <Link
                href={category.href}
                className="group relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#111113,#09090A)] p-6 transition hover:border-white/20 hover:shadow-[0_34px_120px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-white/[0.035] blur-3xl transition group-hover:bg-white/[0.055]" />
                <div className="relative z-10">
                  <p className="text-sm text-zinc-500">{category.eyebrow}</p>
                  <h3 className="mt-2 text-4xl font-semibold tracking-[-0.055em] text-white">{category.name}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">{category.description}</p>
                </div>
                <ProductVisual shape={category.shape} size={index < 2 ? "lg" : "md"} accent={category.accent} className="relative z-10 transition duration-700 group-hover:scale-[1.045]" />
                <div className="relative z-10 flex items-center justify-between text-sm">
                  <span className="font-semibold text-white">Переглянути</span>
                  <span className="text-[#39FF14] transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className={cn(ds.spacing.section, "bg-[#080809]")}>
      <div className={ds.spacing.container}>
        <SectionIntro
          eyebrow="Popular Products"
          title="Популярні пристрої, які хочеться купити з першого погляду."
          text="Відібрані позиції з чистою презентацією, ціною, категорією і швидким переходом до покупки."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {featured.map((product, index) => (
            <ProductCard key={product.id} {...product} price={product.priceLabel} large={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyLowcost() {
  return (
    <section className={ds.spacing.section}>
      <div className={cn(ds.spacing.container, "grid gap-12 lg:grid-cols-[0.95fr_1.05fr]")}>
        <SectionIntro
          eyebrow="Чому Lowcost"
          title="Преміальна покупка починається з довіри."
          text="Техніка має бути не тільки красивою на фото. Важливо, щоб вам пояснили різницю, допомогли обрати і залишились на зв'язку після покупки."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {advantages.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: ds.motion.ease }}
              className="rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-6"
            >
              <p className="mb-10 text-sm text-[#39FF14]/80">0{index + 1}</p>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppleExperience() {
  const [active, setActive] = useState(0);
  const shapes = ["phone", "tablet", "laptop", "buds"] as const;

  return (
    <section className={cn(ds.spacing.section, "bg-[#080809]")}>
      <div className={cn(ds.spacing.container, "overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D10]")}>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <SectionIntro
              eyebrow="Apple experience"
              title="Від першого кліку до моменту покупки."
              text="Купівля техніки має бути спокійною: зрозумілий вибір, уважна консультація, швидка доставка і підтримка після."
            />
            <div className="mt-10 space-y-2">
              {purchaseSteps.map(([title, text], index) => (
                <button
                  key={title}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={cn(
                    "w-full rounded-2xl border p-5 text-left transition",
                    active === index ? "border-white/16 bg-white/[0.06]" : "border-transparent bg-transparent hover:bg-white/[0.035]"
                  )}
                >
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="relative min-h-[620px] border-t border-white/10 bg-black lg:border-l lg:border-t-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: ds.motion.ease }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full max-w-xl px-8">
                  <ProductVisual shape={shapes[active]} size="lg" accent={active % 2 ? "purple" : "green"} />
                  <div className="mx-auto mt-2 max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
                    <p className="text-sm text-zinc-500">Крок {active + 1}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{purchaseSteps[active][0]}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessoriesSection() {
  return (
    <section className={ds.spacing.section}>
      <div className={ds.spacing.container}>
        <SectionIntro
          eyebrow="Аксесуари"
          title="Деталі, які роблять техніку завершеною."
          text="Чохли, зарядні пристрої та power banks мають виглядати й працювати так само акуратно, як сам пристрій."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {accessories.map((product) => (
            <ProductCard key={product.id} {...product} price={product.priceLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 py-20 lg:py-28">
      <div className={cn(ds.spacing.container, "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080809] p-8 text-center sm:p-12 lg:p-20")}>
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8B5CFF]/18 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#39FF14]/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <p className={cn(ds.typography.label, "mb-5 text-[#39FF14]/80")}>Lowcost</p>
          <h2 className={cn(ds.typography.display, "text-white")}>Твій наступний пристрій вже тут.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Відкрий каталог або напиши нам, якщо хочеш швидкий підбір iPhone, MacBook, iPad, JBL чи аксесуарів під свій бюджет.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/catalog">Перейти до каталогу</Button>
            <Button href="/iphone" variant="secondary">
              Почати з iPhone
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className={cn(ds.spacing.container, "flex flex-col gap-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between")}>
        <div>
          <p className="font-semibold text-white">Lowcost</p>
          <p className="mt-2">Premium electronics store in Ukraine.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {categories.map((category) => (
            <Link key={category.slug} href={category.href} className="transition hover:text-white">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <SiteHeader />
      <HeroSection />
      <EcosystemMarquee />
      <TrustSection />
      <CategoryExperience />
      <FeaturedProducts />
      <WhyLowcost />
      <AppleExperience />
      <AccessoriesSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
