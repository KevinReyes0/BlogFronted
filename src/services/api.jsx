import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://localhost:3001/blog/v1",
    timeout: 5000,
    headers: { "Cache-Control": "no-cache, no-store, must-revalidate" }
});



export const getCourses = async () => {
    try {
        return await apiClient.get('/course/viewCourses');
    } catch (error) {
        return {
            error: true,
            e: error
        }
    }
};

export const getPublications = async () => {
    try {
        return await apiClient.get('/publications/viewPublications');
    } catch (error) {
        return {
            error: true,
            e: error
        }
        
    }
};

export const addComments = async (data) => {
    try {
        return await apiClient.post('/comments/addComment', data);
    } catch (error) {
        return {
            error: true,
            e: error
        }
        
    }
};

export const updateComments = async (id, data) => {
    try {
        return await apiClient.put(`/comments/updateComment/${id}`, data);
    } catch (error) {
        return {
            error: true,
            e: error
        }
        
    }
};

export const deleteComments = async (id) => {
    try {
        return await apiClient.delete(`/comments/deleteComment/${id}`, {
        data: { confirmation: true },
    });
    } catch (error) {
        return {
            error: true,
            e: error
        }
        
    }
};