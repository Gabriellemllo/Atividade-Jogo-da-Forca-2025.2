import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './styles';

interface TeclaLetrasProps {
  title: string;
  onPress: () => void;
  disabled: boolean;
}

export const TeclaLetras: React.FC<TeclaLetrasProps> = ({ title, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.botao,
        disabled && styles.botaoDesabilitado,
        pressed && !disabled && styles.botaoPressionado,
      ]}
    >
      <Text style={[styles.textoBotao, disabled && styles.textoDesabilitado]}>
        {title.toUpperCase()}
      </Text>
    </Pressable>
  );
};

export default TeclaLetras;