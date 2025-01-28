import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useState, FormEventHandler, JSX } from 'react';

// interface Props {}

export const LoginForm: NextPage = (): JSX.Element => {
  const t = useTranslations('login-form');
  const [username, setUsername] = useState('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      username: username,
    });

    console.log(res);
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t('username')}
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input type="submit" value={t('join-us')} />
      </form>
    </>
  );
};
