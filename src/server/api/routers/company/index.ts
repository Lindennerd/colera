import { createTRPCRouter } from "~/server/api/trpc";
import { createCompany, setCompanyLogo } from "./createCompany";
import { getCompaniesForUser } from "./getCompaniesForUser";

export const companyRouter = createTRPCRouter({
  getCompaniesForUser,
  createCompany,
  setCompanyLogo,
});
