import fetch from 'node-fetch';

const url = "https://nekonya.classydev.fr/api/";
export const version = "v1";


type randomJSONRes = {
    url: string;
}
type randomEntries = "random/hug" | "random/kiss" | "random/pat" | "random/neko" | "random/kitsune" | "random/slap";

type eightballJSONRes = {
    answer: string;
}
type eightballEntries = `8ball?cute=${boolean}` | "8ball";

type owoifyJSONRes = {
    result: string;
}
type owoifyEntries = `owoify?text=${string}`;

type jsonRes = randomJSONRes | eightballJSONRes | owoifyJSONRes;


export async function get(endpoint: randomEntries): Promise<randomJSONRes>;
export async function get(endpoint: eightballEntries): Promise<eightballJSONRes>;
export async function get(endpoint: owoifyEntries): Promise<owoifyJSONRes>;
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

export async function slap(): Promise<string> {
    const res = await get("random/slap");
    return res.url;
}

export async function eightball(cute?: boolean): Promise<string> {
    const enableCute = cute || false;
    const res = await get(`8ball?cute=${enableCute}`);
    return res.answer;
}

export async function owoify(text: string): Promise<string> {
    const res = await get(`owoify?text=${text}`);
    return res.result;
}
