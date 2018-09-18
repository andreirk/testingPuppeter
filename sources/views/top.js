import { JetView } from 'webix-jet';


export default class TopView extends JetView {
  config() {
    const menu = {
      view: 'toolbar',
      paddingY: 0,
      elements: [
        {},
        {
          view: 'button', label: 'Notifications', badge: 12, width: 150, type: 'icon', icon: 'bell',
        },
        { view: 'button', label: 'Profile here', width: 100 },
      ],
    };

    return {
      type: 'line',
      rows: [
        {
          type: 'clean',
          padding: 10,
          margin: 20,
          borderless: true,
          rows: [menu],
        },
        {
          rows: [{ height: 10 },
            {
              type: 'clean',
              padding: 4,
              rows: [
                {
                  view: 'scrollview',
                  body: {
                    rows: [
                      { $subview: true },

                    ],
                  },


                },
                { height: 30, view: 'template', template: 'Default template with some text inside' },

              ],
            },
          ],
        },
      ],
    };
  }
  init() {

  }
}
