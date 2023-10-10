import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 90,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    textAlign: 'center',

  },
  viewInformation: {
    flex: 1,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center',
  },
  input: {
    width: "90%",
    height: 45,
    borderBottomWidth: 1,
    borderColor: '#e9e9e9',
    marginBottom: 15,
    paddingHorizontal: 10,
    multiline: false,
  },

  containerButtons: {
    alignItems: 'center',
  },
  buttonHome: {
    backgroundColor: '#5446FF',
    padding: 15,
    borderRadius: 30,
    width: 200,  // Definindo a largura para 90% da largura disponível
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  buttonHomeTextTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonHomeTextSubtitle: {
    color: '#0000000',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    marginTop: 80,
  },
  buttonHomeTextRegister: {
    color: '#5446FF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default styles;
