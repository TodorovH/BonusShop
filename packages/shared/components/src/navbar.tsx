'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from '@repo/components/button';

export const Navbar = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [locale, setLocale] = useState<string>('');
  const router = useRouter();
  const t = useTranslations('common');

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `BETFINAL_LOCALE=${newLocale};`;
    router.refresh();
  };

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('BETFINAL_LOCALE='))
      ?.split('=')[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      changeLocale(browserLocale);
    }
    document.querySelector('html')!.dir =
      `${cookieLocale === 'en' ? 'LTR' : 'RTL'}`;
    const loginBtn = document.querySelector('.login-btn')!;
    loginBtn.style.width = `${cookieLocale === 'en' ? '70px' : '100px'}`;
  }, [router]);

  return (
    <nav className={className}>
      {children}
      <Button
        className={`nav-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => changeLocale('en')}
      >
        {t('en')}
      </Button>
      <Button
        className={`nav-btn ${locale === 'ar' ? 'active' : ''}`}
        onClick={() => changeLocale('ar')}
      >
        {t('ar')}
      </Button>
    </nav>
  );
};
