export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const API_URL = 'http://hairgain-lb-242445726.us-east-1.elb.amazonaws.com/swap_hair_file';

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                ...Object.fromEntries(
                    Object.entries(req.headers).filter(([key]) => key.toLowerCase() !== 'host')
                ),
            },
            body: req.method === 'POST' ? req : undefined,
        });
        const contentType = response.headers.get('content-type') || 'application/octet-stream';
        res.setHeader('Content-Type', contentType);
        res.status(response.status);
        response.body.pipe(res);
    } catch (error) {
        console.error('[Proxy Error]:', error);
        res.status(500).json({ error: 'Proxy failed', detail: error.message });
    }
}