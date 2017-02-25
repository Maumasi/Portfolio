
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const themes = {
  // background colors
  bgBlue: { backgroundColor: 'rgb(7, 55, 89)' },
  bgGreen: { backgroundColor: 'rgb(26, 188, 156)' },
  bgOrange: { backgroundColor: 'rgb(255, 190, 87)' },
  bgRed: { backgroundColor: 'rgb(238, 100, 86)' },
  bgLightBrown: { backgroundColor: '#C49A6C' },
  bgDarkBrown: { backgroundColor: '#8B5E3C' },

  // text colors
  textBlue: { color: 'rgb(7, 55, 89)' },
  textGreen: { color: 'rgb(26, 188, 156)' },
  textOrange: { color: 'rgb(255, 190, 87)' },
  textRed: { color: 'rgb(238, 100, 86)' },
  textLightBrown: { color: '#C49A6C' },
  textDarkBrown: { color: '#8B5E3C' },

  // font families
  futura: { fontFamily: 'Futura-Medium' },

  // box shadow
  boxShadow: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 3,
    elevation: 1,
  },

  // login screen icon
  // icon img: 79pt by 79pt
  logoIcon: require('Bread_Crumbs/src/views/resources/bread_crumbs_icon_79x79pt.png'),
  loginIcon: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    alignSelf: 'center',
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

  // login buttom
  loginButton: {
    width: width - 60,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: 'rgb(255, 190, 87)',
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  // login text
  loginText: {
    padding: 5,
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',
    letterSpacing: 1,
    fontSize: 20,
    fontFamily: 'Futura-Medium',
  },

  // error message
  errorStyles: {
    color: 'rgb(238, 100, 86)',
    textAlign: 'center',
    height: 25,
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },

  // loading message text
  loadingMessage: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 20,
  },

  // hambergerStack screen styles
  menuSide: {
    backgroundColor: 'rgba(26, 188, 156, 0.8)',
    borderLeftColor: 'rgba(0, 0, 0, 0.4)',
    borderLeftWidth: 2,
    flex: 2,
    // marginTop: 30,

  },

  emptyMenuSide: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flex: 1,
    // marginTop: 30,
  },
};

export default themes;

// Valid style keys:

// "width",
// "height",
// "top",
// "left",
// "right",
// "bottom",
// "minWidth",
// "maxWidth",
// "minHeight",
// "maxHeight",
// "margin",
// "marginVertical",
// "marginHorizontal",
// "marginTop",
// "marginBottom",
// "marginLeft",
// "marginRight",
// "padding",
// "paddingVertical",
// "paddingHorizontal",
// "paddingTop",
// "paddingBottom",
// "paddingLeft",
// "paddingRight",
// "borderWidth",
// "borderTopWidth",
// "borderRightWidth",
// "borderBottomWidth",
// "borderLeftWidth",
// "position",
// "flexDirection",
// "flexWrap",
// "justifyContent",
// "alignItems",
// "alignSelf",
// "overflow",
// "flex",
// "flexGrow",
// "flexShrink",
// "flexBasis",
// "zIndex",
// "shadowColor",
// "shadowOffset",
// "shadowOpacity",
// "shadowRadius",
// "transform",
// "transformMatrix",
// "decomposedMatrix",
// "scaleX",
// "scaleY",
// "rotation",
// "translateX",
// "translateY",
// "backfaceVisibility",
// "backgroundColor",
// "borderColor",
// "borderTopColor",
// "borderRightColor",
// "borderBottomColor",
// "borderLeftColor",
// "borderRadius",
// "borderTopLeftRadius",
// "borderTopRightRadius",
// "borderBottomLeftRadius",
// "borderBottomRightRadius",
// "borderStyle",
// "opacity",
// "elevation"
