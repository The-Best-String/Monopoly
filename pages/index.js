import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Monopoly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      </header>
      <main>
        <section>
          <figure>
            <img src="/images/hat_normal.png" alt="hat-monopoly"/>
            <h1> In construction. . .</h1>
          </figure>
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
        <section>
          <a href="https://github.com/The-Best-String/Monopoly"> Github proyect</a>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  )
}
