import QueryString from 'query-string';

export function toQuery(object) {
    return `?${QueryString.stringify(object)}`;
}

export function fromQuery(query) {
    return QueryString.parse(query);
}

export function queryToArray(query) {
    return Array.isArray(query) ? query : [query];
}
