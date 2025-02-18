import { Ads, Archive, CheckCircled, Layers, ListBullet, Person, Support } from '@/public/icon';

export const sidebarOptions = [
  { text: 'مدیریت برنامه ها', Icon: ListBullet, path: '/plans', type: 'collapse' },
  { text: 'کاربران', Icon: Person, path: '/user', type: 'collapse' },
  {
    text: 'مدیریت اطلاعات',
    Icon: Archive,
    type: 'expand',
    items: [
      { text: 'مدیریت نقاط', path: '/data-management/point-management' },
      { text: 'مدیریت مقالات', path: '/data-management/article-management' },
    ],
  },
  {
    text: 'مدیریت اطلاعات تکمیلی',
    Icon: Layers,
    type: 'expand',
    items: [
      { text: 'مدیریت دسته بندی ها ', path: '/additional-detail/categories' },

      { text: 'مدیریت ویژگی ها', path: '/additional-detail/features' },
      { text: 'مدیریت استان ها', path: '/additional-detail/province' },
    ],
  },
  {
    text: 'تاییدیه ها',
    Icon: CheckCircled,
    type: 'expand',
    items: [
      { text: 'مدیریت نظرات', path: '/confirmations/comment' },
      { text: 'مدیریت نظرات برتر', path: '/confirmations/top-comments' },
      { text: 'مدیریت اصلاح اطلاعات ', path: '/confirmations/improve-data' },
      { text: 'مدیریت راهنماهای مسیر', path: '/confirmations/path-guid' },
      { text: 'مدیریت تصاویر ارسالی', path: '/confirmations/image-sent' },
    ],
  },
  {
    text: 'آگهی ها',
    Icon: Ads,
    type: 'collapse',
    path: '/ads',
  },
  {
    text: 'پشتیبانی',
    Icon: Support,
    type: 'collapse',
    path: '/contact-us',
  },
];
