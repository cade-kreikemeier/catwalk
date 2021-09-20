import { ReactNode } from 'react';

export interface modalProps {
  modalContent: ReactNode,
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>
}