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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const productX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const productY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,rgba(139,92,255,0.16),transparent_34rem),radial-gradient(circle_at_45%_20%,rgba(57,255,20,0.07),transparent_30rem)]" />
      <div className={cn(ds.spacing.container, "relative grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]")}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.9, ease: ds.motion.ease }}>
          <p className="mb-6 text-sm font-medium text-zinc-400">Apple, JBL та преміальні аксесуари в Україні</p>
          <h1 className={cn(ds.typography.hero, "max-w-3xl font-semibold text-white")}>Apple. Без компромісів.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            Преміальна техніка, офіційна гарантія, швидка доставка та людська консультація перед покупкою.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/catalog">Переглянути каталог</Button>
            <Button href="/iphone" variant="secondary">
              Обрати iPhone
            </Button>
          </div>
        </motion.div>

        <motion.div
          style={{ x: productX, y: productY }}
          initial={{ opacity: 0, scale: 0.94, y: 34 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.05, ease: ds.motion.ease, delay: 0.12 }}
          className="relative min-h-[560px] lg:min-h-[680px]"
        >
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-x-0 top-10">
            <ProductVisual shape="laptop" size="hero" accent="purple" />
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-6 left-[7%] w-[38%]">
            <ProductVisual shape="phone" size="lg" accent="green" />
          </motion.div>
          <Link href="/watch" className="absolute bottom-20 right-[6%] hidden w-[28%] rounded-[1.5rem] border border-white/10 bg-black/25 p-3 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.04] lg:block">
            <ProductVisual shape="watch" size="sm" accent="green" />
            <p className="px-2 pb-2 text-sm font-semibold text-white">View Apple Watch</p>
          </Link>
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
  const [active, setActive] = useState(0);

  return (
    <section className={ds.spacing.section}>
      <div className={ds.spacing.container}>
        <SectionIntro
          eyebrow="Категорії"
          title="Обирайте техніку так, як у преміальному шоурумі."
          text="Чистий product selector без зайвого шуму: головні категорії, великі форми, зрозуміла навігація."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-2">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={cn(
                  "flex items-center justify-between border-b border-white/10 px-1 py-5 text-left transition",
                  active === index ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                <span className="text-3xl font-semibold tracking-[-0.045em]">{category.name}</span>
                <span className="hidden text-sm md:block">{category.description}</span>
              </Link>
            ))}
          </div>
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0B0D]">
            <AnimatePresence mode="wait">
              <motion.div
                key={categories[active].name}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -18 }}
                transition={{ duration: 0.45, ease: ds.motion.ease }}
                className="absolute inset-0 flex flex-col justify-between p-8"
              >
                <div>
                  <p className="text-sm text-zinc-500">{categories[active].eyebrow}</p>
                  <h3 className="mt-2 text-5xl font-semibold tracking-[-0.055em] text-white">{categories[active].name}</h3>
                </div>
                <ProductVisual shape={categories[active].shape} size="lg" accent={categories[active].accent} />
              </motion.div>
            </AnimatePresence>
          </div>
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
          eyebrow="Рекомендовано"
          title="Головні продукти без маркетплейсного хаосу."
          text="Невелика добірка техніки, яку легко зрозуміти, порівняти та купити."
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
