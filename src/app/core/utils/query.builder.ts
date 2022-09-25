import { formatDate } from "@angular/common";
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

  addRangeForm(queryString, query.advanced?.size, "size");
  addRangeForm(queryString, query.advanced?.stars, "stars");
  addDate(queryString, query.advanced?.created);

  return queryString.join(" ");
};

const addRangeForm = (
  query: string[],
  range: Range | undefined,
  name: string
): void => {
  if (!range?.value) {
    return;
  }

  if (range.otherValue) {
    query.push(`${name}:${range.value}${range.comparer}${range.otherValue}`);

    return;
  }

  query.push(`${name}:${range.comparer}${range.value}`);
};

const addDate = (query: string[], created: Range | undefined): void => {
  if (!created?.value) {
    return;
  }

  const value = formatCreatedDate(created.value);

  if (created.otherValue) {
    query.push(
      `created:${value}${created.comparer}${formatCreatedDate(
        created.otherValue
      )}`
    );

    return;
  }

  query.push(`created:${created.comparer}${value}`);
};

const formatCreatedDate = (value: string): string => {
  return formatDate(new Date(value), "YYYY-MM-dd", "en-GB");
};
