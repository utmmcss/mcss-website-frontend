import axios from 'axios';

/**
 * @description Helper function that sends a GET request to the CMS
 * @param path the path to the api endpoint (eg. /events)
 * @returns json data from the api endpoint, {} if there was an error
 */
export const getAPI = async (path: string) => {
  try {
    const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api${path}`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

/**
 * @description format a date string according to a format, see https://tinyurl.com/24kv4xv8
 * for more info on formatting
 * @param date the date string to be formatted
 * @param format the format to be used, default is
 * @default format { month: 'short', day: 'numeric', year: 'numeric' }
 * @returns formatted string
 */

export const formatDate = (date: string, format?: Intl.DateTimeFormatOptions) =>
  new Date(date).toLocaleDateString(
    'en-Us',
    format || { month: 'short', day: 'numeric', year: 'numeric' },
  );

/**
 * given an array and element, return a new array with the element removed
 * @param arr the original array
 * @param element the element to be removed from the array
 * @returns a new array with the element removed
 */

export function removeElement<Type>(arr: Type[], element: Type) {
  const index = arr.indexOf(element);
  if (index > -1) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  return arr;
}
