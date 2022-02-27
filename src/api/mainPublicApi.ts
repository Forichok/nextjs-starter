import { AxiosInstance, AxiosResponse } from 'axios';
import apiConfig, { MainPublicApiConfig } from './apiConfig';
import { CustomApiClient } from './baseApi';

export class MainPublicApi extends CustomApiClient<MainPublicApiConfig> {
  constructor(mainHttpClient: AxiosInstance) {
    super(mainHttpClient, apiConfig.mainPublic);
  }

  test(): Promise<AxiosResponse> {
    return this.client.get(this.methods.test);
  }
}
