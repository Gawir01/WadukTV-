export default {
  async fetch(request) {
    const playlistUrl = 'https://balatack.my.id/temp54.m3u';

    const response = await fetch(playlistUrl, {
      headers: {
        'User-Agent': request.headers.get('user-agent') || '',
        'Referer': 'https://www.cubmu.com/',
      },
    });

    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    return new Response(await response.body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store',
      },
    });
  },
};
