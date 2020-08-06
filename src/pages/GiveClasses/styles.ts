import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '../../styles/themes';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  justify-content: center;
  padding: 40px;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${colors.text};
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: ${colors.purpleLight};
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
  max-width: 240px;
`;

export const ButtonConfirm = styled(RectButton)`
  marginVertical: 40px;
  background-color: ${colors.secondary};
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonConfirmText = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  font-family: 'Archivo_700Bold';
`;