import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUser } from "../../../redux/slice/authSlice";
import profImg from "../../../assets/admin.jpg";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [candidate, setCandidate] = useState("");

  useEffect(() => {
    dispatch(getUser(id))
      .then((response) => {
        console.log(response.payload);
        setCandidate(response.payload);
      })
      .catch((error) => {
        console.error("error fetching user", error);
      });
  }, [dispatch, id]);

  return (
    <div className="h-screen mt-10 ">
      <div className="max-w-6xl mx-auto px-6 py-10 bg-white rounded-lg ">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10  px-11 py-6 shadow-lg">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img
              src={candidate.profileImageUrl}
              className="h-24 w-24 rounded-full border-4 border-indigo-500 shadow-md"
              alt="Profile"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {candidate.firstName} {candidate.lastName}
            </h1>
            <h2 className="text-xl font-medium text-gray-600 mb-4">
              Software Developer
            </h2>
            <div className="flex justify-center md:justify-start gap-4 text-gray-600">
              <span>Gender</span>
              <span>Place</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 mb-10 md:mb-0 pr-0 md:pr-10">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-indigo-600 mb-2">
                About
              </h1>
              <p className="text-gray-700">dkjshjfgskhdfgbehfgihu</p>
            </div>
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-indigo-600 mb-2">
                Experience
              </h1>
              <p className="text-gray-700">dsjhfgduhgfuhy</p>
            </div>
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-indigo-600 mb-2">
                Education
              </h1>
              <p className="text-gray-700">Education details</p>
            </div>
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-indigo-600 mb-2">
                Skills
              </h1>
              <p className="text-gray-700">Skills</p>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-indigo-600 mb-2">
                Personal Details
              </h1>
              <div className="text-gray-700">
                <div>Email: {candidate.email}</div>
                <div>Mobile: 1234567890</div>
                <div>Date of Birth: dd/mm/yyyy</div>
                <div>City: City Name</div>
                <div>State: State Name</div>
                <div>Country: Country Name</div>
                <div>Pincode: 123456</div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-indigo-600 mb-2">
                Socials
              </h1>
              <div className="flex gap-3">
                <a
                  href="#google"
                  className="text-gray-400 hover:text-red-500 p-3 rounded-md bg-gray-800 hover:bg-gray-600 shadow-md"
                >
                  <FaGoogle size={10} />
                </a>
                <a
                  href="#facebook"
                  className="text-gray-400 hover:text-blue-600 p-3 rounded-md bg-gray-800 hover:bg-gray-600 shadow-md"
                >
                  <FaFacebook size={10} />
                </a>
                <a
                  href="#twitter"
                  className="text-gray-400 hover:text-blue-400 p-3 rounded-md bg-gray-800 hover:bg-gray-600 shadow-md"
                >
                  <FaTwitter size={10} />
                </a>
                <a
                  href="#instagram"
                  className="text-gray-400 hover:text-pink-500 p-3 rounded-md bg-gray-800 hover:bg-gray-600 shadow-md"
                >
                  <FaInstagram size={10} />
                </a>
                <a
                  href="#linkedin"
                  className="text-gray-400 hover:text-blue-700 p-3 rounded-md bg-gray-800 hover:bg-gray-600 shadow-md"
                >
                  <FaLinkedin size={10} />
                </a>
                <a
                  href="#whatsapp"
                  className="text-gray-400 hover:text-green-500 p-3 rounded-md bg-gray-800 hover:bg-gray-600 shadow-md"
                >
                  <FaWhatsapp size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
