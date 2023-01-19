import { createContext } from "react";

export const ModalContext = createContext({
    modal: true,
    setIsFirtsTime: (value:boolean) =>{}
})