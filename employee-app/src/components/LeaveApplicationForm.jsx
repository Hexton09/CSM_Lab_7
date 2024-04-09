import React, { useState } from 'react';

const LeaveApplicationForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Perform validation and submit data
    onSubmit({ startDate, endDate });
  };

  return (
    <div>
      <h2>Leave Application</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default LeaveApplicationForm;
