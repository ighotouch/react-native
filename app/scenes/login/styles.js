import { Constants } from 'expo';

export default {
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#ecf0f1',
    height: null,
    width: null,
  },
  logoContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  title: {
    fontSize: 24,
    backgroundColor: '#00000000',
  },
  paragraph: {
    margin: 24,
    fontSize: 12,
    backgroundColor: '#00000000',
    marginTop: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  inputGroup: {
    backgroundColor: '#F8F8F8',
    borderColor: '#fff',
    height: 35,
    marginBottom: 10,
  },
  thumbnail: {
    width: 53,
    height: 32,
  },
  input: {
    color: '#000',
    padding: 0,
    fontSize: 16,
  },
  buttonBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 30,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
  },
  buttonRedText: {
    color: '#d30021',
  },
  buttonWhite: {
    backgroundColor: '#fff', 
  },
  buttonRed: {
    backgroundColor: '#d30021',
  },
  text: {
    color: '#898989',
    backgroundColor: '#00000000',
    fontSize: 14,
  },
  link: {
    color: '#0099CC',
  },
};
