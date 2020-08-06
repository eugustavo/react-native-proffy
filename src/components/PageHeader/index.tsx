import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, TopBar, BackButton, Title } from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <TopBar>
        <BackButton onPress={() => navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </BackButton>

        <Image source={logoImg} resizeMode="contain"/>
      </TopBar>

      <Title>{title}</Title>
    </Container>
  );
}

export default PageHeader;