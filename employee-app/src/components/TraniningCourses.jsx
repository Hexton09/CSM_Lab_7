import React from 'react';

const TrainingCourses = ({ courses, completedCourses }) => {
  return (
    <div>
      <h2>Training Courses</h2>
      <div>
        <h3>Completed Courses</h3>
        <ul>
          {completedCourses.map(course => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Available Courses</h3>
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainingCourses;
