export default {
  view: 'accordionitem',
  css: 'accordion-block',
  header: 'Total Result of Provider Budget Search',
  body: {
    cols: [
      {
        view: 'treetable',
        id: 'totalBudget',
        autoheight: true,
        columns: [
          { id: 'id', header: '', width: 50 },
          {
            id: 'category',
            header: 'Budget Category',
            width: 250,
            template: '{common.treetable()} #category#',
          },
          { id: 'cost', header: 'Total Program Cost', width: 200 },
          { id: 'funds', header: 'Total Private funds', width: 200 },
        ],
      },
      {
        view: 'treetable',

        autoheight: true,
        columns: [
          {
            id: 'category',
            header: 'Budget Category',
            width: 250,
            template: '{common.treetable()} #category#',
          },
          { id: 'cost', header: 'Total Program Cost', width: 200 },

        ],
      },
    ],

  },
};
