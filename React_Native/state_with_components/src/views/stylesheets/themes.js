
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const themes = {
  // box shadow
  boxShadow: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 3,
    elevation: 1,
  },

  // login form fields
  loginInput: {
    height: 45,
    width: width - 60,
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8B5E3C',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },

};

export default themes;
