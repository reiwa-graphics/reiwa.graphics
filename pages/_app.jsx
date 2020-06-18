import Router from 'next/router'
import * as ga from '../libs/ga'
import './style.scss';

Router.events.on('routeChangeComplete', url => ga.pageview(url))

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}