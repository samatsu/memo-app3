export function HasNext(skip: number, limit: number, total: number) {
  return skip + limit < total;
}
export function HasPrev(skip: number, total: number) {
  return skip > 0 && total > 0;
}
