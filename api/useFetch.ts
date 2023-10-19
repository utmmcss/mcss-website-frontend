import { useCallback } from 'react';

const baseURLKeys = ['CMS', 'CUSTOM'] as const;
type BaseURL = (typeof baseURLKeys)[number];

const CMS_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type Props = {
  base: BaseURL;
  url: string;
};

const fetchHelper = async (props: Props): Promise<{ data: any; error: any; statusCode: any }> => {
  const { base, url } = props;

  const api = () => {
    switch (base) {
      case 'CMS':
        return `${CMS_BASE_URL}/api/${url}`;
      default:
        return url;
    }
  };

  const req = {
    method: 'GET',
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
  return useCallback(async (base: BaseURL, url: string) => {
    try {
      return await fetchHelper({
        base,
        url,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, []);
};

export type CustomFetch = ReturnType<typeof useFetch>;

export default useFetch;
