import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { KTCard } from "../../../../_metronic/helpers";
import { PageTitle } from "../../../../_metronic/layout/core";
import { StorySubCategory } from "./components/StorySubCategory";
const StorySubCategoryPage = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path="list"
                    element={
                        <>
                            <PageTitle>Sub Category</PageTitle>
                            <KTCard>
                                <StorySubCategory />
                            </KTCard>

                        </>
                    }
                />
            </Route>
            <Route
                index
                element={<Navigate to="/apps/story-subcategory/list" />}
            />
        </Routes>
    );
};

export default StorySubCategoryPage;
