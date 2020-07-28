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

export const ImageURL: string =
  Environment === ENVEnum.DEVELOPMENT
    ? "http://localhost:8000"
    : "http://images.drpolly.com";
