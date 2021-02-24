import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monopoly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Monopoly</h1>
    </div>
  )
}
