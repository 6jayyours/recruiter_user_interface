import React, { useEffect, useState } from "react";
import Banner from "../../components/user/Banner";
import { useDispatch } from "react-redux";
import { getAllJobs } from "../../redux/slice/jobSlice";
import JobList from "../../components/user/JobList";


const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllJobs())
    
      .then(response => {
        console.log(response.payload)
        setJobs(response.payload);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('error fetching jobs', error);
      });
  }, [dispatch]);

  

  return (
    <div>
      <Banner />
      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-12">
        <div className="min-h-96">
          <JobList jobs={jobs}/>
        </div>
        
      </div>
    </div>
  );
};

export default Jobs;
