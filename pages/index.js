import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Search from '../components/search';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <span>
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
        </span>
        {' - '}
        <span>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </span>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Search />
      </section>
    </Layout>
  );
}
