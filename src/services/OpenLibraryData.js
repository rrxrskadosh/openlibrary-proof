import { stringify } from "query-string";

const MAIN_URL = 'http://openlibrary.org';

const getData = async (uri, params) => {
    const url = `${MAIN_URL}${uri}?${stringify(params)}`;

const response = await fetch(url, {
    cache: 'no-cache',
    headers: {
        Accept: 'application/json'
    }
});

return await response.json();

};

export const findBooks = title => getData('/search.json', {title});