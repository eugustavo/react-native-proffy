import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { colors } from '../../styles/themes';

export const Container = styled.View`
  padding: 40px;
  background-color: ${colors.background};
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${colors.text};
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  marginVertical: 40px;
`;
