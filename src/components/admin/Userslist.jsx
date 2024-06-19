import React from 'react';

const Userslist = () => {
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
            <tr>
              <td className="py-3 px-4 flex items-center">
                <img
                  src="user_image_url"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-3 px-4">John Doe</td>
              <td className="py-3 px-4">
                <span className="inline-block px-2 py-1 rounded bg-green-500 text-white">
                  Active
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="inline-block px-2 py-1 rounded bg-blue-500 text-white">
                  Premium
                </span>
              </td>
              <td className="py-3 px-4">
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                  Block
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 flex items-center">
                <img
                  src="user_image_url"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-3 px-4">Jane Smith</td>
              <td className="py-3 px-4">
                <span className="inline-block px-2 py-1 rounded bg-gray-400 text-white">
                  Inactive
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="inline-block px-2 py-1 rounded bg-yellow-500 text-white">
                  Free
                </span>
              </td>
              <td className="py-3 px-4">
                <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">
                  Unblock
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 flex items-center">
                <img
                  src="user_image_url"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-3 px-4">Jane Smith</td>
              <td className="py-3 px-4">
                <span className="inline-block px-2 py-1 rounded bg-gray-400 text-white">
                  Inactive
                </span>
              </td>
              <td className="py-3 px-4">
                <span className="inline-block px-2 py-1 rounded bg-yellow-500 text-white">
                  Free
                </span>
              </td>
              <td className="py-3 px-4">
                <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">
                  Unblock
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userslist;
