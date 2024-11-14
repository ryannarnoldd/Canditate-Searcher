import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  // Get the saved candidates from localStorage.
  const savedCandidates: Candidate[] = JSON.parse(localStorage.getItem('SavedCandidates') || '[]');
  return (
    <>
    {/* Make it a table of all the candidates in localStorage. */}
      <h1>Saved Candidates</h1>
    
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through the saved candidates and display them in the table. */}
          {/* Use the CandidateCard component to display each candidate. */}
          {/* Pass the current
          candidate, an empty function for addToSavedCandidates, and an empty function for rejectCandidate. */}
          {savedCandidates.map((candidate, index) => (
            <tr key={index}>
              <td><img src={candidate.avatar_url} alt={candidate.name} width="50" height="50" /></td>
              <td>{candidate.name}</td>
              <td>{candidate.login}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>{candidate.bio}</td>

              {/* Make a button to remove from localStorage. */}
              <td><button onClick={() => {
                const newCandidates = savedCandidates.filter((_, i) => i !== index);
                localStorage.setItem('SavedCandidates', JSON.stringify(newCandidates));
                window.location.reload();
              }}>Remove</button></td>
            </tr>
          ))}


        </tbody>
      </table>



    </>
  );
};

export default SavedCandidates;
