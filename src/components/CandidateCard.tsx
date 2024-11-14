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
  return (
    // If there is no currentCandidate, return a message.
    // Otherwise, return the candidate card.
    <>
        {!currentCandidate.name ? (
            <h2>No candidate to show</h2>
        ) : (
            <div className="card">
            <img src={currentCandidate.avatar_url} alt={currentCandidate.name} width="200" height="200" />
            <div className="info">
                <h2>{currentCandidate.name}</h2>
                {/* If each value is not null, then diplsay it. */}
                
                {currentCandidate.login && 
                    (<p><strong>Username:</strong> {currentCandidate.login}</p>
                )}

                {currentCandidate.location && 
                    (<p><strong>Location:</strong> {currentCandidate.location}</p>
                )}

                {currentCandidate.email && 
                    (<p><strong>Email:</strong> {currentCandidate.email}</p>
                )}

                {currentCandidate.company && 
                    (<p><strong>Company:</strong> {currentCandidate.company}</p>
                )}

                {currentCandidate.bio && 
                    (<p><strong>Bio:</strong> {currentCandidate.bio}</p>
                )}


            </div>
            <div className="buttons">
                {addToSavedCandidates && (
                <button onClick={addToSavedCandidates}>Save Candidate</button>
                )}
                {rejectCandidate && (
                <button onClick={rejectCandidate}>Reject Candidate</button>
                )}
            </div>
            </div>
        )}
    </>
  );
};

export default CandidateCard;
