import Head from 'next/head';
import { SEO } from '../config';

const Meta = () => (
    <Head>
        <title key="title">{SEO.title}</title>

        <meta
            key="description"
            name="description"
            content={SEO.description}
        />
        <meta
            key="og:type"
            name="og:type"
            content={SEO.openGraph.type}
        />
        <meta
            key="og:title"
            name="og:title"
            content={SEO.openGraph.title}
        />
        <meta
            key="og:description"
            name="og:description"
            content={SEO.openGraph.description}
        />
        <meta
            key="og:url"
            name="og:url"
            content={SEO.openGraph.url}
        />
        <meta
            key="og:image"
            name="og:image"
            content={SEO.openGraph.image}
        />
        <meta name="twitter:image" content={SEO.twitter.image} />
        <meta name="twitter:card" content={SEO.twitter.cardType} />
        <link rel="shortcut icon" href={SEO.favicon} />
    </Head>
);

export default Meta;