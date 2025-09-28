import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  botao: {
    width: 35,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', 
  },

  botaoDesabilitado: {
    backgroundColor: '#555', 
    borderColor: '#444',
  },
  textoDesabilitado: {
    color: '#888', 
  },
 
  botaoPressionado: {
    backgroundColor: '#e0e0e0', 
  },
});

