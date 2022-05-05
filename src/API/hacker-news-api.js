const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const newStoriesUrl = `${baseUrl}newstories.json?print=pretty`;

export const getStoriesIds = async () => {
    try {
        const response = await fetch(newStoriesUrl);

        if (!response.ok) {
            throw new Error("Fetch stories id failed!");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getStory = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/item/${id}.json`);

        if (!response.ok) {
            throw new Error("Fetch storiyd failed!");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

