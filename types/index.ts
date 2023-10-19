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

export interface CategoryResponse {
  type: string;
}
