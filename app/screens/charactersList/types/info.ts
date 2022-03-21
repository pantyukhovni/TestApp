type Pagination = number | null;

export type Info = {
  count: number,
  pages: number,
  next: Pagination,
  prev: Pagination
}