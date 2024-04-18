import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';

type ResponseType<T> = {
  data: T | null;
  loading: boolean;
  error: any;
  getData: () => Promise<void>;
  refreshData: () => Promise<void>;
};

const CONFIG_URL = 'https://rimac-front-end-challenge.netlify.app/api';

export const useAxiosGet = <T>(url: string): ResponseType<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const axiosInstance = axios.create({
    baseURL: CONFIG_URL,
  });

  const getData = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<T> = await axiosInstance.get<T>(url);
      setData(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    setData(null);
    setLoading(true);
    await getData();
  };

  return {data, loading, error, getData, refreshData};
};
