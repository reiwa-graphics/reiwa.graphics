import * as gtag from '../libs/ga'
import '../public/style.scss'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}