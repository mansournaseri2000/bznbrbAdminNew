'use client';

import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  text: string;
  id?: string;
};

const ClientRenderText = ({ text, id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return <p id={id} {...typoVariant.body3} style={{ color: colorPalette.gray[11], fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default ClientRenderText;

/**
 * styled-component
 * _______________________________________________________________________________
 */
