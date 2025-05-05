import { browser } from '$app/environment';

const API_BASE_URL = browser ? 'http://localhost:8000/api' : '';

export interface ApiResponse<T> {
    data?: T;
    error?: string;
    status: number;
}

export async function apiRequest<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body?: any
): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            ...(body && { body: JSON.stringify(body) })
        });

        const data = await response.json();
        
        return {
            data: data as T,
            status: response.status
        };
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'An error occurred',
            status: 500
        };
    }
}

// For compatibility with existing code
export async function apiClient<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    data?: any
): Promise<T> {
    const response = await apiRequest<T>(endpoint, method, data);
    if (response.error) {
        throw new Error(response.error);
    }
    return response.data as T;
}

// For file uploads
export async function uploadFile(endpoint: string, file: File): Promise<{ file_url: string }> {
    if (!browser) {
        throw new Error('File uploads can only be done in the browser');
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.detail || `File upload failed: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        throw error instanceof Error ? error : new Error('An error occurred during file upload');
    }
}

// API functions matching backend routes
export const api = {
    // Auth
    login: (credentials: { username: string; password: string }) =>
        apiRequest('/auth/login', 'POST', credentials),
    getUsers: () => apiRequest('/auth'),
    
    // Categories
    getCategories: () => apiRequest('/category'),
    getCategoryById: (id: number) => apiRequest(`/category/${id}`),
    
    // Services
    getServices: () => apiRequest('/services'),
    getServiceById: (id: number) => apiRequest(`/services/${id}`),
    
    // Announcements
    getAnnouncements: () => apiRequest('/announcements'),
    getAnnouncementById: (id: number) => apiRequest(`/announcements/${id}`),
    
    // FAQs
    getFaqs: () => apiRequest('/faqs'),
    getFaqById: (id: number) => apiRequest(`/faqs/${id}`),
    
    // Business Info
    getBusinessInfo: () => apiRequest('/information'),
    getBusinessInfoById: (id: number) => apiRequest(`/information/${id}`),
}; 