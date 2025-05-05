import { writable } from 'svelte/store';

interface ApiState {
    loading: boolean;
    error: string | null;
    data: any;
}

function createApiStore() {
    const { subscribe, set, update } = writable<ApiState>({
        loading: false,
        error: null,
        data: null
    });

    return {
        subscribe,
        setLoading: (loading: boolean) => update(state => ({ ...state, loading })),
        setError: (error: string | null) => update(state => ({ ...state, error })),
        setData: (data: any) => update(state => ({ ...state, data })),
        reset: () => set({ loading: false, error: null, data: null })
    };
}

export const apiStore = createApiStore(); 