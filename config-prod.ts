export interface Config {
  apiGateway: {
    url: string;
  };
  debug?: boolean;
  dadataToken: string;
  admins: string;
}
const config: Config = {
  apiGateway: {
    url: 'https://chibarocket.ru/api',
  },

  debug: false,
  dadataToken: '8a76bbab257895151f557b3e20ee1facf5dd6f4f',
  admins: '9773028590+9167455079+9850801448',
};

export default config;
