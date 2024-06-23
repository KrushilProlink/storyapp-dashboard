import TablePagination from "@mui/material/TablePagination";
import { FC, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import img from '../../../../../_metronic/assets/image/1.png';
import { KTIcon } from "../../../../../_metronic/helpers";
const API_URL = import.meta.env.VITE_APP_API_URL;

type CallData = {
    serial_no: number;
    device_id: string;
    no_of_calls: number;
    overall_score: number;
    recruiter_name: string;
    team: string;
    total_call_duration: string;
};

const Story: FC = () => {
    const [allCallData, setAllCallData] = useState<CallData[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const story = [
        {
            id: '1', srNo: '1',storyName:'હાથી અને કીડી ની વાર્તાઓ', categoryName: '૫શુ ની કહાનીઓ', createAt: '2024-06-12'
        },
        {
            id: '2', srNo: '2',storyName:'', categoryName: 'પક્ષી ની કહાનીઓ', createAt: '2024-06-12'
        },
        {
            id: '3', srNo: '3',storyName:'', categoryName: 'રાજા ની કહાનીઓ', createAt: '2024-06-12'
        },
        {
            id: '4', srNo: '4',storyName:'', categoryName: 'મિત્ર ની કહાનીઓ', createAt: '2024-06-12'
        },
    ]

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };




    return (
        <div>

            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <div></div>
                <div
                    className='card-toolbar'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    data-bs-trigger='hover'
                    title='Click to add a story'
                >
                    <a
                        href='#'
                        className='btn btn-sm btn-light-primary'
                    >
                        <KTIcon iconName='plus' className='fs-3' />
                        Add New
                    </a>
                </div>
            </div>
            <div className="card-body py-3">
                <div className="table-responsive">
                    <table className="table  table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                            <tr className="fw-bold text-muted bg-light">
                                <th className="text-center">Serial No</th>
                                <th className=" text-center">Story Name</th>
                                <th className=" text-center">Category Name</th>
                                <th className="text-center">CreateAt</th>
                                <th className="text-end pe-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading ? (
                                story?.length > 0 &&
                                story
                                    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    ?.map((item: any, index: number) => (
                                        <tr>
                                            <td className="text-gray-900 fw-bold text-hover-primary fs-6  text-center">
                                                {item?.srNo || "-"}
                                            </td>
                                           
                                            <td className="text-gray-900 fw-bold text-hover-primary fs-6 text-center">
                                                {item?.storyName || "-"}
                                            </td>
                                            <td className="text-gray-900 fw-bold text-hover-primary fs-6 text-center">
                                                {item?.categoryName || "-"}
                                            </td>

                                            <td className="text-gray-900 fw-bold text-hover-primary fs-6 text-center">
                                                {item?.createAt || "-"}
                                            </td>

                                            <td className="text-gray-900 fw-bold text-hover-primary fs-6 pe-4">
                                                <span
                                                    className="flex-shrink-0 btn btn-bg-secondary btn-color-muted btn-active-color-danger btn-sm "
                                                    style={{ float: "right" }}
                                                >
                                                    <MdDelete
                                                        style={{ cursor: "pointer", fontSize: "20px" }}
                                                    />
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={10}
                                        className="text-center text-gray-900 fw-bold  fs-6"
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                padding: "160px 0",
                                            }}
                                        >
                                            <span
                                                className="spinner-border text-primary"
                                                role="status"
                                            ></span>
                                            <span className="text-muted fs-6 fw-semibold mt-5">
                                                Loading...
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            )}
                            {story?.length === 0 && !isLoading && (
                                <tr>
                                    <td
                                        colSpan={10}
                                        className="text-center text-gray-900 fw-bold  fs-6"
                                    >
                                        No Data Found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {story?.length > 0 && !isLoading && (
                        <TablePagination
                            rowsPerPageOptions={[5, 25, 100]}
                            component="div"
                            count={story.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export { Story };

