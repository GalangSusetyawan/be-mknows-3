export interface Category {
  pk: number;
  uuid: string;

  name: string;
  description: string;
}

export interface CategoryQueryParams {
  page?: string;
  limit?: string;
  search?: string;
  order?: string;
  sort?: string;
}

export interface CategoryParsed {
  pk: number;
  uuid: string;

  name: string;
  description: string;
}