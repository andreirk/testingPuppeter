export default {
  view: 'accordionitem',
  header: 'Search',
  body: {
    rows: [
      {
        view: 'datatable',
        autoheight: true,
        columnWidth: 200,
        columns: [
          { header: '', width: 50 },
          { header: '', width: 200 },
          { header: 'Total Budget', width: 200 },
          { header: 'Total Expenditures', width: 200 },
          { header: 'Remaining Balance', width: 200 },
        ],
      },
      {
        cols: [
          {},
          {
            view: 'button',
            value: 'Approve',
            width: 100,
            type: 'form',
            click() {

            },
          },
          {
            view: 'button',
            value: 'Deny',
            width: 100,
            type: 'form',
            click() {

            },
          },
          {},
        ],
      },
    ],


  },
};
