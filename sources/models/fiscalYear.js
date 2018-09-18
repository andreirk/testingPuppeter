import baseUrl from '../config';

const componentUrl = `${baseUrl}/api/fiscal-years`;

export const data = new webix.DataCollection({
  url: componentUrl,
});


export default () => data;

