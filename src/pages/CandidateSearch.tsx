import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>(
  {
    avatar_url: '',
    name: '',
    login: '',
    location: '',
    email: '',
    company: '',
    bio: ''
  });

  useEffect(() => {
    getRandomCandidate();
  }, []);

  const addToSavedCandidates = async () => {
    // Save the current candidate to the local Storage.
    const savedCandidates = JSON.parse(localStorage.getItem('SavedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('SavedCandidates', JSON.stringify(savedCandidates));

    await getRandomCandidate();
  };

  // Get a random candidate from the Github API.
   const getRandomCandidate = async () => {
    const candidate = await searchGithub();
    const user = await searchGithubUser(candidate.login);
    setCurrentCandidate({
      avatar_url: candidate.avatar_url,
      name: candidate.name,
      login: candidate.login,
      location: user.location,
      email: user.email,
      company: user.company,
      bio: user.bio
  })};

  return (
    <>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToSavedCandidates={addToSavedCandidates}
        rejectCandidate={getRandomCandidate}
      />
    </>
  );
};

export default CandidateSearch;
