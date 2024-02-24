export const fetchAPI = async (url: string) => {
    try {
        const res = await fetch(url, {
            cache: 'force-cache'
        });
        const response = await res.json();

        return response

    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}
