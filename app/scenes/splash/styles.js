import { Constants } from 'expo';

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2f6c6a',
    height: null,
    width: null,
  },
  statusBar: {
    backgroundColor: '#000',
    height: Constants.statusBarHeight,
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
  logo: {
    aspectRatio: 1.5,
    resizeMode: 'contain',
    height: 200,
    width: 170,
  },
};
