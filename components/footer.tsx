import styles from './footer.module.css';

export default function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Copyright © 2021趁早找公司名称. All Rights Reserved
                </a>
            </footer>
        </div>
    );
}
