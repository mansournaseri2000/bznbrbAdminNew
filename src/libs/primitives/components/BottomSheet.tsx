'use client';

import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

import { Theme } from '@radix-ui/themes';
import { styled } from 'styled-components';

export type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BottomSheetComponent: React.FC<BottomSheetProps> = ({ isOpen, children, onClose }) => {
  return (
    <BottomSheetStyle open={isOpen} onDismiss={onClose}>
      <Theme>{children}</Theme>
    </BottomSheetStyle>
  );
};

export default BottomSheetComponent;

const BottomSheetStyle = styled(BottomSheet)`
  [data-rsbs-overlay] {
    max-height: 90vh;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
`;
