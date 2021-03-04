import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monopoly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <picture>
            <source media="(min-width: 769px)" srcSet="/images/hat_big.png"/>
            <img src="/images/hat_normal.png" alt="hat-monopoly"/>
          </picture>
          <h1> In construction. . .</h1>
        </section>
        <section>
          <div>
            <div>
              <h3>
                P
              </h3>
            </div>
            <div>
              <h2>
                WILBER
              </h2>
            </div>
            <div>
              <h3>
                P
              </h3>
            </div>
            <div>
              <h2>
                GABRIEL
              </h2>
            </div>
          </div>
        </section>
      </main>
      <footer>
          <div>
            <a href="https://github.com/The-Best-String/Monopoly" target="_blank">
              <img src="/icons/github_logo_white.png" alt="github_logo"/>
            </a>
          </div>
      </footer>
    </div>
  )
}
