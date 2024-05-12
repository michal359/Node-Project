export async function serverRequests(method, location, details) {
    if (method === 'GET') {
        try {
            const fetchResponse = await fetch(`http://localhost:3000/${location}`);
            if (fetchResponse.ok) {
                const data = await fetchResponse.json();
                console.log('GET request data:', data); // Log the data received
                return data;
            } else {
                console.error('GET request failed:', fetchResponse.statusText);
            }
        } catch (error) {
            console.error('Error in GET request:', error);
            return error;
        }
    }

    const settings = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
    };

    try {
        const fetchResponse = await fetch(`http://localhost:3000/${location}`, settings);
        if (fetchResponse.ok) {
            console.log('fetch response: ', fetchResponse)
            const data = await fetchResponse.json();
            console.log(`${method} request data:`, data); // Log the data received
            return data;
        } else {
            console.error(`${method} request failed:`, fetchResponse.statusText);
        }
    } catch (error) {
        console.error(`Error in ${method} request:`, error);
        return error;
    }
}
