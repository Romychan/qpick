import { Link } from 'react-router-dom';

import { Logo } from '~/shared/ui/Logo';
import { Card } from '~/shared/ui/Card';
import { SwitchLanguage } from '~/shared/ui/SwitchLanguage';
import { Menu } from '~/shared/ui/Menu';
import { MAIN_ROUTE } from '~/shared/config';

import {
  FIRST_FOOTER_MENU,
  FOOTER_LANGUAGES,
  SECOND_FOOTER_MENU,
} from '../model/constants';

import styles from './Footer.module.scss';
import { FooterSocial } from './FooterSocial/FooterSocial';

/**
 * This component is used to display the footer of a web page.
 * It contains a logo, navigation links, and a selection of languages.
 */
export const Footer = () => {
  return (
    <footer className={styles.container} data-testid="footer">
      <div className="container">
        <Card className={styles.inner}>
          <Link to={MAIN_ROUTE} className={styles.logo}>
            <Logo />
          </Link>

          <Menu direction="vertical" items={FIRST_FOOTER_MENU} />

          <div className={styles.wrapper}>
            <Menu direction="vertical" items={SECOND_FOOTER_MENU} />
            <SwitchLanguage languages={FOOTER_LANGUAGES} />
          </div>

          <FooterSocial />
        </Card>
      </div>
    </footer>
  );
};
