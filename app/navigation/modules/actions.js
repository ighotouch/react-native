const navigationActons = {
  DISPLAY_LOGIN: 'DISPLAY_LOGIN',
  DISPLAY_REGISTRATION: 'DISPLAY_REGISTRATION',
  DISPLAY_MAIN_PAGE: 'DISPLAY_MAIN_PAGE',
  DISPLAY_PRODUCT_PAGE: 'DISPLAY_PRODUCT_PAGE',
  DISPLAY_INTERNET_ERROR_PAGE: 'DISPLAY_INTERNET_ERROR_PAGE',
  GO_BACK: 'GO_BACK',
  displayLoginPage: () => ({
    type: navigationActons.DISPLAY_LOGIN,
  }),
  displayMainPage: () => ({
    type: navigationActons.DISPLAY_MAIN_PAGE,
  }),
  displayRegistrationPage: () => ({
    type: navigationActons.DISPLAY_REGISTRATION,
  }),
  displayInternetErrorPage: () => ({
    type: navigationActons.DISPLAY_INTERNET_ERROR_PAGE,
  }),
  back: () => ({
    type: navigationActons.GO_BACK,
  }),
};

export default navigationActons;
