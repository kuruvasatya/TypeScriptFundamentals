const all_piid = [
    'name',
    'age',
    'email'
] as const;

type piidtuple = typeof all_piid;
export type piidtype = piidtuple[number];

const piidCategory: piidtuple = "fac";

// check the error
const pc: piidtype = "fac"