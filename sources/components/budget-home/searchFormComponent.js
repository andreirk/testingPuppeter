import getProviders from '../../models/provider';
import getFiscalYears from '../../models/fiscalYear';
import getStatuses from '../../models/status';
import getComponents from '../../models/component';
import getSubComponents from '../../models/sub-component';
import getPrograms from '../../models/program';


const providerControl = {
  view: 'combo',
  labelPosition: 'top',
  label: 'Provider',
  options: {
    template: '#name#',
    data: getProviders(),
  },
};
const componentControl = {
  view: 'combo',
  labelPosition: 'top',
  label: 'Component',
  options: {
    template: '#name#',
    data: getComponents(),
  },
};
const fiscalYearControl = {
  view: 'combo',
  labelPosition: 'top',
  label: 'Fiscal Year',
  options: {
    template: '#value#',
    data: getFiscalYears(),
  },
};
const subcomponetControl = {
  view: 'combo',
  labelPosition: 'top',
  label: 'SubComponent',
  options: {
    template: '#value#',
    data: getSubComponents(),
  },
};
const statusControl = {
  view: 'combo',
  labelPosition: 'top',
  id: 'field_b',
  label: 'Status',
  options: {
    template: '#value#',
    data: getStatuses(),
  },
};
const programSupportControl = {
  view: 'combo',
  labelPosition: 'top',
  label: 'Programm/ Support',
  options: {
    template: '#value#',
    data: getPrograms(),
  },
};
const programmCodeControl = {
  view: 'text',
  labelPosition: 'top',
  label: 'Programm code',
};


export default {

  view: 'accordionitem',
  header: 'Search',
  body: {
    view: 'form',
    id: 'searchForm',
    elements: [
      {
        rows: [
          {
            cols: [
              {
                rows: [
                  providerControl,
                  componentControl,
                ],
              },
              {
                rows: [
                  fiscalYearControl,
                  subcomponetControl,
                  statusControl,
                ],
              },
              {
                rows: [
                  programSupportControl,
                  programmCodeControl,
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
