import Head from 'next/head';
import { Fragment } from 'react';

import AboutUs from '../../components/posts/all-posts';
import { getAboutUs } from '../../lib/posts-util';

function AboutUsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>More About Us</title>
        <meta
          name='description'
          content='Learn how Neighborhood Works, Inc. improves communities.'
        />
      </Head>
      <AboutUs posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const AboutUs = getAboutUs();

  return {
    props: {
      posts: AboutUs,
    },
  };
}

export default AboutUsPage;
