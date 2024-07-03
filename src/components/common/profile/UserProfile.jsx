import React, { useEffect, useState } from "react";
import EducationModal from "../../user/modals/EducationModal";
import ExperienceModal from "../../user/modals/ExperienceModal";
import SkillModal from "../../user/modals/SkillModal";
import { useDispatch, useSelector } from "react-redux";
import { getEdu, getExp, getSkill } from "../../../redux/slice/authSlice";

const UserProfile = () => {
  const id = useSelector((state) => state.auth.id);

  const dispatch = useDispatch();

  const [expModal, setExpModal] = useState(false);
  const [eduModal, setEduModal] = useState(false);
  const [skillModal, setSkillModal] = useState(false);

  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    dispatch(getExp(id))
      .then((response) => {
        console.log(response.payload);
        setExperiences(response.payload);
      })
      .catch((error) => {
        console.error("Error fetching experience:", error);
      });
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getEdu(id))
      .then((response) => {
        console.log(response.payload);
        setEducations(response.payload);
      })
      .catch((error) => {
        console.error("Error fetching experience:", error);
      });
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getSkill(id))
      .then((response) => {
        console.log(response.payload);
        setSkills(response.payload);
      })
      .catch((error) => {
        console.error("Error fetching experience:", error);
      });
  }, [dispatch, id]);

  const toggleExpModal = () => {
    setExpModal(!expModal);
  };

  const toggleEduModal = () => {
    setEduModal(!eduModal);
  };

  const toggleSkillModal = () => {
    setSkillModal(!skillModal);
  };

  return (
    <div className="p-6 bg-white min-h-screen mt-20">
      <div className="overflow-x-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-md shadow bg-white border border-gray-300 flex">
              <div>
                <input type="file" className="hidden" id="profile-picture" />
                <label htmlFor="profile-picture" className="cursor-pointer">
                  <div className="w-28 h-28 max-w-[112px] max-h-[112px] relative">
                    <img
                      className="rounded-full shadow ring-4 ring-white"
                      src={""}
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
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold mb-4">Experience:</h5>
                <button
                  className="bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded-md"
                  onClick={toggleExpModal}
                >
                  Add
                </button>
                {expModal && <ExperienceModal onClose={toggleExpModal} />}
              </div>
            </div>
            <div className="p-6 rounded-md shadow bg-white border border-gray-300">
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold mb-4">Education:</h5>
                <button
                  className="bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded-md"
                  onClick={toggleEduModal}
                >
                  Add
                </button>
                {eduModal && <EducationModal onClose={toggleEduModal} />}
              </div>
            </div>
            <div className="p-6 rounded-md shadow bg-white border border-gray-300">
              <div className="flex justify-between items-center">
                <h5 className="text-lg font-semibold mb-4">Skills:</h5>
                <button
                  className="bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded-md"
                  onClick={toggleSkillModal}
                >
                  Add
                </button>
                {skillModal && <SkillModal onClose={toggleSkillModal} />}
              </div>
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

export default UserProfile;
