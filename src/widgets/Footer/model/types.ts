/** Basic interface with languages in the footer */
export interface FooterSocial {
  /** Label link */
  label: string;
  /** Route link */
  link: string;
  /** Icons of social media */
  icon: 'vk-filled' | 'telegram-filled' | 'whatsapp-filled';
}
