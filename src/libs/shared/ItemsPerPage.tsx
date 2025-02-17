import React from 'react';

import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import { Text } from '../primitives';

type Props = {
  data: any;
  currentPage: number;
  totalCount: number;
  keyText?: string;
};

const ItemsPerPage = (props: Props) => {
  const { data, currentPage, totalCount, keyText = 'برنامه' } = props;

  const itemsPerPage = data?.length;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalCount);

  return <Text {...typoVariant.body2} style={{ color: colorPalette.gray[11] }}>{`${startIndex}-${endIndex} از ${totalCount} ${keyText}`}</Text>;
};

export default ItemsPerPage;
