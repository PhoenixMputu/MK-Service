import Image from 'next/image'
//import styles from './page.module.css'

export default function Home() {
  return (
    <header>
      <nav>
        <Image alt="Logo MK Service" src={''} />
        <ul>
          <li>
            <a href="#hero">Accueil</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
