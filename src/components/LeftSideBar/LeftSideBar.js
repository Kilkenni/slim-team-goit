import styles from './LeftSideBar.module.scss';

export default function RightSideBar({ children }) {
    return (
        <div className={styles.container}>
            { children }
        </div>
    );
}