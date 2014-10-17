interface Query {
  q: string;
  format: string;
  page: string;
  extra?: string;
  fx?: string;
  includeLocation?: string;
  callback?: string;
  lang?: string;
}
export = Query;
