import * as rExp from "randexp";

const { randexp } = rExp;

// generate hash in format ^[1-9]{2}[1-9a-z]{6}$
export const createMessageHash = () => randexp(/[1-9]{2}[1-9a-z]{6}/);
