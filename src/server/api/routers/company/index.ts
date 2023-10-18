import { createTRPCRouter } from "~/server/api/trpc";
import { getCompaniesForUser } from "./getCompaniesForUser";

export const companyRouter = createTRPCRouter({
  getCompaniesForUser,
});
