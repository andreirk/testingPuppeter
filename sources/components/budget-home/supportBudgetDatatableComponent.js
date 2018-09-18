import { data } from '../../models/records';


function onTopbarClick(button, callback) {
  const table = $$('table1');
  const selected = [];

  table.filter((item) => {
    if (item.checkbox) {
      selected.push(item);
    }
    return true;
  });
  switch (button) {
    case 'view':
    case 'copy':
    case 'edit':
    case 'remove':
      if (selected.length > 1) {
        webix.alert(`Please, select single row to ${button}`);
        return;
      } else if (selected.length === 0) {
        webix.alert(`Please, select any row to ${button}`);
        return;
      }
      break;
    default: return;
  }
  callback(selected);
}

export default {
  view: 'accordionitem',
  css: 'accordion-block',
  header: 'Program / support budget',
  body: {
    rows: [
      {
        cols: [
          {
            view: 'button',
            type: 'icon',
            icon: 'file',
            label: 'Export',
            css: 'btn-icon',
            width: 100,
            click() {
              const table = $$('table1');
              webix.toExcel(table);
            },
          },
          {
            view: 'button',
            type: 'icon',
            action: 'new',
            icon: 'plus',
            label: 'New',
            css: 'btn-icon',
            width: 100,
            click() {
              const button = this;
              onTopbarClick(this.config.action, () => {
                button.$scope.show('budget-add');
              });
            },
          },

          {
            view: 'button',
            type: 'icon',
            icon: 'eye',
            action: 'view',
            label: 'View',
            css: 'btn-icon',
            width: 100,
            click() {
              const button = this;
              onTopbarClick(this.config.action, () => {
                button.$scope.show('budget-add');
              });
            },
          },


          {
            view: 'button',
            type: 'icon',
            action: 'edit',
            icon: 'refresh',
            label: 'Edit',
            css: 'btn-icon',
            width: 100,
            click() {
              const button = this;
              onTopbarClick(this.config.action, () => {
                button.$scope.show('budget-add');
              });
            },
          },
          {
            view: 'button',
            type: 'icon',
            icon: 'copy',
            action: 'copy',
            label: 'Copy',
            css: 'btn-icon',
            width: 100,
            click() {
              const button = this;
              onTopbarClick(this.config.action, () => {
                button.$scope.show('budget-add');
              });
            },
          },
          {
            view: 'button',
            type: 'icon',
            icon: 'trash',
            action: 'remove',
            label: 'Remove',
            css: 'btn-icon',
            width: 100,
            click() {
              onTopbarClick(this.config.action, (selected) => {
                data.remove(selected[0].id);
              });
            },
          },

          {},

          { view: 'text', value: 'Only Enable for UMASS and DTA' },
          { view: 'button', value: 'Approve' },
          { view: 'button', value: 'Deny' },

        ],
      },

      {
        view: 'datatable',
        autoheight: true,
        id: 'table1',
        columnWidth: 200,
        columns: [

          {
            id: 'checkbox', header: { content: 'masterCheckbox' }, template: '{common.checkbox()}', width: 50,
          },
          { id: 'provider', sort: 'text', header: 'Provider' },
          { id: 'fiscalYear', sort: 'date', header: 'Fiscal year' },
          { id: 'programm-support', header: 'Program' },

          { id: 'component', sort: 'text', header: 'Component type' },
          { id: 'subcomponent', sort: 'text', header: 'Sub-component type' },
          { id: 'programCode', sort: 'text', header: 'Component code' },

          { id: 'status', sort: 'text', header: 'Budget Status' },

          {
            id: 'percentageApproved', sort: 'int', header: 'Total percentage approved', template: '#total_percent#%',
          },
          {
            id: 'amountApproved', sort: 'int', header: 'Total Approved Amount', template: '$#amount#',
          },
          {
            id: 'remaningBalance', sort: 'int', header: 'Remained Balance', template: '$#balance#',
          },
        ],
      },
    ],
  },
};
