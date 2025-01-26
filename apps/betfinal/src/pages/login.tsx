import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import { useTranslations } from 'next-intl';

import { Header } from '@repo/components/header';
import { Footer } from '@repo/components/footer';

import styles from '@/styles/Login.module.css';

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
      messages: (await import(`@shared-locales/${locale}.json`)).default,
    },
  };
}

export default function Login() {
  return (
    <>
      <Head>
        <title>Betfinal | Login</title>
        <meta
          name="description"
          content="Betfinal Monorepo Application with bonus shop. Login page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header className={styles.footer}>
          <h1>BETFINAL</h1>
        </Header>
        <main className={styles.main}>
          <LoginForm />
        </main>
        <Footer className={styles.footer}>2025 Hristo Todorov</Footer>
      </div>
    </>
  );
  c;
}
