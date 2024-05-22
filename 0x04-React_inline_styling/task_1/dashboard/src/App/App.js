import React from "react";
import CourseListRow from "./CourseListRow";
import PropType from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from "./CourseShape";

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          <>
            {listCourses.map((course) => (
              <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
            ))}
          </>
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropType.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    border: '1px solid #ddd',
    borderCollapse: 'collapse',
    margin: '20px 0',
  },
});

export default CourseList;
