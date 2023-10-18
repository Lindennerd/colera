import { AddCompanyButton } from "../Header/AddCompanyButton";
import { Auth } from "../Header/Auth";
import { CompaniesDropdown } from "../Header/CompaniesDropDown";

const headerMenuStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

export const HeaderMenu = () => {
  return (
    <div style={headerMenuStyle}>
      <div id="startMenu">
        <AddCompanyButton />
        <CompaniesDropdown />
      </div>
      <div id="endMenu">
        <Auth />
      </div>
    </div>
  );
};
