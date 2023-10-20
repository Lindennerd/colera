import Head from "next/head";
import CompanyForm from "~/components/Company/Forms/CompanyForm";
export default function CreateCompany() {
  return (
    <>
      <Head>
        <title>Cadastro de Empresa</title>
      </Head>
      <CompanyForm />
    </>
  );
}
