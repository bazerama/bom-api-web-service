import bomEndpoints from '../common/data/bom-endpoints';

const getBomData = async (endpoint) => {
    if (bomEndpoints.includes(endpoint)) {
        const response = await fetch(endpoint, {
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    } else {
        console.log('error with something idk');
        return Promise.reject('Endpoint could not be found');
    }
};

export default getBomData;
