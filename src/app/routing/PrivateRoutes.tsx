import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";

const PrivateRoutes = () => {
  
  const StoryCategoryPage = lazy(
    () => import("../modules/apps/story-category")
  );
  const StorySubCategoryPage = lazy(
    () => import("../modules/apps/story-subcategory")
  );
  const StoryPage = lazy(
    () => import("../modules/apps/story")
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardWrapper />} />
   
        <Route
          path="apps/story-category/*"
          element={
            <SuspensedView>
              <StoryCategoryPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/story-subcategory/*"
          element={
            <SuspensedView>
              <StorySubCategoryPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/story/*"
          element={
            <SuspensedView>
              <StoryPage />
            </SuspensedView>
          }
        />

        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
