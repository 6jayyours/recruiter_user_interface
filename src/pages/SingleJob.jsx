import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";

const SingleJob = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col justify-center items-center p-4 md:p-8 lg:p-16 mt-12 md:mt-4 bg-gray-50">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-indigo-200 p-12 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-indigo-700">Java Developer</h1>
            <div className="flex flex-wrap mt-2">
              <div className="flex items-center gap-1 mr-4 text-gray-700">
                <CgOrganisation  />
                <span>Brototype</span>
              </div>
              <div className="flex items-center gap-1 mr-4 text-gray-700">
                <FiMapPin  />
                <span>Karnataka, India</span>
              </div>
              <div className="flex items-center gap-1 mr-4 text-gray-700">
                <FaRegClock  />
                <span>Posted on: January 1, 2024</span>
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <GiMoneyStack  />
                <span>60000 - 80000</span>
              </div>
            </div>
            <div className="mt-2">
              <span className="bg-indigo-400 text-white px-3 py-1 rounded-full">Full time</span>
            </div>
          </div>
          <div>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition duration-300">
              Apply For Job
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mt-4">
            <h2 className="text-xl font-bold text-indigo-700">Job Description:</h2>
            <p className="text-gray-700 mt-2">
              We are looking for a highly skilled Java Developer to join our team at Brototype. As a Java Developer, you will be responsible for developing and maintaining high-quality software applications. You will work closely with our team of developers, designers, and product managers to deliver exceptional software solutions.
            </p>
            <p className="text-gray-700 mt-2">Responsibilities include:</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Designing, implementing, and maintaining Java-based applications.</li>
              <li>Contributing to all phases of the development lifecycle.</li>
              <li>Writing well-designed, efficient, and testable code.</li>
              <li>Conducting software analysis, programming, testing, and debugging.</li>
              <li>Managing Java and Java EE application development.</li>
              <li>Ensuring designs comply with specifications.</li>
              <li>Preparing and producing releases of software components.</li>
              <li>Transforming requirements into stipulations.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-bold text-indigo-700">Requirements:</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Bachelor's degree in Computer Science, Engineering, or a related field.</li>
              <li>Proven experience as a Java Developer or similar role.</li>
              <li>Strong knowledge of Java, Java EE, and related frameworks.</li>
              <li>Experience with web technologies (HTML, CSS, JavaScript, etc.).</li>
              <li>Familiarity with Agile development methodologies.</li>
              <li>Excellent problem-solving skills and attention to detail.</li>
              <li>Good communication and teamwork skills.</li>
            </ul>
          </div>

          <div className="mt-4">
            <div className="flex gap-6">
              <div className="flex flex-col">
                <div className="bg-indigo-400 px-3 py-1 rounded-md mb-2 text-white">HTML, CSS, JavaScript</div>
                <div className="bg-indigo-400 px-3 py-1 rounded-md mb-2 text-white">Mid Level</div>
                <div className="bg-indigo-400 px-3 py-1 rounded-md text-white">Full Time</div>
              </div>
              <div className="flex flex-col">
                <div className="bg-indigo-400 px-3 py-1 rounded-md mb-2 text-white">Btech</div>
                <div className="bg-indigo-400 px-3 py-1 rounded-md text-white">2-5 years</div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-indigo-700 mt-4">Qualification:</h2>
            <p className="text-gray-700 mt-2">Bachelor's degree in Computer Science, Engineering, or a related field.</p>
            <h2 className="text-xl font-bold text-indigo-700 mt-4">Experience:</h2>
            <p className="text-gray-700 mt-2">3+ years of experience in Java development.</p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-bold text-indigo-700">Responsibilities:</h2>
            <p className="text-gray-700 mt-2">As a Java Developer, you will be responsible for:</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Writing clean, scalable Java code.</li>
              <li>Reviewing and debugging code.</li>
              <li>Managing databases.</li>
              <li>Testing and deploying applications and systems.</li>
              <li>Revising, updating, refactoring, and debugging code.</li>
              <li>Developing documentation throughout the software development life cycle (SDLC).</li>
              <li>Serving as an expert on applications and providing technical support.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
