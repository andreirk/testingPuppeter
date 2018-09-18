const labelIcon = '<span class="webix_icon fa-question-circle" style="padding-left: 10px;"></span>';

export default {
  view: 'accordionitem',
  css: 'accordion-block',
  header: `Personnel Expenses (Salary)${labelIcon}`,
  body: {
    view: 'datatable',
    id: 'salaryDatatable',
    editable: true,
    autoheight: true,
    footer: true,
    scrollX: false,
    columns: [
      {
        id: 'name',
        header: 'Title Of Position',
        editor: 'text',
        minWidth: 150,
        fillspace: true,
        footer: [{ text: 'TOTAL', colspan: 1 }, { content: 'summColumn', colspan: 1 }],
      },
      {
        id: 'cost',
        header: 'Total Program Costs',
        editor: 'text',
        width: 150,
        footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
      },
      {
        id: 'FTE',
        header: '% FTE For SNAP Only',
        editor: 'text',
        width: 150,
        footer: [{ text: '0,00%', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
      },
      {
        id: 'totalFunds',
        header: 'Total Private Funds',
        width: 150,
        footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
      },
      {
        id: 'localFunds',
        header: 'Local Funds',
        editor: 'text',
        width: 150,
        footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
      },
      {
        id: 'stateFunds',
        header: 'State Funds',
        editor: 'text',
        width: 150,
        footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
      },
      {
        id: 'federal',
        header: 'Federal (CDBG)',
        editor: 'text',
        width: 150,
        footer: [{ text: '-', rowspan: 1 }, { content: 'summColumn', rowspan: 1 }],
      },
    ],
  },
};
