import { JetView } from 'webix-jet';
import addProgramForm from '../components/budget-add/addProgramComponent';

import totalDatatable from '../components/budget-add/totalDatatableComponent';
import totalCosts from '../models/totalCosts';

import fundingSourcesDatatable from '../components/budget-add/fundingSourcesComponent';
import sources from '../models/sources';

import personnelExpensesDatatable from '../components/budget-add/personnelExpensesComponent';
import salaries from '../models/salaries';

import benefitsDatatable from '../components/budget-add/personalBenefitsComponent';
import benefits from '../models/benefits';

import operatingExpensesDatatable from '../components/budget-add/programExpensesComponent';
import operatingExpenses from '../models/operatingExpenses';

import otherCostsDatatable from '../components/budget-add/otherCostsComponent';
import otherCosts from '../models/otherCosts';

import indirectCostsDatatable from '../components/budget-add/indirectCosts';
import indirectCosts from '../models/indirectCosts';

import reviewForm from '../components/budget-add/reviewFormComponent';

import reviewHistoryDatatable from '../components/budget-add/reviewHistoryDatatableComponent';
import reviewHistory from '../models/reviewHistory';

export default class extends JetView {
  config() {
    return {
      view: 'scrollview',
      body: {
        view: 'accordion',
        id: 'addBudgetAccordion',
        multi: true,
        padding: 20,
        rows: [
          addProgramForm,
          totalDatatable,
          fundingSourcesDatatable,
          personnelExpensesDatatable,
          benefitsDatatable,
          operatingExpensesDatatable,
          otherCostsDatatable,
          indirectCostsDatatable,
          {
            cols: [
              {},
              {
                view: 'button', css: 'main-btn', label: 'Save', width: 120,
              },
              {
                view: 'button', css: 'main-btn-contour', label: 'Cancel', width: 120,
              },
              {},
            ],
          },
          reviewForm,
          reviewHistoryDatatable,
        ],
      },
    };
  }

  init() {
    $$('reviewHistory').sync(reviewHistory);

    $$('totalDatatable').parse(totalCosts);
    $$('fundingSourcesDatatable').parse(sources);
    $$('inderectCostsDatatable').parse(indirectCosts);
    $$('otherCostDatatable').parse(otherCosts);
    $$('benefitsDatatable').parse(benefits);
    $$('salaryDatatable').parse(salaries);
    $$('operatingExpensesDatatable').parse(operatingExpenses);
  }
}
