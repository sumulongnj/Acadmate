import { writable } from 'svelte/store';


const init = parseInt(localStorage.getItem('ClassID') ?? 0, 10);
const { subscribe, update } = writable(init);

// Provide a custom wrapper to intercept all mutations
export const classIdAllocator = {
    subscribe,
    increment() {
        update(old => {
            const next = old + 1;
            localStorage.setItem('ClassID', next.toString());
            return next;
        });
    },
};