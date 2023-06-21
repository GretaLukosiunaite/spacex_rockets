import axios from 'axios';
import { IRocket } from './types';

const httpClient = axios.create({
  baseURL: 'https://api.spacexdata.com',
  timeout: 1000,
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default httpClient;

class Api_instance {
  private items: string;

  constructor() {
    this.items = '/v3/rockets';
  }

  public async getProducts(): Promise<IRocket[]> {
    const items: IRocket[] = await httpClient.get(this.items);

    return items;
  }

  public async getProduct(id: string): Promise<IRocket> {
    const item: IRocket = await httpClient.get(this.items + '/' + id);

    return item;
  }

  public async addProduct(item: IRocket) {
    const response = await httpClient.post(this.items, item);

    return response;
  }


}

export const API = new Api_instance();
