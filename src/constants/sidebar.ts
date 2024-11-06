import { Archive, CheckCircled, Layers, ListBullet, Person } from '@/public/icon';

export const sidebarOptions = [
  { text: 'مدیریت برنامه ها', icon: ListBullet, path: '/plans', type: 'collapse' },
  { text: 'کاربران', icon: Person, path: '/user', type: 'collapse' },
  {
    text: 'مدیریت اطلاعات',
    icon: Archive,
    type: 'expand',
    items: [
      { text: 'مدیریت نقاط', path: '/data-management/point-management' },
      { text: 'مدیریت مقالات', path: '/data-management/article-management' },
    ],
  },
  {
    text: 'مدیریت اطلاعات تکمیلی',
    icon: Layers,
    type: 'expand',
    items: [
      { text: 'مدیریت دسته بندی ها ', path: '/additional-detail/categories' },
      { text: 'مدیریت تگ ها ', path: '/additional-detail/tags' },
      { text: 'مدیریت ویژگی ها', path: '/additional-detail/features' },
    ],
  },
  {
    text: 'تاییدیه ها',
    icon: CheckCircled,
    type: 'expand',
    items: [
      { text: 'مدیریت نظرات', path: '/confirmations/comment' },
      { text: 'مدیریت نظرات برتر', path: '/confirmations/top-comments' },
      { text: 'مدیریت اصلاح اطلاعات ', path: '/confirmations/improve-data' },
      { text: 'مدیریت راهنماهای مسیر', path: '/confirmations/path-guid' },
      { text: 'مدیریت تصاویر ارسالی', path: '/confirmations/image-sent' },
    ],
  },
];
