import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h2>Employee Profile</h2>
      <div>
        <strong>Name:</strong>{user && user.preferred_username}
      </div>
      <div>
        <strong>Email:</strong> {user && user.email}
      </div>
      {/* Add other profile details */}
    </div>
  );
};

export default Profile;
