import { MdCategory, MdDashboard } from "react-icons/md";
import { useIntl } from "react-intl";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  const intl = useIntl();

  return (
    <>
      <AsideMenuItem
        to="/dashboard"
        icon={<MdDashboard />}
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
      />

      <AsideMenuItem
        to="/apps/story-category/list"
        icon={<MdCategory />}
        title="Category"
      />
      <AsideMenuItem
        to="/apps/story-subcategory/list"
        icon={<MdCategory />}
        title="Sub Category"
      />
      <AsideMenuItem
        to="/apps/story/list"
        icon={<MdCategory />}
        title="Story"
      />
   
    </>
  );
}
