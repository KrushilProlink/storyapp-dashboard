import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { KTCard } from "../../../../_metronic/helpers";
import { PageTitle } from "../../../../_metronic/layout/core";
import { StoryCategory } from "./components/StoryCategory";

const StoryCategoryPage = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path="list"
                    element={
                        <>
                            <PageTitle>Category</PageTitle>
                            <KTCard>
                                <StoryCategory />
                            </KTCard>

                        </>
                    }
                />
            </Route>
            <Route
                index
                element={<Navigate to="/apps/story-category/list" />}
            />
        </Routes>
    );
};

export default StoryCategoryPage;
