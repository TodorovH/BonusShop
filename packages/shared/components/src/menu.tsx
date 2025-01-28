import { useTranslations } from 'next-intl';

import { LinkButton } from './link-button';
import { LoginButton } from './login-button';

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
