import React, { useEffect, useState } from 'react';
import useFetchLessons from '../hooks/useFetchLessons';

const LessonList = () => {
    const { lessons, loading } = useFetchLessons();

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Daftar Pelajaran</h2>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson._id}>{lesson.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default LessonList;