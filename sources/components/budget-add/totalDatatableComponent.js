const labelIcon = '<span class="webix_icon fa-question-circle tip-message" style="padding-left: 10px;"></span>';
const content = 'Actual costs have to be directly linked to the Employment and Training component and MUST be reasonable and necessary';

export default {
  view: 'accordionitem',
  id: 'totalAccordionItem',
  header: `Total${labelIcon}`,
  body: {
    rows: [
      {
        view: 'template',
        id: 'totalTemplate',
        template: () => `
          <div>
            <p>${content}</p>
            <span class="webix_icon fa-times" style="padding-left: 10px;"></span>        
          </div>`,
        autoheight: true,
        hidden: true,
        onClick: {
          'fa-times': () => {
            $$('totalTemplate').hide();
          },
        },
      },
      {
        view: 'datatable',
        id: 'totalDatatable',
        columns: [
          {
            id: 'category',
            header: 'Budget Category (50 / 50 %)',
            minWidth: 250,
            fillspace: true,
            footer: [{ text: 'TOTAL', colspan: 1 }, { text: 'Participant support', colspan: 1 }, { text: 'Number of Clients served', colspan: 1 }],
          },
          {
            id: 'cost',
            editor: 'text',
            header: 'Total Program Cost',
            width: 200,
            footer: [{ content: 'summColumn', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
          },
          {
            id: 'funds',
            editor: 'text',
            header: 'Total Private funds',
            width: 200,
            footer: [{ content: 'summColumn', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
          },
        ],
        scrollX: false,
        autoheight: true,
        editable: true,
        footer: true,
      },
    ],
  },
  onClick: {
    'tip-message': () => {
      const totalTemplate = $$('totalTemplate');

      $$('totalAccordionItem').expand();
      if (totalTemplate.isVisible()) {
        totalTemplate.hide();
      } else {
        totalTemplate.show();
      }
    },
  },
};
