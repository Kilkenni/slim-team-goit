import styles from './RightSideBar.module.scss';
export default function RightSideBar() {
    return (
        <div className={styles.container}>
            <div className={styles.summery}>
                <h1 className={styles.header}>Зведення на <span></span></h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p className={styles.text}>Залишилось</p><span className={styles.text}>000 ккал</span>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.text}>Спожито</p><span className={styles.text}>000 ккал</span>
                    </li >
                    <li className={styles.item}>
                        <p className={styles.text}>Добова норма</p><span className={styles.text}>000 ккал</span>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.last__text}>n% від норми</p><span className={styles.text}>000 %</span>
                    </li>
                </ul>
            </div>
            <div className={styles.norecommended}>
                <h2 className={styles.header}>Не рекомендована їжа</h2>
                <p className={styles.text}>Всі бульйони / відвари, жирна риба, ікра і м'ясо, гриби, крупи
                    (просо, ячмінь, пшениця)</p>
            </div>
        </div>
    );
}