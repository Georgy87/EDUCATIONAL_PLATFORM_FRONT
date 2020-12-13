export const addCourseContent = (content) => {
    return {
        type: "ADD-COURSE-CONTENT",
        payload: content,
    };
};

export const setCourseContent = (content) => {
    return {
        type: "SET-COURSE-CONTENT",
        payload: content,
    };
};

export const setAllTeacherCourses = (content) => {
    return {
        type: "SET-ALL-TEACHER-COURSES",
        payload: content,
    };
};



export const setVideoName = (videoName) => {
    return {
        type: "SET-VIDEO-NAME",
        payload: videoName,
    };
};

export const setTimeLesson = (courseId, moduleId, lessonId) => {
    return {
        type: "SET-TIME-LESSON",
        payload: {
            courseId,
            moduleId,
            lessonId,
        },
    };
};
