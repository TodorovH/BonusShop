import type { NextPage } from 'next';
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

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
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
      <main className={styles.main}>
        <form className="login-form">
          <input type="text" placeholder="Write your name here..." />
          <input type="submit" value="JOUN US" />
        </form>
      </main>
    </>
  );
};

export default SignIn;
