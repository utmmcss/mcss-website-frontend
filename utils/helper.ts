import axios from 'axios';

/**
 * @description Helper function that sends a GET request to the CMS
 * @param path the path to the api endpoint (eg. /events)
 * @returns json data from the api endpoint, {} if there was an error
 */
export const getAPI = async (path: string) => {
  try {
    const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

/**
 * @description Helper function that sends a POST request to the CMS
 * @param path the path to the api endpoint (eg. /events)
 * @param postData json object to be sent to the api endpoint
 * @returns json data from the api endpoint, {} if there was an error
 */
export const postAPI = async (path: string, postData: object) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}${path}`, postData);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
