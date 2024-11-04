import { Archive, CheckCircled, Layers, ListBullet, Person } from '@/public/icon';

export const sidebarOptions = [
  { text: 'مدیریت برنامه ها', icon: ListBullet, path: '', type: 'collapse' },
  { text: 'کاربران', icon: Person, path: '', type: 'collapse' },
  { text: 'مدیریت اطلاعات', icon: Archive, path: '', type: 'expand' },
  { text: 'مدیریت اطلاعات تکمیلی', icon: Layers, path: '', type: 'expand' },
  { text: 'تاییدیه ها', icon: CheckCircled, path: '', type: 'expand' },
];
