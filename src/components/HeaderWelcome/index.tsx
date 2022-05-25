import { KeyboardEvent, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import styles from './HeaderWelcome.module.css'

interface HeaderWelcomeProps {
  mainColor: string
  onSearch: (searchValue: string) => void
}

const KEY_CODE_ENTER = 'Enter'
const KEY_CODE_NUMPAD_ENTER = 'NumpadEnter'

export const HeaderWelcome = ({ mainColor, onSearch }: HeaderWelcomeProps) => {
  const [focused, setFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    const enterKeyWasClicked =
      event.code !== KEY_CODE_ENTER && event.code !== KEY_CODE_NUMPAD_ENTER

    if (searchValue || enterKeyWasClicked) {
      onSearch(searchValue)
    }
  }

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Seja Bem-Vindo(a) 👋</h1>
        <span className={styles.subtitle}>Oque deseja pra hoje?</span>
      </div>

      <div
        className={styles.wrapper__search}
        style={{ borderColor: focused ? mainColor : '#fff' }}
      >
        <MagnifyingGlass
          onClick={() => onSearch(searchValue)}
          color={mainColor}
          size={20}
        />
        <input
          className={styles.input__search}
          type="search"
          placeholder="Digite o nome do seu produto"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </header>
  )
}
