import { CreatePointButtonTypes, EditPointButtonTypes } from '@/types/data-management/point';

export const StatusFilterOption = [
  { id: 1, key: 'کامل', value: true },
  { id: 2, key: 'ناقص', value: false },
  { id: 2, key: 'همه', value: null },
];
export const isPublishedOptions = [
  { id: 1, key: 'منتشر شده', value: true },
  { id: 2, key: 'منتشر نشده', value: false },
  { id: 2, key: 'همه', value: null },
];
export const pointTypeOptions = [
  { id: 3, name: 'هنرگردی' },
  { id: 1, name: 'شکم گردی' },
  { id: 2, name: 'مذهبی' },
  { id: 4, name: 'هنرگردی' },
  { id: 5, name: 'سرویس ها' },
  { id: 6, name: 'فروشگاه' },
];

export const articleStatusOptions = [
  { id: 1, name: 'منتشر شده', value: true },
  { id: 2, name: 'منتشر نشده', value: false },
  { id: 3, name: 'همه', value: 'none' },
];

export const createPointTabsOptions: { label: string; key: CreatePointButtonTypes }[] = [
  { label: 'اطلاعات نقطه', key: 'place-info' },
  { label: 'موقعیت جفرافیا', key: 'geographical-location' },
  { label: 'چجوری برم', key: 'routing' },
  { label: 'توضیحات', key: 'description' },
  { label: 'ویژگی های و امکانات', key: 'features-facilities' },
  { label: 'تحلیل بزنیم بیرون', key: 'analysis' },
  { label: 'کی برم', key: 'travel-time' },
  { label: 'تنظیمات سئو', key: 'seo-setting' },
];

export const editPointTabsOptions: { label: string; key: EditPointButtonTypes }[] = [
  { label: 'اطلاعات نقطه', key: 'place-info' },
  { label: 'موقعیت جفرافیا', key: 'geographical-location' },
  { label: 'چجوری برم', key: 'routing' },
  { label: 'توضیحات', key: 'description' },
  { label: 'ویژگی های و امکانات', key: 'features-facilities' },
  { label: 'تحلیل بزنیم بیرون', key: 'analysis' },
  { label: 'کی برم', key: 'travel-time' },
  { label: 'تنظیمات سئو', key: 'seo-setting' },
  { label: 'تصاویر', key: 'images' },
  { label: 'بهبود اطلاعات', key: 'improve-content' },
  { label: 'دیدگاه ها', key: 'comments' },
];
