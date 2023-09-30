import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewInformation: {
    flex: 1,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  containerButtons: {
    alignItems: 'center',
  },
  buttonHome: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonHomeTextTitle: {
    color: '#5446FF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonHomeTextSubtitle: {
    color: '#5446FF',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
