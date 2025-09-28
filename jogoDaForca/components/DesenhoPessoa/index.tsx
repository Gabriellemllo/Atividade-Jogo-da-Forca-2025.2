import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface DesenhoPessoaProps {
  erros: number;
}

export const DesenhoPessoa: React.FC<DesenhoPessoaProps> = ({ erros }) => {
 
  const partesDoCorpo = [
    <View key="cabeca" style={styles.cabeca} />,
    <View key="corpo" style={styles.corpo} />,
    <View key="bracoDireito" style={styles.bracoDireito} />,
    <View key="bracoEsquerdo" style={styles.bracoEsquerdo} />,
    <View key="pernaDireita" style={styles.pernaDireita} />,
    <View key="pernaEsquerda" style={styles.pernaEsquerda} />,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.forcaBase} />
      <View style={styles.forcaPoste} />
      <View style={styles.forcaViga} />
      <View style={styles.forcaCorda} />
      {partesDoCorpo.slice(0, erros)}
    </View>
  );
};

export default DesenhoPessoa;
