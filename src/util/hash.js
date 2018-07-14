const randexp = require("randexp").randexp;

// generate hash in format ^[1-9]{2}[1-9a-z]{6}$
export const createMessageHash = () => randexp(/[1-9]{2}[1-9a-z]{6}/);
