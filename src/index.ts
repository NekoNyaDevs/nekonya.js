import fetch from 'node-fetch';

const url = "https://nekonya.classy.works/api/";
let version = "v1";

interface jsonRes {
    url: string;
}

export async function get(endpoint: string): Promise<jsonRes> {
    const res = await fetch(url + version + "/" + endpoint);
    return res.json();
}

export async function hug(): Promise<string> {
    const res = await get("random/hug");
    return res.url;
}

export async function kiss(): Promise<string> {
    const res = await get("random/kiss");
    return res.url;
}

export async function pat(): Promise<string> {
    const res = await get("random/pat");
    return res.url;
}

export async function neko(): Promise<string> {
    const res = await get("random/neko");
    return res.url;
}

export async function kitsune(): Promise<string> {
    const res = await get("random/kitsune");
    return res.url;
}