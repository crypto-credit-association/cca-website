import '../styles/globals.css'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
