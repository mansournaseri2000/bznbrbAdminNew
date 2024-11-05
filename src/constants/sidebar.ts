import { Archive, CheckCircled, Layers, ListBullet, Person } from '@/public/icon';

export const sidebarOptions = [
  { text: 'مدیریت برنامه ها', icon: ListBullet, path: '', type: 'collapse' },
  { text: 'کاربران', icon: Person, path: '', type: 'collapse' },
  {
    text: 'مدیریت اطلاعات',
    icon: Archive,
    type: 'expand',
    items: [
      { text: 'مدیریت نقاط', path: '' },
      { text: 'مدیریت مقالات', path: '' },
    ],
  },
  {
    text: 'مدیریت اطلاعات تکمیلی',
    icon: Layers,
    type: 'expand',
    items: [
      { text: 'مدیریت دسته بندی ها ', path: '' },
      { text: 'مدیریت تگ ها ', path: '' },
      { text: 'مدیریت ویژگی ها', path: '' },
    ],
  },
  {
    text: 'تاییدیه ها',
    icon: CheckCircled,
    type: 'expand',
    items: [
      { text: 'مدیریت نظرات', path: '' },
      { text: 'مدیریت نظرات برتر', path: '' },
      { text: 'مدیریت اصلاح اطلاعات ', path: '' },
      { text: 'مدیریت راهنماهای مسیر', path: '' },
      { text: 'مدیریت تصاویر ارسالی', path: '' },
    ],
  },
];
