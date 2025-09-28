import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 40, 
    paddingHorizontal: 10,
  },
  centralizar: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 34, 
    fontWeight: 'bold',
    color: '#fff', 
  },
  subtituloTema: {
    fontSize: 20, 
    fontWeight: '600',
    color: '#ccc', 
    marginBottom: 15, 
  },
  palavraContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  letraDaPalavra: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', 
    margin: 4,
    paddingBottom: 5,
    borderBottomWidth: 3,
    borderBottomColor: '#fff', 
    minWidth: 25,
    textAlign: 'center',
  },
  espacoNaPalavra: {
    width: 15,
    margin: 4,
  },
  teclado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6, 
    paddingHorizontal: 5, 
    maxWidth: '100%', 
  },
  textoResultado: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  textoVenceu: {
    color: '#22c55e', 
  },
  textoPerdeu: {
    color: '#ef4444', 
  },
  palavraRevelada: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  palavraCorreta: {
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },

  letrasTentadasContainer: {
    marginVertical: 10,
    alignItems: 'flex-start',
    width: '90%',
    gap: 5,
  },
  letrasTentadasTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ccc',
  },
  listaLetras: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  letraCorreta: {
    color: '#22c55e', 
    fontWeight: 'bold',
  },
  letraIncorreta: {
    color: '#ef4444',
    fontWeight: 'bold',
  },
});

