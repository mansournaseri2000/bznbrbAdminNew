export const MenuData = [
  { label: 'برنامه ها', path: '/plans', type: 'collapse' },
  { label: 'کاربران', path: '/user', type: 'collapse' },
  { label: 'تیم و پرسنل', path: '/employee', type: 'collapse' },

  {
    label: 'دیتابیس',
    type: 'expand',
    items: [
      { label: 'نقاط', path: '/data-base/points' },
      { label: 'رویداد ها', path: '/data-base/article' },
    ],
  },
  {
    label: 'جزئیات',
    type: 'expand',
    items: [
      { label: 'دسته بندی ها', path: '/additional-detail/categories' },
      { label: 'برچسب ها', path: '/additional-detail/tags' },
    ],
  },
  { label: 'مدیریت نظرات', path: '/comments', type: 'collapse' },
];

// {
//   label: 'تیم و پرسنل',
//   type: 'expand',
//   items: [
//     { label: 'تیم ها', path: '' },
//     { label: 'پرسنل', path: '' },
//   ],
// },

// { label: 'هتل ها', path: '' },
// { label: 'هواپیما', path: '' },
// { label: 'قطار', path: '' },
// { label: 'اتوبوس', path: '' },

// {
//   label: 'محتوای وب',
//   type: 'expand',
//   items: [
//     { label: 'صفحه اصلی', path: '' },
//     { label: 'برنامه ساز', path: '' },
//     { label: 'برترین ها', path: '' },
//   ],
// },
// {
//   label: 'اتوماسیون',
//   type: 'expand',
//   items: [
//     { label: 'کاربر', path: '' },
//     { label: 'تیم و پرسنل', path: '' },
//     { label: 'دیتابیس', path: '' },
//   ],
// },
