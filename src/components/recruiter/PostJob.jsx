import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../../redux/slice/jobSlice";

const PostJob = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.id);

  const [jobTitle, setJobTitle] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobLevel, setJobLevel] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [salary, setSalary] = useState('');
  const [skills, setSkills] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      jobTitle,
      jobCategory,
      jobType,
      jobLevel,
      experience,
      qualification,
      salary,
      skills,
      country,
      state,
      city,
      pincode,
      company,
      description,
      requirements,
      responsibilities,
      userId
    };

    dispatch(createJob(jobData))
      .then((response) => {
        console.log(response);
        // Handle success response if needed
      })
      .catch((error) => {
        console.error('Error posting job:', error);
        // Handle error response if needed
      });
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard / Submit Job</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-md shadow bg-white border border-gray-300">
              <h5 className="text-lg font-semibold mb-4">Job Details:</h5>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium" htmlFor="jobTitle">
                    Job Title:<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Job Title"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="jobCategory">
                    Job Category:<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Job Category"
                    id="jobCategory"
                    value={jobCategory}
                    onChange={(e) => setJobCategory(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="jobType">
                    Job Type:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Job Type"
                    id="jobType"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="jobLevel">
                    Job Level:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Job Level"
                    id="jobLevel"
                    value={jobLevel}
                    onChange={(e) => setJobLevel(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="experience">
                    Experience:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Experience"
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="qualification">
                    Qualification:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Qualification"
                    id="qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="salary">
                    Salary:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Salary"
                    id="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="skills">
                    Skills:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Skills"
                    id="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="country">
                    Country:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="state">
                    State:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="State"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="city">
                    City:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="City"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="pincode">
                    Pincode:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Pincode"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-medium" htmlFor="company">
                    Company:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Company"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <label className="font-medium" htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Job Description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                  />
                </div>
                <div className="col-span-2">
                  <label className="font-medium" htmlFor="requirements">
                    Requirements:
                  </label>
                  <textarea
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Job Requirements"
                    id="requirements"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    rows={5}
                  />
                </div>
                <div className="col-span-2">
                  <label className="font-medium" htmlFor="responsibilities">
                    Responsibilities:
                  </label>
                  <textarea
                    className="w-full border border-gray-300 p-2 mt-2 rounded-md"
                    placeholder="Job Responsibilities"
                    id="responsibilities"
                    value={responsibilities}
                    onChange={(e) => setResponsibilities(e.target.value)}
                    rows={5}
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white py-2 px-4 rounded-md mt-5"
                  >
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
