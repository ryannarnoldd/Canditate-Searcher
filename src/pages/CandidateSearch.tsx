import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>(
  {
    login: '',
    image: '',
    name: '',
    username: '',
    location: '',
    email: '',
    company: '',
    bio: ''
  });

  useEffect(() => {
    getRandomCandidate();
  }, []);

  const addToSavedCandidates = () => {
    // Save the current candidate to the local Storage.
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  };

  // Get a random candidate from the Github API.
   const getRandomCandidate = async () => {
    // Get the login using searchGithub and pass it into searchGithubUser.
    const candidate = await searchGithub();
    console.log(candidate);
    const user = await searchGithubUser(candidate.login);
    setCurrentCandidate({
      login: user.login,
      image: user.avatar_url,
      name: user.name,
      username: user.login,
      location: user.location,
      email: user.email,
      company: user.company,
      bio: user.bio,
    });
  };

  return (
    <>
      <div className="search">
        <button onClick={getRandomCandidate}>Reject Candidate</button>
        <button onClick={addToSavedCandidates}>Save Candidate</button>
      </div>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToSavedCandidates={addToSavedCandidates}
        rejectCandidate={getRandomCandidate}
      />
    </>
  );
};

export default CandidateSearch;
