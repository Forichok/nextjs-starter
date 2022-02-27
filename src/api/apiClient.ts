import axios from 'axios';
import config, { Config } from '../../config';
import { MainPublicApi } from './mainPublicApi';

const { apiGateway } = config as Config;

export const httpClient = axios.create({
  baseURL: apiGateway.url,
  timeout: 5000,
});

export const mainPublicApi = new MainPublicApi(httpClient);
