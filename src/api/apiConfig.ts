export interface ApiConfig {
  mainPublic: MainPublicApiConfig;
}

export interface MainPublicApiConfig {
  test: string;
}

const apiConfig: ApiConfig = {
  mainPublic: {
    test: '/public/test',
  },
};

export default apiConfig;
