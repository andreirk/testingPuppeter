import { data } from '../../models/records';

export default {
  view: 'accordionitem',
  header: 'Program claim',
  body: {
    rows: [
      {
        cols: [

          {
            view: 'button',
            type: 'icon',
            icon: 'plus',
            label: 'New',
            width: 100,
            click() {
              this.$scope.show('claim-add');
            },
          },

          {
            view: 'button',
            type: 'icon',
            icon: 'eye',
            label: 'View',
            width: 100,
            click() {
              const table = $$('programClaimTable');

              const selected = [];

              table.filter((item) => {
                if (item.checkbox) {
                  selected.push(item);
                }
                return true;
              });

              if (selected.length > 1 || selected.length === 0) {
                webix.alert('Please, select only one row');
              } else {
                this.$scope.show('claim-add');
              }
            },
          },


          {
            view: 'button',
            type: 'icon',
            icon: 'refresh',
            label: 'Edit',
            width: 100,
            click() {
              const table = $$('programClaimTable');

              const selected = [];

              table.filter((item) => {
                if (item.checkbox) {
                  selected.push(item);
                }
                return true;
              });

              if (selected.length > 1 || selected.length === 0) {
                webix.alert('Please, select only one row');
              } else {
                this.$scope.show('claim-add');
              }
            },
          },
          {
            view: 'button',
            type: 'icon',
            icon: 'copy',
            label: 'Copy',
            width: 100,
            click() {
              const table = $$('programClaimTable');

              const selected = [];

              table.filter((item) => {
                if (item.checkbox) {
                  selected.push(item);
                }
                return true;
              });

              if (selected.length > 1 || selected.length === 0) {
                webix.alert('Please, select only one row');
              } else {
                this.$scope.show('claim-add');
              }
            },
          },
          {
            view: 'button',
            type: 'icon',
            icon: 'trash',
            label: 'Remove',
            width: 100,
            click() {
              const table = $$('programClaimTable');
              const selected = [];
              table.filter((item) => {
                if (item.checkbox) {
                  selected.push(item);
                }
                return true;
              });

              selected.forEach((item) => {
                data.remove(item.id);
              });
            },
          },

        ],
      },

      {
        view: 'datatable',
        autoheight: true,
        id: 'programClaimTable',
        columnWidth: 200,
        columns: [

          {
            id: 'checkbox', header: { content: 'masterCheckbox' }, template: '{common.checkbox()}', width: 50,
          },
          { id: 'provider', header: 'Provider' },
          { id: 'fiscal_year', header: 'Fiscal year' },
          { id: 'program', header: 'Program' },

          { id: 'component_type', header: 'Component type' },
          { id: 'subcomponent_type', header: 'Sub-component type' },
          { id: 'component_code', header: 'Component code' },

          { id: 'status', header: 'Budget Status' },

          { id: 'total_percent', header: 'Total percentage approved', template: '#total_percent#%' },
          { id: 'amount', header: 'Total Approved Amount', template: '$#amount#' },
          { id: 'balance', header: 'Remained Balance', template: '$#balance#' },
        ],
      },
    ],
  },
};
