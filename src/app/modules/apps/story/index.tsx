import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { KTCard } from "../../../../_metronic/helpers";
import { PageTitle } from "../../../../_metronic/layout/core";
import { Story } from "./components/Story";

const StoryPage = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path="list"
                    element={
                        <>
                            <PageTitle>Story</PageTitle>
                            <KTCard>
                                <Story />
                            </KTCard>

                        </>
                    }
                />
            </Route>
            <Route
                index
                element={<Navigate to="/apps/story/list" />}
            />
        </Routes>
    );
};

export default StoryPage;
