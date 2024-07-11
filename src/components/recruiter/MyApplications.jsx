import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllApps } from "../../redux/slice/adminSlice";

const MyApplications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [apps, setApps] = useState([]);
  const appsPerPage = 6;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllApps())
      .then((response) => {
        console.log(response.payload);
        setApps(response.payload);
      })
      .catch((error) => {
        console.error('Failed to fetch applications:', error);
      });
  }, [dispatch]);

  const totalPages = Math.ceil(apps.length / appsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  
  
  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard / Applications
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Job Title</th>
              <th className="py-2 px-4 text-left">Posted By</th>
              <th className="py-2 px-4 text-left">Applicant</th>
              <th className="py-2 px-4 text-left">Application Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {apps.map((app) => (
              <tr key={app.id}>
                <td className="py-3 px-4">{app.jobTitle}</td>
                <td className="py-3 px-4">{app.postedBy}</td>
                <td className="py-3 px-4">{app.applicant}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-1 rounded text-white ${app.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border border-gray-300 rounded bg-gray-200 hover:bg-gray-300"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border border-gray-300 rounded bg-gray-200 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyApplications;
