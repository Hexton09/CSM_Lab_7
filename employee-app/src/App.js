import React from 'react';
import EmployeePortal from './components/EmployeePortal';

const App = () => {

  const tasks = [
    { id: 1, description: 'Complete task 1' },
    { id: 2, description: 'Review task 2' },
    // Add more tasks
  ];

  const courses = [
    { id: 1, title: 'React Fundamentals' },
    { id: 2, title: 'JavaScript Advanced' },
    // Add more courses
  ];

  const completedCourses = [
    { id: 3, title: 'Redux Basics' },
    // Add more completed courses
  ];

  const handleLeaveSubmit = data => {
    // Handle leave submission logic
    console.log('Leave application submitted:', data);
  };

  return (
    <div>
      <EmployeePortal
        tasks={tasks}
        courses={courses}
        completedCourses={completedCourses}
        onLeaveSubmit={handleLeaveSubmit}
      />
    </div>
  );
};

export default App;
