import 'the-new-css-reset/css/reset.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '~/shared/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
