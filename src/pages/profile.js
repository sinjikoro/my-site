import React from 'react';
import Layout from '../layouts';
import { Title, SubTitle, Section, SubSection } from '../components/Parts';

class Profile extends React.Component {
  render() {
    return(
      <Layout>
        <Title>profile</Title>
        <Section title='career'>
          <SubSection title='独立系SIer'>
            <p>2009.04 - 2016.05</p>
            <p>System Engineer.</p>
          </SubSection>
          <SubSection title='小売業社内SE'>
            <p>2016.06 - 2019.01</p>
            <p>Managment</p>
          </SubSection>
          <SubSection title='業務コンサル'>
            <p>2019.02 - 2020.09(予定)</p>
            <p>Consultant</p>
          </SubSection>
        </Section>
      </Layout>
    )
  }
}

export default Profile