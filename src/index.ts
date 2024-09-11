import fetch from 'node-fetch';
import { RequestInit } from "node-fetch";

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
type owoifyEntries = `owoify?text=${string}` | "owoify";

type jsonRes = randomJSONRes | eightballJSONRes | owoifyJSONRes;


export async function req(endpoint: randomEntries, fetchParams?: RequestInit): Promise<randomJSONRes>;
export async function req(endpoint: eightballEntries, fetchParams?: RequestInit): Promise<eightballJSONRes>;
export async function req(endpoint: owoifyEntries, fetchParams?: RequestInit): Promise<owoifyJSONRes>;
export async function req(endpoint: string, fetchParams?: RequestInit): Promise<jsonRes> {
    const res = await fetch(url + version + "/" + endpoint, fetchParams);
    return res.json();
}


export async function hug(): Promise<string> {
    const res = await req("random/hug");
    return res.url;
}

export async function kiss(): Promise<string> {
    const res = await req("random/kiss");
    return res.url;
}

export async function pat(): Promise<string> {
    const res = await req("random/pat");
    return res.url;
}

export async function neko(): Promise<string> {
    const res = await req("random/neko");
    return res.url;
}

export async function kitsune(): Promise<string> {
    const res = await req("random/kitsune");
    return res.url;
}

export async function slap(): Promise<string> {
    const res = await req("random/slap");
    return res.url;
}

export async function eightball(cute?: boolean): Promise<string> {
    const enableCute = cute || false;
    const res = await req(`8ball?cute=${enableCute}`);
    return res.answer;
}

export async function owoify(text: string): Promise<string> {
    const res = await req(`owoify`, {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res.result;
}
