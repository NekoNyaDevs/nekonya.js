import fetch from 'node-fetch';

const url = "https://nekonya.classy.works/api/";
let version = "v1";


export async function get(endpoint: string) {
    const res = await fetch(url + version + "/" + endpoint);
    return res.json();
}


export async function hug() {
    const res = await get("random/hug");
    return res.url;
}

export async function kiss() {
    const res = await get("random/kiss");
    return res.url;
}

export async function pat() {
    const res = await get("random/pat");
    return res.url;
}

export async function neko() {
    const res = await get("random/neko");
    return res.url;
}

export async function kitsune() {
    const res = await get("random/kitsune");
    return res.url;
}