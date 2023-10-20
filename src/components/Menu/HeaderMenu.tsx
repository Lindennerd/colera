import { useCompanyContext } from "~/context/useCompanyContext";
import { Auth } from "../Header/Auth";
import { CompaniesDropdown } from "../Header/CompaniesDropDown";

const headerMenuStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

export const HeaderMenu = () => {
  const { company } = useCompanyContext();

  return (
    <div style={headerMenuStyle}>
      <div style={{ color: "#fff" }} id="startMenu">
        {company.name ? company.name : "Cólera CRM"}
      </div>
      <div id="endMenu">
        <CompaniesDropdown />
        <Auth />
      </div>
    </div>
  );
};
