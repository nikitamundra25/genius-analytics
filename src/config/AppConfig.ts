export const ENVEnum: any = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
};

export const Environment: string = process.env.NODE_ENV || ENVEnum.DEVELOPMENT;

export const BaseUrlForJson: string =
  Environment === ENVEnum.DEVELOPMENT
    ? `${process.env.REACT_APP_CURRENT_APP_DOMAIN}/JsonData/`
    : "http://192.249.123.124:8012/JsonData/";

export const API_ENDPOINT: string =
  Environment === ENVEnum.DEVELOPMENT
    ? "http://localhost:8080/api/v1"
    : "http://api.drpolly.com/v1";



export const auth0Domain:any = Environment === ENVEnum.DEVELOPMENT ? process.env.REACT_APP_AUTH0_DOMAIN : "dev-2eewfo4f.au.auth0.com"
export const auth0ClientId:any = Environment === ENVEnum.DEVELOPMENT ? process.env.REACT_APP_AUTH0_CLIENT_ID : "2Ut63UeNsoDIDsFvLmeWaeW1n90kmOU8"