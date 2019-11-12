import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What is DSC?',
    content: () => (
      <>
        Developer Students’ Club is a Google Developers program for university students, designed to help them build their development skills in various domains. It is an officially recognized Students’ Club.
      </>
    ),
  },
  {
    title: 'What do we do?',
    content: () => (
      <>
        Developer Students Club-KITRC is a Google recognized student body at KITRC which directly reports to Google Developers for their activities and is supported by the tech giant. DSC-KITRC conducts workshops, seminars and other fun activities which help the students connect with Google and learn about their technologies.
      </>
    ),
  },
  {
    title: 'How can I join?',
    content: () => (
      <>
        Just join our Whatsapp Group and attend events we host. Its completely free of cost.
      </>
    ),
  },
  {
    title: 'I am currently in 1st year, should I join?',
    content: () => (
      <>
        Yes! It is always better to start early so that you can get an edge over others.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
