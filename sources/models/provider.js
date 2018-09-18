import baseUrl from '../config';

const componentUrl = `${baseUrl}/api/providers`;

export const data = new webix.DataCollection({
  url: componentUrl,
  scheme: {
    $init(obj) {
      obj.value = obj.name;
    },
  },
});


export default () => data;

