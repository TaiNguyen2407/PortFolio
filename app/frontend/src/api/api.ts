import { BaseUrl } from "../constants";

export async function getAllGithubRepos() {
    try {
        const response = await fetch(BaseUrl + `/repos`, {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            },
        })

        const parsedResponse = await response.json();
        if (response.status > 299 || !response.ok) {
            throw Error(parsedResponse.error || "unknown error");
        }
        return parsedResponse;
    } catch (error: unknown) {
        console.error("error fetching data", error);
        if (typeof error === "object" && error !== null && "message" in error) {
            return error.message as string;
        } else {
            return "An unknown error occurred";
        }
    }
}