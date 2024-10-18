

// const T00 = null; // unknown & null
// const T01 = (value) => typeof value === 'string' && typeof value === 'number'; // string & number
// const T02 = undefined; // unknown & undefined
// const T03 = null; // unknown & null & undefined
// const T04 = (value) => typeof value === 'string'; // unknown & string[]
// const T05 = (value) => typeof value === 'unknown'; // unknown & unknown
// const T06 = (value) => true; // unknown & any


// const T10 = null; // unknown | null
// const T11 = undefined; // unknown | undefined
// const T12 = (value) => value === undefined || value === null; // unknown | null | undefined
// const T13 = (value) => typeof value === 'string'; // unknown | string
// const T14 = (value) => Array.isArray(value) && value.every(v => typeof v === 'string'); // unknown | string[]
// const T15 = (value) => typeof value === 'unknown'; // unknown | unknown
// const T16 = (value) => true; // unknown | any
