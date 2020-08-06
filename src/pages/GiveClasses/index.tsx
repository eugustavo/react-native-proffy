import React from 'react';
import { useNavigation } from '@react-navigation/native';

import bgImage from '../../assets/images/give-classes-background.png';

import { Container, ImageBackground, Title, Description, ButtonConfirm, ButtonConfirmText } from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <ImageBackground resizeMode="contain" source={bgImage}>
        <Title>
          Quer ser um Proffy?
        </Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Description>
      </ImageBackground>

      <ButtonConfirm onPress={() => goBack()}>
        <ButtonConfirmText> Tudo bem </ButtonConfirmText>
      </ButtonConfirm>
    </Container>
  );
}

export default GiveClasses;