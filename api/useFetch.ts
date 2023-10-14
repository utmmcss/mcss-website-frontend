import { useCallback } from 'react';

const methodKeys = ['GET', 'POST'] as const;
type Method = (typeof methodKeys)[number];

const baseURLKeys = ['CMS', 'CUSTOM'] as const;
type BaseURL = (typeof baseURLKeys)[number];

const CMS_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type Props = {
  method: Method;
  base: BaseURL;
  url: string;
  body: any;
};

const fetchHelper = async (props: Props): Promise<{ data: any; error: any; statusCode: any }> => {
  const { method, base, url, body } = props;

  const api = () => {
    switch (base) {
      case 'CMS':
        return `${CMS_BASE_URL}/api/${url}`;
      default:
        return url;
    }
  };

  const req = {
    method,
    ...(method !== 'GET' && {
      body: JSON.stringify({ ...body, ts: Date.now() }),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const resp = await fetch(api(), req);

  const response: { error: any; data: unknown; statusCode: any } = {
    error: { data: undefined },
    data: undefined,
    statusCode: resp.status,
  };

  if (resp.status !== 200) {
    const error = await resp.json();
    response.error.data = error;
  } else {
    const data = await resp.json();
    response.data = data;
  }
  return response;
};

/** DO NOT use this directly, use useAPI */
const useFetch = () => {
  return useCallback(async (method: Method, base: BaseURL, url: string, body?: Object) => {
    try {
      return await fetchHelper({
        method,
        base,
        url,
        body,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, []);
};

export type CustomFetch = ReturnType<typeof useFetch>;

export default useFetch;
