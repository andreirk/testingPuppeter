import { JetView } from 'webix-jet';

import searchForm from '../components/claim-home/searchFormComponent';
import programClaim from '../components/claim-home/programClaimComponent';
import totalProviderClaim from '../components/claim-home/totalProviderClaimComponent';

export default class extends JetView {
  config() {
    return {

      view: 'accordion',
      multi: true,
      rows: [
        searchForm,
        programClaim,
        totalProviderClaim,
      ],

    };
  }

  init() {

  }
}
