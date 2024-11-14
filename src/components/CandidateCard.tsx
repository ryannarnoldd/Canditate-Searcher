// import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
  currentCandidate: Candidate;
  addToSavedCandidates?: (() => void) | null;
  rejectCandidate?: (() => void) | null;  
};

const CandidateCard = ({
  currentCandidate,
  addToSavedCandidates,
  rejectCandidate,
}: CandidateCardProps) => {
    console.log(currentCandidate);
  return (
    <>
    {currentCandidate.login ? (
      <div className="card">
        <img src={currentCandidate.image} alt={currentCandidate.name} />
        <div className="card-body">
          <h2>{currentCandidate.name}</h2>
          <p>{currentCandidate.location}</p>
          <p>{currentCandidate.email}</p>
          <p>{currentCandidate.company}</p>
          <p>{currentCandidate.bio}</p>
          {addToSavedCandidates && (
            <button onClick={addToSavedCandidates}>Save Candidate</button>
          )}
          {rejectCandidate && (
            <button onClick={rejectCandidate}>Reject Candidate</button>
          )}
        </div>
      </div>
    ):
    <div className="card">
        <h2>No candidate found</h2>
    </div>
    }
    </>
  );
};

export default CandidateCard;
