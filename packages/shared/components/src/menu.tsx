import { useTranslations } from 'next-intl';

import { LinkButton } from '@repo/components/linkbutton';
import { LoginButton } from '@repo/components/loginbutton';
import { signIn } from 'next-auth/react';

export const Menu = () => {
  const t = useTranslations('common');

  return (
    <menu>
      <div className="links-container">
        <LinkButton className={`main-nav-btn`} destinationPage="/">
          {t('home')}
        </LinkButton>
        <LinkButton className={`main-nav-btn`} destinationPage="/bonus">
          {t('bonusshop')}
        </LinkButton>
        <LinkButton className={`main-nav-btn`} destinationPage="/deposit">
          {t('deposit')}
        </LinkButton>
      </div>
      <LoginButton className={`login-btn`}>{t('login')}</LoginButton>
    </menu>
  );
};
