import { useIntl } from "react-intl";
import { PageTitle } from "../../../_metronic/layout/core";
import {
  ListsWidget1,
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  MixedWidget10,
  MixedWidget11,
  MixedWidget2,
  StatisticsWidget5,
  TablesWidget10,
  TablesWidget5,
} from "../../../_metronic/partials/widgets";
import { BarChart } from "./BarChart";
import CountCard from "./CountCard";
import LineChart from "./LineChart";

const DashboardPage = () => (
  <>
    {/* begin::Row */}
    <div className="row g-5 g-xl-8">
      <div className="col-xl-3">
        <CountCard
          className="card-xl-stretch mb-xl-8"
          count={10}
          color="#7239ea"
          iconColor="primary"
          title="Last Day"
          description=""
          titleColor="white"
          descriptionColor="gray-400"
        />
      </div>

      <div className="col-xl-3">
        <CountCard
          className="card-xl-stretch mb-xl-8"
          count={12}
          color="primary"
          iconColor="white"
          title="Last Week"
          description=""
          titleColor="white"
          descriptionColor="white"
        />
      </div>
      <div className="col-xl-3">
        <CountCard
          className="card-xl-stretch mb-5 mb-xl-8"
          count={1}
          color="dark"
          iconColor="gray-100"
          title="Last Month"
          description=""
          titleColor="gray-100"
          descriptionColor="gray-100"
        />
      </div>
      <div className="col-xl-3">
        <CountCard
          className="card-xl-stretch mb-5 mb-xl-8"
          count={5}
          color="#f8285a"
          iconColor="gray-100"
          title="Users"
          description=""
          titleColor="gray-100"
          descriptionColor="gray-100"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-xxl-6">
        <BarChart
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
          chartColor="primary"
          chartHeight="400px"
        />
      </div>
      <div className="col-xxl-6">
        <LineChart
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
          chartColor="primary"
          chartHeight="420px"
        />
      </div>
    </div>

    {/* <div className="row g-5 g-xl-8">
      <div className="col-xl-4">
        <ListsWidget1 className="card-xl-stretch mb-xl-8" />
      </div>

      <div className="col-xl-12">
        <TablesWidget5 className="card-xl-stretch mb-5 mb-xl-8" />
      </div>
    </div> */}

    {/* <div className="row gy-5 g-xl-8">
      <div className="col-xxl-4">
        <MixedWidget2
          className="card-xl-stretch mb-xl-8"
          chartColor="danger"
          chartHeight="200px"
          strokeColor="#cb1e46"
        />
      </div>
      <div className="col-xxl-4">
        <ListsWidget5 className="card-xxl-stretch" />
      </div>
      <div className="col-xxl-4">
        <MixedWidget10
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
          chartColor="primary"
          chartHeight="150px"
        />
        <MixedWidget11
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
          chartColor="primary"
          chartHeight="175px"
        />
      </div>
    </div> */}
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className="row gy-5 gx-xl-8">
      <div className="col-xxl-4">
        <ListsWidget3 className="card-xxl-stretch mb-xl-3" />
      </div>
      <div className="col-xl-8">
        <TablesWidget10 className="card-xxl-stretch mb-5 mb-xl-8" />
      </div>
    </div> */}
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className="row gy-5 g-xl-8">
      <div className="col-xl-4">
        <ListsWidget2 className="card-xl-stretch mb-xl-8" />
      </div>
      <div className="col-xl-4">
        <ListsWidget6 className="card-xl-stretch mb-xl-8" />
      </div>
      <div className="col-xl-4">
        <ListsWidget4 className="card-xl-stretch mb-5 mb-xl-8" items={5} />
      </div>
    </div> */}
    {/* end::Row */}
  </>
);

const DashboardWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
