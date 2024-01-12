import style from './Layout.module.css'
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();

    const onClickHeader = () => {
        router.push("/");
    }
    return (<div>
        <header className={style.header} onClick={onClickHeader}>POKUDING&apos;S NARAS🌎</header>
        <main className={style.main}>
            {children}
        </main>
    </div>);
}