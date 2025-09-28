import React, { useState } from 'react';
import { View, Text } from 'react-native';

import BotaoStart from '@/components/BotaoStart';
import DesenhoPessoa from '@/components/DesenhoPessoa';
import TeclaLetras from '@/components/TeclaLetras';

import { styles } from './styles';

export default function App() {
  const [palavraSecreta, setPalavraSecreta] = useState<string[]>([]);
  const [palavraExibida, setPalavraExibida] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [letrasJaTentadas, setLetrasJaTentadas] = useState<string[]>([]);

  const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
  const listaDePalavras = [
    'homem de ferro', 'capitao america', 'thor', 'hulk', 'viuva negra',
    'gaviao arqueiro', 'homem aranha', 'pantera negra', 'doutor estranho',
    'feiticeira escarlate', 'visao', 'falcao', 'soldado invernal', 'maquina de combate',
    'homem formiga', 'vespa', 'capita marvel', 'nick fury', 'senhor das estrelas',
    'gamora', 'drax', 'groot', 'rocket raccoon', 'nebulosa', 'loki', 'valquiria',
    'shang chi', 'blade', 'demolidor', 'justiceiro', 'wolverine', 'tempestade',
    'ciclope', 'jean grey', 'motoqueiro fantasma'
  ];

  function iniciarNovoJogo() {
    const palavraEscolhida = listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)];
    setPalavraSecreta(palavraEscolhida.split(""));
    setPalavraExibida(palavraEscolhida.split('').map(char => (char === ' ' ? ' ' : '_')));
    setTentativasRestantes(6);
    setLetrasJaTentadas([]);
  }

  const jogadorVenceu = palavraExibida.length > 0 && !palavraExibida.includes("_");
  const jogadorPerdeu = tentativasRestantes <= 0;
  const jogoAcabou = jogadorVenceu || jogadorPerdeu;

  function verificarLetra(letra: string) {
    if (letrasJaTentadas.includes(letra) || jogoAcabou) return;

    setLetrasJaTentadas((prev) => [...prev, letra]);

    if (palavraSecreta.includes(letra)) {
      setPalavraExibida((prev) =>
        prev.map((l, i) => (palavraSecreta[i] === letra ? letra : l))
      );
    } else {
      setTentativasRestantes((prev) => prev - 1);
    }
  }
  
  const getLetrasCorretas = () => {
    return letrasJaTentadas.filter(letra => palavraSecreta.includes(letra)).join(', ');
  };

  const getLetrasIncorretas = () => {
    return letrasJaTentadas.filter(letra => !palavraSecreta.includes(letra)).join(', ');
  };

  return (
    <View style={styles.container}>
      <View style={styles.centralizar}>
        <Text style={styles.titulo}>Jogo da Forca</Text>
        <Text style={styles.subtituloTema}>Personagens da Marvel</Text>
      </View>
      
      <DesenhoPessoa erros={6 - tentativasRestantes} />

      <View style={styles.palavraContainer}>
        {palavraExibida.map((letra, index) => (
          <Text key={index} style={letra === ' ' ? styles.espacoNaPalavra : styles.letraDaPalavra}>
            {letra.toUpperCase()}
          </Text>
        ))}
      </View>

      {!jogoAcabou && palavraSecreta.length > 0 && (
        <View style={styles.letrasTentadasContainer}>
          <Text style={styles.listaLetras}>
            <Text style={styles.letrasTentadasTitulo}>Corretas: </Text>
            <Text style={styles.letraCorreta}>{getLetrasCorretas()}</Text>
          </Text>
          <Text style={styles.listaLetras}>
            <Text style={styles.letrasTentadasTitulo}>Incorretas: </Text>
            <Text style={styles.letraIncorreta}>{getLetrasIncorretas()}</Text>
          </Text>
        </View>
      )}
      
      {jogoAcabou ? (
        <View style={styles.centralizar}>
          {jogadorVenceu ? (
            <Text style={[styles.textoResultado, styles.textoVenceu]}>
              Parabéns, você acertou!
            </Text>
          ) : (
            <View style={styles.centralizar}>
              <Text style={[styles.textoResultado, styles.textoPerdeu]}>
                Você errou!
              </Text>
              <Text style={styles.palavraRevelada}>
                A palavra era: <Text style={styles.palavraCorreta}>{palavraSecreta.join("")}</Text>
              </Text>
            </View>
          )}
          <BotaoStart onPress={iniciarNovoJogo} title="Jogar Novamente" />
        </View>
      ) : palavraSecreta.length > 0 ? (
        <View style={styles.teclado}>
          {alfabeto.map((letra) => (
            <TeclaLetras
              key={letra}
              title={letra}
              onPress={() => verificarLetra(letra)}
              disabled={letrasJaTentadas.includes(letra)}
            />
          ))}
        </View>
      ) : (
        <BotaoStart onPress={iniciarNovoJogo} title="Começar Jogo" />
      )}
    </View>
  );
}

