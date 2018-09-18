const labelIcon = '<span class="webix_icon fa-question-circle tip-message" style="padding-left: 10px;"></span>';
const content = 'Note: All funds must be private/foundation monies, individual donations or federal Community Development Block Grants. * Local funds include all private and foundation monies * Back up documentation MUST be provided for all state monies that are not federally matched.';

export default {
  view: 'accordionitem',
  id: 'fundingSourcesAccordionItem',
  css: 'accordion-block',
  header: `Funding Sources${labelIcon}`,
  body: {
    rows: [
      {
        view: 'template',
        id: 'funingSourcesTemplate',
        template: () => `
          <div>
            <p>${content}</p>
            <span class="webix_icon fa-times" style="padding-left: 10px;"></span>        
          </div>`,
        autoheight: true,
        hidden: true,
        onClick: {
          'fa-times': () => {
            $$('funingSourcesTemplate').hide();
          },
        },
      },
      {
        view: 'datatable',
        id: 'fundingSourcesDatatable',
        editable: true,
        autoheight: true,
        footer: true,
        scrollX: false,
        columns: [
          {
            id: 'name',
            header: 'Funding Sources',
            editor: 'text',
            minWidth: 200,
            fillspace: true,
            footer: [{ text: 'TOTAL', colspan: 1 }, { content: 'summColumn', colspan: 1 }],
          },
          {
            id: 'privateFunds',
            header: 'Total Private Funds',
            width: 250,
            footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
          },
          {
            id: 'localFunds',
            header: 'Local Funds',
            editor: 'text',
            width: 250,
            footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
          },
          {
            id: 'stateFunds',
            header: 'State Funds',
            editor: 'text',
            width: 250,
            footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
          },
          {
            id: 'federal',
            header: 'Federal(CBG)',
            editor: 'text',
            width: 250,
            footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
          },
        ],
      },
    ],
  },
  onClick: {
    'tip-message': () => {
      const funingSourcesTemplate = $$('funingSourcesTemplate');

      $$('fundingSourcesAccordionItem').expand();
      if (funingSourcesTemplate.isVisible()) {
        funingSourcesTemplate.hide();
      } else {
        funingSourcesTemplate.show();
      }
    },
  },
};
