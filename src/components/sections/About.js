import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        about_programmer: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "programmer" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        about_community: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "community" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        about_new_technologies: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "new_technologies" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Bridging gap between theory and practice</h2>
              <p>
                Developer Student Clubs are university based community groups
                for students interested in Google developer technologies.
                Students from all undergraduate or graduate programs with an
                interest in growing as a developer are welcome. By joining a
                DSC, students grow their knowledge in a peer-to-peer learning
                environment and build solutions for local businesses and their
                community.
              </p>
            </div>
            <Art>
              <Img fluid={data.about_programmer.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.about_community.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Build good things, together</h2>
              <p>
                Meet other students on campus interested in developer
                technologies. All are welcome, including those with diverse
                backgrounds and different majors.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Let's learn new technologies</h2>
              <p>
                Learn about a wide range of technical topics where new skills
                are gained through hands-on workshops, in-person training and
                project building activities.
                <br />
                <br />
                <StyledExternalLink href="https://chat.whatsapp.com/G1UUfs6dv7pBOVyb9F1fuH">
                  Join our Whatsapp Group for all updates &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </div>
            <Art>
              <Img fluid={data.about_new_technologies.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.whatsapp};
  }
`;

export default About;
