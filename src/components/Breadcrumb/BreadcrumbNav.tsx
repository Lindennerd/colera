import { Breadcrumb } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCapitalize } from "~/utils/useCapitalize";

export const BreadCrumbNav = () => {
  const pathName = usePathname();
  const capitalize = useCapitalize();
  const pathNames = pathName.split("/").filter((path) => path !== "");
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      {pathNames.map((pathName, index) => {
        const isLast = index === pathNames.length - 1;
        return (
          <Breadcrumb.Item key={pathName}>
            {isLast ? (
              capitalize(pathName)
            ) : (
              <Link href={`/${pathName}`}>{capitalize(pathName)}</Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};
