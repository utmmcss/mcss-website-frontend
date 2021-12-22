// this file contains the types for the store and our CMS response
export interface DataAttribute<T> {
  data: {
    attributes: T;
  };
}

export interface DataAttributes<T> {
  data: {
    attributes: T;
  }[];
}
