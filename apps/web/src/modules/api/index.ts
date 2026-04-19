export const api = {
    get: async (url: string, options?: RequestInit) => {
        const response = await fetch(url, {
            method: 'GET',
            ...options,
        });
        return response.json();
    },
    post: async (url: string, body: any, options?: RequestInit) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(options?.headers || {}),
            },
            body: JSON.stringify(body),
            ...options,
        });
        return response.json();
    },
    put: async (url: string, body: any, options?: RequestInit) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(options?.headers || {}),
            },
            body: JSON.stringify(body),
            ...options,
        });
        return response.json();
    },
    patch: async (url: string, body: any, options?: RequestInit) => {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                ...(options?.headers || {}),
            },
            body: JSON.stringify(body),
            ...options,
        });
        return response.json();
    },
    delete: async (url: string, options?: RequestInit) => {
        const response = await fetch(url, {
            method: 'DELETE',
            ...options,
        });
        return response.json();
    },
}