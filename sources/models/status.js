import baseUrl from '../config';

const componentUrl = `${baseUrl}/api/statuses`;

export const data = new webix.DataCollection({
  url: componentUrl,
  scheme: {
    $init(obj) {
      obj.value = obj.name;
    },
  },
});


export default () => data;

