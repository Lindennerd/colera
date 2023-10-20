import { type Company } from "@prisma/client";
import React, { createContext } from "react";

export interface ICompanyContext {
  setCompany: (company: Company) => void;
  company: Company;
}

const CompanyContext = createContext<ICompanyContext>({
  setCompany: () => {
    return;
  },
  company: {} as Company,
});

export const useCompanyContext = () => React.useContext(CompanyContext);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [companyState, setCompanyState] = React.useState<Company>(
    {} as Company
  );

  const setCompany = (company: Company) => {
    setCompanyState(company);
  };

  return (
    <CompanyContext.Provider
      value={{
        setCompany,
        company: companyState,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
