import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface OptionalHeader {
  [key: string]: string;
}

const authHeader = () => {
  if (typeof window !== "undefined") {
    return { Authorization: localStorage.getItem("accessTokenTest") || "" };
  }
};

const client = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    // 'Content-Type': 'application/json',
    ...authHeader(),
  },
});

class DataService {
  static get(
    path: string,
    params = {},
    optionalHeader: OptionalHeader = {}
  ): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      method: "GET",
      params: { ...params },

      url: path,
      headers: { ...authHeader(), ...optionalHeader },
    };
    return client(config);
  }

  static post(
    path: string = "",
    data: any = {},
    optionalHeader: OptionalHeader = {}
  ): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    };
    return client(config);
  }

  static patch(path: string = "", data: any = {}): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      method: "PATCH",
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    };
    return client(config);
  }

  static delete(path: string = "", data: any = {}): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() },
    };
    return client(config);
  }

  static put(
    path: string = "",
    data: any = {},
    optionalHeader: OptionalHeader = {}
  ): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = {
      method: "PUT",
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    };
    return client(config);
  }
}

client.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    let message;
    switch (error.response?.status) {
      case 500:
        message = { errorCode: 500, message: "Внутренняя ошибка сервера!" };
        break;
      case 401:
        message = error.response?.data;
        break;
      case 400:
        message = error.response?.data;
        break;
      default:
        message = error.response?.data;
    }
    return Promise.reject(message);
  }
);

export { DataService };
