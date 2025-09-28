import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

interface BotaoStartProps {
  title: string;
  onPress: () => void;
}

export const BotaoStart: React.FC<BotaoStartProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.botao}>
      <Text style={styles.texto}>{title}</Text>
    </Pressable>
  );
};

export default BotaoStart;