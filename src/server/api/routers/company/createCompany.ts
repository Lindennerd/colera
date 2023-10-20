import { z } from "zod";
import { protectedProcedure } from "~/server/api/trpc";

const createCompanySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(11).max(15),
  address: z.string(),
  logo: z.string().optional(),
});

export type CreateCompany = z.infer<typeof createCompanySchema>;

export const createCompany = protectedProcedure
  .input(createCompanySchema)
  .mutation(async ({ ctx, input }) => {
    return await ctx.db.company.create({
      data: {
        name: input.name,
        email: input.email,
        phone: input.phone,
        address: input.address,
        logo: "",
        owner: {
          connect: {
            id: ctx.session.user.id,
          },
        },
        CompanyUsers: {
          create: {
            userId: ctx.session.user.id,
            role: "OWNER",
          },
        },
      },
    });
  });

export const setCompanyLogo = protectedProcedure
  .input(z.object({ companyId: z.number(), logo: z.string() }))
  .mutation(async ({ ctx, input }) => {
    return await ctx.db.company.update({
      where: {
        id: input.companyId,
      },
      data: {
        logo: input.logo,
      },
    });
  });
