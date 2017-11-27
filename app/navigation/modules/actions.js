const navigationActons = {
  DISPLAY_LOGIN: 'DISPLAY_LOGIN',
  DISPLAY_REGISTRATION: 'DISPLAY_REGISTRATION',
  DISPLAY_MAIN_PAGE: 'DISPLAY_MAIN_PAGE',
  DISPLAY_PRODUCT_PAGE: 'DISPLAY_PRODUCT_PAGE',
  DISPLAY_ERROR_PAGE: 'DISPLAY_ERROR_PAGE',
  displayLoginPage: () => ({
    type: navigationActons.DISPLAY_LOGIN,
  }),
  displayMainPage: () => ({
    type: navigationActons.DISPLAY_MAIN_PAGE,
  }),
  displayRegistrationPage: () => ({
    type: navigationActons.DISPLAY_REGISTRATION,
  }),
  displayErrorPage: () => ({
    type: navigationActons.DISPLAY_ERROR_PAGE,
  }),
};

export default navigationActons;
