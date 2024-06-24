import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../../redux/slice/adminSlice";

const Userslist = () => {
  const dispatch = useDispatch();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const formData = { role: "USER" };
    dispatch(listUsers(formData))
      .then((response) => {
        setCandidates(response.payload);
      })
      .catch((error) => {});
  }, [dispatch]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Dashboard / Job Seekers</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">User Status</th>
              <th className="py-2 px-4 text-left">User Subscription</th>
              <th className="py-2 px-4 text-left"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {candidates.map((user) => (
              <tr key={user.id}>
                <td className="py-3 px-4 flex items-center">
                  <img
                    src={user.profileImageUrl} // Adjust field name accordingly
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="py-3 px-4">
                  {user.firstName} {user.lastName}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-2 py-1 rounded ${
                      user.isActive ? "bg-green-500" : "bg-gray-400"
                    } text-white`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-2 py-1 rounded ${
                      user.subscription === "Premium"
                        ? "bg-blue-500"
                        : "bg-yellow-500"
                    } text-white`}
                  >
                    {user.subscription ? "Subscribed" : "Free"}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    className={`py-1 px-3 rounded ${
                      user.isActive
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    } text-white`}
                  >
                    {user.isActive ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userslist;
