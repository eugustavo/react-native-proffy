import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import { Container, ImageBanner, Title, TitleBold, ButtonsContainer, Button, ButtonText, TotalConnections } from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ImageBanner source={landingImg} />

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <Button study onPress={() => navigate('Study')}>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button onPress={() => navigate('GiveClasses')}>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
          Total de 285 conexões já realizadas {' '}
          <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
}

export default Landing;