import React from 'react';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={settings.data.attributes.menuLink}
        blogName={settings.data.attributes.blogName}
        logo={settings.data.attributes.logo.data.attributes.url}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={settings.data.attributes.blogName}
          blogDescription={settings.data.attributes.blogDescription}
          logo={settings.data.attributes.logo.data.attributes.url}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.data.attributes.text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
