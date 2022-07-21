import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps { }

export function Footer(props: FooterProps) {
  return (
    <footer className={styles['container']}>
      <span>I'm Footer</span>
    </footer>
  );
}

export default Footer;
