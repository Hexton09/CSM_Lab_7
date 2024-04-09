import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Profile from './Profile';
import TaskList from './TaskList';
import TrainingCourses from './TraniningCourses';
import LeaveApplicationForm from './LeaveApplicationForm';
import './EmployeePortal.css';

const EmployeePortal = ({ user, tasks, courses, completedCourses, onLeaveSubmit }) => {
    const { keycloak, initialized } = useKeycloak();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (initialized && keycloak.authenticated) {
            // Retrieve user information from the token
            const { preferred_username } = keycloak.tokenParsed;
            setUserInfo({ preferred_username });
        }
    }, [initialized, keycloak]);

    const handleLogout = () => {
        keycloak.logout();
    };


    return (
        <div>
            {initialized && keycloak.authenticated && (<div className="employee-portal">

                <header className="header">
                    <h1>Welcome to Employee Portal</h1>
                </header>
                <Profile user={userInfo} />
                <TaskList tasks={tasks} />
                <TrainingCourses courses={courses} completedCourses={completedCourses} />
                <LeaveApplicationForm onSubmit={onLeaveSubmit} />
                <div className="logout">
                    <button onClick={handleLogout}>Log Out</button>
                </div>

            </div>)}
        </div>
    );
};


export default EmployeePortal;
