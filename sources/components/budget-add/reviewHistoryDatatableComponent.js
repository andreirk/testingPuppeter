import users from '../../models/users';
import statuses from '../../models/statuses';

const approvalHistoryDatatable = {
  rows: [
    {
      view: 'datatable',
      id: 'reviewHistory',
      autoheight: true,
      scrollY: true,
      scrollX: false,
      columns: [
        {
          id: 'statusId', header: 'Status', options: statuses, width: 250,
        },
        {
          id: 'userId', header: 'By', options: users, width: 200,
        },
        {
          id: 'dateOn', header: 'On', width: 200,
        },
        { id: 'budget', header: 'Percentage Approved', width: 200 },
        { id: 'comments', header: 'Comments', fillspace: true },
      ],
    },
  ],
};

export default {
  view: 'accordionitem',
  header: 'Review History',
  body: approvalHistoryDatatable,
};
