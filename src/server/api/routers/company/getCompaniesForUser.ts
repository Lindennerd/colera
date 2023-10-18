import { protectedProcedure } from "~/server/api/trpc";

export const getCompaniesForUser = protectedProcedure.query(({ ctx }) => {
  const companies = ctx.db.company.findMany({
    where: {
      CompanyUsers: {
        some: {
          userId: ctx.session.user?.id,
        },
      },
    },
  });

  return companies;
});
