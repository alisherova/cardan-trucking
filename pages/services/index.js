import Head from 'next/head'
import Footer from '../../components/Footer';
import Navbar from "../../components/Navbar";
import styles from '../../styles/Home.module.css';
import Cards from './Cards';
import Contact from '../about-us/Contact'

export default function index() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header>
                <Navbar/>
            </header>

            <main>
                <Cards/>
                <Contact/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}