// Atom 분리

import {atom} from "recoil";

const repos = atom({
    key: "repos",
    default: []
})