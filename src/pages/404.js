import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default NotFoundPage;
