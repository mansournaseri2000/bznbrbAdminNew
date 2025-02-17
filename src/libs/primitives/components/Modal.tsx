'use client';

import React, { ReactNode, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

// Modal.tsx

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: '-50%' },
  visible: { opacity: 1, y: '0%' },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Hide body scroll when modal is open
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Reset overflow when modal is closed
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup on unmount or when modal closes
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalBackdrop initial='hidden' animate='visible' exit='hidden' variants={backdropVariants} onClick={onClose}>
          <ModalContent
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={contentVariants}
            onClick={e => e.stopPropagation()} // Prevent closing the modal when clicking inside it
          >
            {children}
          </ModalContent>
        </ModalBackdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  border-radius: 10px;
  width: 80%;
  max-height: 700px;
  max-width: 800px;
  overflow: scroll;
`;
