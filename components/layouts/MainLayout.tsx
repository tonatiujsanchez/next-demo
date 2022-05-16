import Head from 'next/head'
import { FC } from 'react'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'
import { PropsChildren } from '../../interfaces/index';


const MainLayout:FC<PropsChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home | Initial Demo</title>
                <meta name="description" content="Home Page of Initial Demo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                { children }
            </main>
        </div>
    )
}

export default MainLayout