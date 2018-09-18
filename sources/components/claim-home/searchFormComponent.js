export default {

  view: 'accordionitem',
  header: 'Search',
  body: {
    view: 'form',
    elements: [
      {
        rows: [
          {
            cols: [
              {
                rows: [
                  {
                    view: 'select',
                    labelPosition: 'top',
                    label: 'Provider',
                    value: 1,
                    options: [
                      { id: 1, value: 'Master' },
                      { id: 2, value: 'Release' },
                    ],
                  },
                  {
                    view: 'select',
                    labelPosition: 'top',
                    label: 'Program',
                    value: 1,
                    options: [
                      { id: 1, value: 'Master' },
                      { id: 2, value: 'Release' },
                    ],
                  },
                ],
              },
              {
                rows: [
                  {
                    view: 'select',
                    labelPosition: 'top',
                    label: 'Fiscal year',
                    value: 1,
                    options: [
                      { id: 1, value: 'Master' },
                      { id: 2, value: 'Release' },
                    ],
                  },
                  {
                    view: 'select',
                    labelPosition: 'top',
                    label: 'Claim status',
                    value: 1,
                    options: [
                      { id: 1, value: 'Master' },
                      { id: 2, value: 'Release' },
                    ],
                  },
                ],
              },
              {
                rows: [
                  {
                    view: 'select',
                    labelPosition: 'top',
                    label: 'Quarter',
                    value: 1,
                    options: [
                      { id: 1, value: 'Master' },
                      { id: 2, value: 'Release' },
                    ],
                  },
                ],
              },


            ],
          },
          {
            cols: [
              {},
              {
                view: 'button',
                value: 'Search',
                width: 100,
                type: 'form',
                click() {
                  this.getFormView().getValues();
                },
              },
              {
                view: 'button',
                value: 'Clear all',
                width: 100,
                type: 'form',
                click() {
                  this.getFormView().clear();
                },
              },
              {},
            ],
          },
        ],

      },
    ],
  },

};
