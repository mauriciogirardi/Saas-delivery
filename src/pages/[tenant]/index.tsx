import type { NextPage } from 'next'

import { Banner } from '../../components/Banner'
import { HeaderWelcome } from '../../components/HeaderWelcome'

import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <div className={styles.container}>
      <HeaderWelcome mainColor="#FB9400" onSearch={handleSearch} />

      <div className={styles.content}>
        <Banner />
      </div>
    </div>
  )
}

export default Home
