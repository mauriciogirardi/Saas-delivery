import "styled-components"
import { themeDefault } from './theme/themeDefault'

export type Theme = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
