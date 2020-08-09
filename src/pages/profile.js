import React from 'react';
import Layout from '../layouts';
import { Title, SubTitle, Section, SubSection } from '../components/Parts';

class Profile extends React.Component {
  render() {
    return(
      <Layout>
        <Section title='career'>
          <SubSection title='独立系SIer'>
            <p>2009.04 - 2016.05 : System Engineer.</p>
          </SubSection>
          <SubSection title='小売業社内SE'>
            <p>2016.06 - 2019.01 : Team Leader.</p>
          </SubSection>
          <SubSection title='業務コンサル'>
            <p>2019.02 - 2020.09 : Consultant</p>
          </SubSection>
        </Section>
        <Section title='skill'>
          <SubSection>
            <p>VB.net</p>
            <p>C#</p>
            <p>SQL</p>
            <p>RPA</p>
          </SubSection>
        </Section>
      </Layout>
    )
  }
}

export default Profile