import React, { useEffect, useState } from "react";
import HBanner from "../../components/recruiter/sections/HBanner";
import Candidatelist from "../../components/recruiter/Candidatelist";
import { useDispatch } from "react-redux";
import { listCandidates } from "../../redux/slice/authSlice";

const Candidates = () => {
  const dispatch = useDispatch();

  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const formData = { role: "USER" };
    dispatch(listCandidates(formData))
      .then((response) => {
        console.log(response.payload);
        setCandidates(response.payload);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("error fetching jobs", error);
      });
  }, [dispatch]);

  return (
    <div>
      <HBanner />
      <div className="bg-[#F1F5F8]  px-4 py-12">
        <div className="min-h-96">
          <Candidatelist candidates={candidates}/>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
