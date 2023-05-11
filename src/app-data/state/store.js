import { writable } from "svelte/store";

export const view = writable({
   input: false,
   list: ''
});