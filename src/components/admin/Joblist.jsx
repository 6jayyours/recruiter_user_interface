import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllJobs } from '../../redux/slice/adminSlice';

const JobList = () => {
  const dispatch = useDispatch();
  const [jobs, setAllJobs] = useState([]);

  useEffect(() => {
    dispatch(getAllJobs())
      .then((response) => {
        console.log(response.payload);
        setAllJobs(response.payload);
      })
      .catch((error) => {
        console.error("Failed to fetch jobs:", error);
      });
  }, [dispatch]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Dashboard / Jobs</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Posted By</th>
              <th className="py-2 px-4 text-left">Job Title</th>
              <th className="py-2 px-4 text-left">Posted On</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="py-3 px-4 flex items-center">
                  <img
                    src="user_image_url"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-3 px-4">{job.user}</td>
                <td className="py-3 px-4">{job.jobTitle}</td>
                <td className="py-3 px-4">{new Date(job.postedTime).toLocaleDateString()}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-1 rounded ${job.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'} text-white`}>
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
