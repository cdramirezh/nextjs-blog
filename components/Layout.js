import styles from "./layout.module.css";

export default function Layout({ children }) {
	console.log(styles)
	return <div className={styles.container}>{children}</div>;
}
