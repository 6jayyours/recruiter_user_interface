import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPicture, profilePicture } from "../../redux/slice/adminSlice";

const AdminProfile = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.token)

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Example of fetching profile image for a specific user (id=1)
    dispatch(getPicture(id))
      .then(response => {
        console.log(response.payload)
        setProfileImage(response.payload)
      })
      .catch(error => {
        console.error('Error fetching profile image:', error);
      });
  }, [dispatch]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      handleDocumentSubmit(file);
    }
  };

  const handleDocumentSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }
    if (selectedFile.size === 0) {
      console.error("Please upload a file");
      return;
    }
    if (selectedFile.size > 10 * 1024 * 1024) {
      console.error("File size exceeds 10MB limit.");
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('id', id);
    dispatch(profilePicture(formData))
      .then(response => {
        console.log("Profile picture uploaded successfully");
        // Perform any additional actions upon successful upload
      })
      .catch(error => {
        console.error("Error uploading profile picture:", error);
        // Handle error scenario
      });
  };

  return (
    <div className="p-6 bg-gwhite min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard / Admin Profile</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-col md:flex-row items-center md:items-end mb-8">
          <div className="text-center">
            <input type="file" className="hidden" id="profile-picture" onChange={handleFileChange}/>
            <label htmlFor="profile-picture" className="cursor-pointer">
              <div className="w-28 h-28 max-w-[112px] max-h-[112px] mx-auto relative">
                <img
                  className="rounded-full shadow ring-4 ring-white"
                  src={previewUrl || profileImage}
                  alt="Profile"
                />
                <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100">
                  <span>Change</span>
                </div>
              </div>
            </label>
          </div>
          <div className="mt-4 md:mt-0 md:ml-5 text-center md:text-left">
            <h5 className="text-xl font-semibold">Arjun M</h5>
            <p className="text-gray-500">Admin</p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-md shadow bg-white border border-gray-300">
              <h5 className="text-lg font-semibold mb-4">Personal Details:</h5>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium" htmlFor="firstname">
                    First Name:<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="lastname">
                    Last Name:<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="username">
                    Username:<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Username"
                    id="username"
                    name="username"
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="email">
                    Email:<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Email"
                    id="email"
                    name="email"
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="gender">
                    Gender:<span className="text-red-600">*</span>
                  </label>
                  <select
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    id="gender"
                    name="gender"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-span-2">
                <button className="bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded-md mt-5">
                  Save Changes
                </button>
                </div>
              </form>
            </div>
            <div className="p-6 rounded-md shadow bg-white border border-gray-300">
              <h5 className="text-lg font-semibold mb-4">Contact Info:</h5>
              <form>
                <div>
                  <label className="font-medium" htmlFor="phone">
                    Phone No :
                  </label>
                  <input
                    name="phone"
                    id="phone"
                    type="tel"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded-md mt-5">
                  Save Changes
                </button>
              </form>
            </div>
            <div className="p-6 rounded-md shadow bg-white border border-gray-300">
              <h5 className="text-lg font-semibold mb-4">Change Password:</h5>
              <form>
                <div>
                  <label className="font-medium" htmlFor="oldPassword">
                    Old Password :
                  </label>
                  <input
                    name="oldPassword"
                    id="oldPassword"
                    type="password"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Old Password"
                  />
                </div>
                <div className="mt-4">
                  <label className="font-medium" htmlFor="newPassword">
                    New Password :
                  </label>
                  <input
                    name="newPassword"
                    id="newPassword"
                    type="password"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="New Password"
                  />
                </div>
                <div className="mt-4">
                  <label className="font-medium" htmlFor="confirmPassword">
                    Re-type New Password :
                  </label>
                  <input
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Re-type New Password"
                  />
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded-md mt-5">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
