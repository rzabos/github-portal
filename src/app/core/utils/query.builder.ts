import { Query, Range } from "../models";

export const buildQuery = (query: Query): string => {
  const queryString: string[] = [];
  if (query.text) queryString.push(query.text);
  if (query.in?.description) queryString.push("in:description");
  if (query.in?.readme) queryString.push("in:readme");
  if (query.in?.name) queryString.push("in:name");
  if (query.advanced?.username)
    queryString.push(`user:${query.advanced.username}`);
  if (query.advanced?.organization)
    queryString.push(`org:${query.advanced.organization}`);
  if (query.advanced?.languages)
    query.advanced.languages.forEach((l) => queryString.push(`language:${l}`));
  if (query.advanced?.topics)
    query.advanced.topics.forEach((t) => queryString.push(`topic:${t}`));

  addRangeForm(queryString, query.advanced?.size);
  addRangeForm(queryString, query.advanced?.stars);
  addRangeForm(queryString, query.advanced?.created);

  return queryString.join(" ");
};

export const addRangeForm = (
  query: string[],
  range: Range | undefined
): void => {
  if (!range?.value) {
    return;
  }

  if (range.otherValue) {
    query.push(`stars:${range.value}${range.comparer}${range.otherValue}`);

    return;
  }

  query.push(`stars:${range.comparer}${range.value}`);
};
