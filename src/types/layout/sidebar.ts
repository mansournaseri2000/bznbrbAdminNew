export interface SidebarOptionsDetail {
  text: string;
  path?: string;
  type: 'collapse' | 'expand';
  Icon: React.ElementType;
  items?: ItemsDetail[];
}

interface ItemsDetail {
  text: string;
  path: string;
}
