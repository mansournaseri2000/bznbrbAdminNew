import { CreateArticleButtonTypes, EditArticleButtonTypes } from '@/types/data-management/article';
import { CreatePointButtonTypes, EditPointButtonTypes } from '@/types/data-management/point';

export const StatusFilterOption = [
  { id: 1, key: 'هیچکدام', value: null },
  { id: 2, key: 'فعال', value: true },
  { id: 3, key: 'غیر فعال', value: false },
];
export const isPublishedOptions = [
  { id: 1, key: 'هیچکدام', value: null },
  { id: 2, key: 'پیش نویس', value: false },
  { id: 3, key: 'انتشار', value: true },
];

export const booleanFilterOptions = [
  { id: 1, key: 'هیچکدام', value: null },
  { id: 2, key: 'دارد', value: true },
  { id: 3, key: 'ندارد', value: false },
];

export const formStatusOptions = [
  { id: 1, key: 'فعال', value: true },
  { id: 2, key: 'غیر فعال', value: false },
];

export const formPublishedOptions = [
  { id: 1, key: 'پیش نویس', value: false },
  { id: 2, key: 'انتشار', value: true },
];

export const pointTypeOptions = [
  { id: 1, key: 'گردشگری', value: 'گردشگری', disable: false },
  { id: 2, key: 'شکم گردی', value: 'شکم گردی', disable: false },
  { id: 3, key: 'مذهبی', value: 'مذهبی', disable: false },
  { id: 4, key: 'هنرگردی', value: 'هنرگردی', disable: false },
  { id: 6, key: 'سرویس ها', value: 'سرویس ها', disable: false },
  { id: 7, key: 'فروشگاه', value: 'فروشگاه', disable: false },
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

export const createArticleTabsOptions: { label: string; key: CreateArticleButtonTypes }[] = [
  { label: 'اطلاعات اولیه', key: 'initial-data' },
  { label: 'محتوای متنی', key: 'text-content' },
  { label: 'نقاط مرتبط', key: 'related-points' },
  { label: 'تنظیمات سئو', key: 'seo-setting' },
];

export const editArticleTabsOptions: { label: string; key: EditArticleButtonTypes }[] = [
  { label: 'اطلاعات اولیه', key: 'initial-data' },
  { label: 'محتوای متنی', key: 'text-content' },
  { label: 'نقاط مرتبط', key: 'related-points' },
  { label: 'تنظیمات سئو', key: 'seo-setting' },
  { label: 'تصاویر', key: 'images' },
];
