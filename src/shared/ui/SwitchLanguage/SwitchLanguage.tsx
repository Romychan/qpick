import { useState } from 'react';

import { cl } from '../../lib/utils';
import { Button } from '../Button';
import { Icon } from '../Icon';

import { LanguageOption } from './types';
import styles from './SwitchLanguage.module.scss';

interface ISwitchLanguageProps {
  /** List of languages */
  languages: LanguageOption[];
}

/** This component is used to switch the language on the page */
export const SwitchLanguage = ({ languages }: ISwitchLanguageProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0].value);

  return (
    <div className={styles.container}>
      <Icon name="planet" className={styles.icon} size={20} />
      {languages.map(({ value, label }) => (
        <Button
          key={value}
          size="sm"
          variant="link-primary"
          className={cl(styles.button, {
            [styles.active]: currentLanguage === value,
          })}
          onClick={() => setCurrentLanguage(value)}
          data-testid="language-button"
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
