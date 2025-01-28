import Head from 'next/head';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
// import { useTranslations } from 'next-intl';
// import { useData } from '@repo/utils/data';

import { Header } from '@repo/components/header';
import { Footer } from '@repo/components/footer';

import styles from '@/styles/Home.module.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type Props = {
  locale: string;
};

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      locale: locale,
      messages: (await import(`../../../../locales/${locale}.json`)).default,
    },
  };
}

export default function Home() {
  // const t = useTranslations('Home');
  // const data = useData();
  // console.log(data);

  return (
    <>
      <Head>
        <title>Betfinal</title>
        <meta
          name="description"
          content="Betfinal Monorepo Application with bonus shop"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header className={styles.header}>
          <h1></h1>
        </Header>
        <main className={styles.main}>
          <div className={styles.rotating_image_container}>
            <Image
              className={styles.rotating_image}
              src="/full_logo_betfinal.png"
              alt="betfinal logo"
              width={700}
              height={500}
              priority
            />
          </div>
        </main>
        <Footer className={styles.footer}>2025 Hristo Todorov</Footer>
      </div>
    </>
  );
}
