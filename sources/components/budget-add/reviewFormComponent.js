const statusInput = {
  view: 'text',
  label: 'Status',
  labelPosition: 'top',
  placeholder: 'Pending UMASS review',
  disabled: true,
};

const statusDatepicker = {
  view: 'datepicker',
  label: 'Status',
  labelPosition: 'top',
  stringResult: true,
};

const reviwedInput = {
  view: 'text',
  label: 'Reviewed by',
  labelPosition: 'top',
  placeholder: 'Miriam Kaufmann',
  disabled: true,
};

const reviewedDatepicker = {
  view: 'datepicker',
  type: 'time',
  label: 'Reviewed on',
  labelPosition: 'top',
  stringResult: true,
};

const startDatepicker = {
  view: 'datepicker',
  label: 'Budget effective',
  labelPosition: 'top',
  stringResult: true,
  placeholder: 'Start',
};

const endDatepicker = {
  view: 'datepicker',
  stringResult: true,
  placeholder: 'End',
};

const commentTextarea = {
  view: 'textarea',
  label: 'Add Comment',
  labelPosition: 'top',
  placeholder: 'Write a comment',
  height: 100,
};

const buttons = {
  cols: [
    {},
    {
      view: 'button', label: 'Authorize', type: 'form', width: 100,
    },
    { view: 'button', label: 'Reject', width: 100 },
    { view: 'button', label: 'Inactivate', width: 100 },
    { view: 'button', label: 'Suspend', width: 100 },
    {},
  ],
};

const providerForm = {
  view: 'form',
  elements: [
    {
      rows: [
        {
          cols: [
            statusInput,
            statusDatepicker,
            reviwedInput,
            reviewedDatepicker,
          ],
        },
        {
          cols: [
            startDatepicker,
            {
              rows: [
                {},
                endDatepicker,
              ],
            },
            { gravity: 6 },
          ],
        },
        commentTextarea,
        buttons,
      ],
    },
  ],
};

export default {
  view: 'accordionitem',
  header: 'Review',
  body: providerForm,
};
