import React from 'react';

const LessonDetail = ({ lesson }) => {
    return (
        <div>
            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>
            {/* Tambahkan kuiz di sini */}
        </div>
    );
};

export default LessonDetail;