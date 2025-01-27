import type { NextPage } from 'next';
import { useTranslations } from 'next-intl';

interface Props {}

const LoginForm: NextPage = (props): JSX.Element => {
  return (
    <>
      <form className="login-form">
        <input type="text" placeholder="Write your name here..." />
        <input type="submit" value="JOUN US" />
      </form>
    </>
  );
};

export default LoginForm;
