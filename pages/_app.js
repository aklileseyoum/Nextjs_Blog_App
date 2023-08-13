import '@/styles/globals.css'
import { GlobalProvider } from '../components/GlobalContext';

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider><Component {...pageProps} /></GlobalProvider>
  )
}
