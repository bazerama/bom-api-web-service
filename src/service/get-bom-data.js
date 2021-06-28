import bomEndpoints from '../common/data/bom-endpoints';

const getBomData = async (endpoint) => {
    if (bomEndpoints.includes(endpoint)) {
        const response = await fetch('/v1/bom', {
            body: JSON.stringify({ url: endpoint }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(apiResponse);
        return response;
    } else {
        return Promise.reject('Endpoint could not be found');
    }
};

export default getBomData;
