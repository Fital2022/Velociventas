import React, { FC, PropsWithChildren, useState } from "react";
import { ModalContext } from './ModalContenxt'

export const StateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(true);
  return <ModalContext.Provider value={{
    setIsFirtsTime: (value:boolean) => setModal(value), 
    modal
  }}>{children}</ModalContext.Provider>
};
