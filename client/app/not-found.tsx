import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import Link from "next/link";
import Header from "@/features/common/components/composites/Header";
import Footer from "@/features/common/components/composites/Footer";
import { ResponsiveContainer } from "@/components/ResponsiveContainer";

const NotFound = async () => {
  const t = await getTranslations(`notFound`);
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1">
          <ResponsiveContainer className="flex flex-1">
            <section className="w-full px-7.25 md:px-15 xl:px-25 flex flex-1 items-center justify-center">
              <div className="mx-auto w-full max-w-204.5 flex flex-col items-center justify-center text-center font-[Noto bold]">
                <span className="font-bold text-[140px] leading-40 opacity-25 mb-6">
                  404
                </span>
                <h1 className="mb-4 text-[32px] leading-10 font-noto-bold">
                  {t(`title`)}
                </h1>
                <p className="max-w-120 mb-6 leading-5 text-[#475569]">
                  {t(`paragraph`)}
                </p>
                <Link
                  href="/"
                  className="text-[#1F8343] underline font-bold leading-7 font-noto-bold"
                >
                  {t(`link`)}
                </Link>
              </div>
            </section>
          </ResponsiveContainer>
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
};

export default NotFound;
