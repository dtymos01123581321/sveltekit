export async function handleRequest(request) {
    const url = new URL(request.url);
    const shortUrl = url.pathname.slice(1);
    // const destinationUrl = await LINKS.get(shortUrl);
    //
    // if (!destinationUrl) {
    //     return new Response('URL not found', { status: 404 });
    // }
    //
    // const logData = {
    //     time: new Date().toISOString(),
    //     userAgent: request.headers.get('User-Agent'),
    //     ip: request.headers.get('CF-Connecting-IP'),
    //     geo: request.cf,
    // };
    //
    // await LINKS.put(`${shortUrl}:log:${logData.time}`, JSON.stringify(logData));

    // return Response.redirect(destinationUrl, 302);
}
