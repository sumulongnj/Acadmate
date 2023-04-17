import { writable } from 'svelte/store';


const init = parseInt(localStorage.getItem('SemID') ?? 0, 10);
const { subscribe, update } = writable(init);

// Provide a custom wrapper to intercept all mutations
export const idAllocator = {
    subscribe,
    increment() {
        update(old => {
            const next = old + 1;
            localStorage.setItem('SemID', next.toString());
            return next;
        });
    },
};