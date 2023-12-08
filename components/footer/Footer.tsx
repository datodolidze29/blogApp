import styles from './Footer.module.scss'
const Footer = () => {
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.footer}>
                <span className={styles.footerItem}>© 2023</span>
                <span className={styles.footerItem}>Twitter</span>
                <span className={styles.footerItem}>LinkedIn</span>
                <span className={styles.footerItem}>Email</span>
                <span className={styles.footerItem}>RSS Feed</span>
                <span className={styles.footerItem}>Add to Feedly</span>
            </div>
        </div>
    )
}
export default Footer;