export async function handleRequest(request) {
    const { url, shortUrl } = await request.json();

    const existing = await LINKS.get(shortUrl);
    if (existing) {
        return new Response(JSON.stringify({ error: 'Short URL already exists' }), { status: 400 });
    }

    await LINKS.put(shortUrl, url);
    return new Response(JSON.stringify({ message: 'Short URL created' }), { status: 201 });
}
