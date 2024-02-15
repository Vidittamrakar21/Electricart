import React, { createContext, useState, ReactNode } from "react";

type ContextProps = {
  log: boolean;
  openlog: (value: boolean) => void;
  userb: boolean;
  openuser: (value: boolean) => void;
  opt: boolean;
  openopt: (value: boolean) => void;
  socket: object | undefined;
  setsocket: (value: object)=> void;
  room: string
  setroom: (value : string)=> void
};

export const EcoContext = createContext<ContextProps | undefined>(undefined);

export const Ecoprovider = ({ children }: { children: ReactNode }) => {
  const [log, openlog] = useState(false);
  const [opt, openopt] = useState(false);
  const [userb, openuser] = useState(false);
  const [socket, setsocket] = useState({});
  const [room, setroom] = useState("");

  return (
    <EcoContext.Provider value={{ log, openlog, opt, openopt ,setsocket, socket,room,setroom, openuser,userb}}>
      <div>{children}</div>
    </EcoContext.Provider>
  );
};
