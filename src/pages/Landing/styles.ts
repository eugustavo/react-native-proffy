import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '../../styles/themes';

interface ButtonProps {
  study?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  padding: 40px;
`;

export const ImageBanner = styled.Image`
  width: 100%;
  resizeMode: contain;
`;

export const Title = styled.Text`
  color: ${colors.text};
  font-family: 'Poppins_400Regular';
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`; 

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)<ButtonProps>`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;

  background-color: ${props => props.study ? `${colors.primary}` : `${colors.secondary}`}
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${colors.text};
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${colors.purpleLight};
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;



