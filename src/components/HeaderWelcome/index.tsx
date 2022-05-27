import { KeyboardEvent, useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import * as S from './styles'

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
    <S.Header>
      <div>
        <S.Title>Seja Bem-Vindo(a) 👋</S.Title>
        <S.SubTitle>Oque deseja pra hoje?</S.SubTitle>
      </div>

      <S.Wrapper focused={focused} mainColor={mainColor}>
        <MagnifyingGlass
          onClick={() => onSearch(searchValue)}
          color={mainColor}
          size={20}
        />
        <S.InputSearch
          type="search"
          placeholder="Digite o nome do seu produto"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </S.Wrapper>
    </S.Header>
  )
}
