import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    secondColor: string;
    background: string;
    buttonBackground: string;
    borderColor: string;
  }
}