import Image from 'next/image'
import styles from './page.module.css'
import logo from './assets/logo.png'
import groupCircle from './assets/group-1.svg'
import fleur from './assets/vector.svg'
import sheet from './assets/vector1.svg'
import sheet2 from './assets/vector2.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import line_bar from './assets/line-1.svg'
import heroImage from './assets/hero-image.svg'
import menu from './assets/menu.svg'
import rameau from './assets/rameau.svg'
import rameauInvercer from './assets/invercer-rameau.svg'
import tor from './assets/tor.svg'
import dish from './assets/dish.png'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Image alt="Logo MK Service" height={100} src={logo} width={102} />
          <input className={styles.header_input} id="check" type="checkbox" />
          <label className={styles.header_label} for="check">
            <Image alt="Icon Menu" height={20} src={menu} width={20} />
          </label>
          <ul className={styles.nav_links}>
            <li className={styles.link}>
              <a href="#hero">Accueil</a>
            </li>
            <li className={styles.link}>
              <a className={styles.link} href="#Services">
                Services
              </a>
            </li>
            <li className={styles.link}>
              <a className={styles.link} href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li className={styles.link}>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.hero} id="hero">
          <Image
            alt="Background Circle"
            className={styles.circle}
            height={800}
            src={groupCircle}
            width={800}
          />
          <Image
            alt="Background Fleur"
            className={styles.fleur}
            height={200}
            src={fleur}
            width={250}
          />
          <Image
            alt="Background Sheet"
            className={styles.sheet}
            height={250}
            src={sheet}
            width={150}
          />
          <Image
            alt="Background Sheet2"
            className={styles.sheet_1}
            height={200}
            src={sheet2}
            width={150}
          />
          <div className={styles.hero_text}>
            <h1 className={styles.headline}>
              Nous fournissons le meilleur service de la ville
            </h1>
            <p className={styles.hero_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.links_network}>
              <Image
                alt="Icon Facebook"
                className={styles.network_icon}
                height={45}
                src={facebook}
                width={45}
              />
              <Image
                alt="Icon Instagram"
                className={styles.network_icon}
                height={45}
                src={instagram}
                width={45}
              />
              <Image
                alt="Icon Twitter"
                className={styles.network_icon}
                height={45}
                src={twitter}
                width={45}
              />
              <Image
                alt="Line bar"
                className={styles.network_icon}
                height={3}
                src={line_bar}
                width={143}
              />
            </div>
          </div>
          <div className={styles.hero_image}>
            <Image alt="Line bar" height={500} src={heroImage} width={400} />
          </div>
        </section>
        <section className={styles.service_section}>
          <Image
            alt="Background Rameau"
            className={styles.rameau}
            height={300}
            src={rameau}
            width={400}
          />
          <Image
            alt="Background Rameau Invercer"
            className={styles.rameauInvercer}
            height={150}
            src={rameauInvercer}
            width={270}
          />
          <h2 className={styles.service_title}>Nos Services</h2>
          <p className={styles.service_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className={styles.service_container}>
            <div className={styles.service_item}>
              <Image
                alt="Background Oignon"
                className={styles.tor1}
                height={102}
                src={tor}
                width={100}
              />
              <Image
                alt="Service"
                className={styles.service_item_image}
                height={102}
                src={dish}
                width={100}
              />
              <h3 className={styles.service_item_title}>Lumpia with Suace</h3>
              <p className={styles.service_item_description}>
                Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className={styles.service_item}>
              <Image
                alt="Background Oignon"
                className={styles.tor1}
                height={102}
                src={tor}
                width={100}
              />
              <Image
                alt="Service"
                className={styles.service_item_image}
                height={102}
                src={dish}
                width={100}
              />
              <h3 className={styles.service_item_title}>Lumpia with Suace</h3>
              <p className={styles.service_item_description}>
                Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className={styles.service_item}>
              <Image
                alt="Background Oignon"
                className={styles.tor1}
                height={102}
                src={tor}
                width={100}
              />
              <Image
                alt="Service"
                className={styles.service_item_image}
                height={102}
                src={dish}
                width={100}
              />
              <h3 className={styles.service_item_title}>Lumpia with Suace</h3>
              <p className={styles.service_item_description}>
                Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className={styles.service_item}>
              <Image
                alt="Background Oignon"
                className={styles.tor1}
                height={102}
                src={tor}
                width={100}
              />
              <Image
                alt="Service"
                className={styles.service_item_image}
                height={102}
                src={dish}
                width={100}
              />
              <h3 className={styles.service_item_title}>Lumpia with Suace</h3>
              <p className={styles.service_item_description}>
                Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
