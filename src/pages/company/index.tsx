import { useSession } from "next-auth/react";
import { CompanyList } from "~/components/Company/CompanyList";
import { api } from "~/utils/api";

export default function Companies() {
  const { data: sessionData } = useSession();
  const {
    data: companies,
    isLoading,
    error,
  } = api.company.getCompaniesForUser.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <CompanyList list={companies} />
    </>
  );
}
