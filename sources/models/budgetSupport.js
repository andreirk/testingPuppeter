import baseUrl from '../config';

const queryStringSerialize = obj => Object.entries(obj).map(i => [i[0], encodeURIComponent(i[1])].join('=')).join('&');

const componentUrl = `${baseUrl}/api/budget-support`;

export const data = new webix.DataCollection({
  url: componentUrl,
});

export default filters => webix.ajax(`${componentUrl}?${queryStringSerialize(filters)}`);

