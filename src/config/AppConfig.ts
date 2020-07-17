export const ENVEnum: any = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};


export const BaseUrlForJson: string = `http://${process.env.REACT_APP_CURRENT_APP_DOMAIN}/JsonData/`;
export const Environment: string = process.env.NODE_ENV || ENVEnum.DEVELOPMENT;
export const API_ENDPOINT: string =
  Environment === ENVEnum.DEVELOPMENT
    ? 'http://localhost:8080/api/v1'
    : 'http://api.drpolly.com/v1';

export const ImageURL: string =
  Environment === ENVEnum.DEVELOPMENT
    ? 'http://localhost:8000'
    : 'http://images.drpolly.com';

