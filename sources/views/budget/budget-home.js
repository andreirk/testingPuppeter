import { JetView } from 'webix-jet';

import './budget-home.less';

import getBudgetSupport from '../../models/budgetSupport';

import totalResult from '../../models/totalResult';

import searchForm from '../../components/budget-home/searchFormComponent';
import supportBudgetDatatable from '../../components/budget-home/supportBudgetDatatableComponent';
import totalTreetable from '../../components/budget-home/resultTreetableComponent';


export default class extends JetView {
  config() {
    return {
      view: 'accordion',
      multi: true,
      padding: 20,
      rows: [
        searchForm,
        { view: 'resizer' },
        supportBudgetDatatable,
        { view: 'resizer' },
        totalTreetable,
      ],
    };
  }

  init() {
    $$('searchForm').attachEvent('onSearch', (filters) => {
      const budgetSupportPromise = getBudgetSupport(filters);
      const budgetSupportTable = $$('table1');
      budgetSupportTable.clearAll();
      budgetSupportTable.parse(budgetSupportPromise);
    });
    $$('totalBudget').parse(totalResult);
  }
}
