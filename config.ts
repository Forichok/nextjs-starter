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
    url: 'https://chibarocket.aqulasoft.com/api',
    // url: 'localhost:13001/api',
  },

  debug: true,
  dadataToken: '853ac440e30e22529e5fc2f9508ff3007fd54d87',
  admins: '9773028590+9167455079+9850801448',
};

export default config;
