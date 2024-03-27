import { Icon } from '~/shared/ui/Icon';
import { Menu } from '~/shared/ui/Menu';

import { FOOTER_SOCIAL_LINK } from '../../model/constants';

import styles from './FooterSocial.module.scss';

/** This component is used to display links to social media in `<Footer />` */
export const FooterSocial = () => {
  return (
    <Menu>
      {FOOTER_SOCIAL_LINK.map((item) => (
        <li key={item.link} className={styles.item}>
          <a
            href={item.link}
            aria-label={item.label}
            title={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Icon name={item.icon} size={30} />
          </a>
        </li>
      ))}
    </Menu>
  );
};
