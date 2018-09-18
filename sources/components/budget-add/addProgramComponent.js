const labelIcon = '<span class="webix_icon fa-question-circle" style="padding-left: 10px;"></span>';

const providerSelect = {
  view: 'select',
  labelPosition: 'top',
  label: 'Provider',
  value: 1,
  options: [
    { id: 1, value: 'Jewish vocational servic, Inc (UMASS an DTA)' },
    { id: 2, value: 'Release' },
  ],
};

const yearSelect = {
  view: 'select',
  labelPosition: 'top',
  label: 'Fiscal year',
  value: 1,
  options: [
    { id: 1, value: 'FFY 2018' },
    { id: 2, value: 'FFY 2017' },
  ],
};

const programSelect = {
  view: 'select',
  labelPosition: 'top',
  label: 'Program/Support',
  value: 1,
  options: [
    { id: 1, value: 'Pharm tech training' },
    { id: 2, value: 'Pharm tech' },
  ],
};

const componentSelect = {
  view: 'select',
  labelPosition: 'top',
  label: 'Component',
  value: 1,
  options: [
    { id: 1, value: 'Select' },
    { id: 2, value: 'Component' },
  ],
};

const subcomponentSelect = {
  view: 'select',
  labelPosition: 'top',
  label: 'Subcomponent',
  value: 1,
  options: [
    { id: 1, value: '' },
    { id: 2, value: 'Subcomponent' },
  ],
};

const codeInput = {
  view: 'text',
  labelPosition: 'top',
  label: 'Program code',
};

const modalSelect = {
  view: 'select',
  labelPosition: 'top',
  label: 'Reimbursememnt modal',
  value: 1,
  options: [
    { id: 1, value: 'Program 50% or 100%' },
    { id: 2, value: 'Program 60%' },
  ],
};

const statusSelect = {
  view: 'select',
  labelPosition: 'top',
  label: 'Status',
  value: 1,
  options: [
    { id: 1, value: 'Draft' },
    { id: 2, value: 'Approved' },
  ],
};

const trainingSelect = {
  view: 'select',
  labelPosition: 'top',
  label: `Refugee training${labelIcon}`,
  value: 1,
  options: [
    { id: 1, value: 'Select' },
    { id: 2, value: 'Approved' },
  ],
};

const managementSelect = {
  view: 'select',
  labelPosition: 'top',
  label: `Case management${labelIcon}`,
  value: 1,
  options: [
    { id: 1, value: 'Select' },
    { id: 2, value: 'Approved' },
  ],
};

const jobSelect = {
  view: 'select',
  labelPosition: 'top',
  label: `Job search${labelIcon}`,
  value: 1,
  options: [
    { id: 1, value: 'Select' },
    { id: 2, value: 'Approved' },
  ],
};


export default {

  view: 'accordionitem',
  css: 'accordion-block',
  header: 'Program/Support Budget',
  body: {
    view: 'form',
    elements: [
      {
        rows: [
          {
            cols: [
              providerSelect,
              yearSelect,
              programSelect,
            ],
          },
          {
            cols: [
              componentSelect,
              subcomponentSelect,
              codeInput,
            ],
          },
          {
            cols: [
              modalSelect,
              statusSelect,
              trainingSelect,
            ],
          },
          {
            cols: [
              managementSelect,
              jobSelect,
              {},
            ],
          },
        ],
      },
    ],
  },
};
