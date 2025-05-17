export default {
  async fetch(request) {
    const playlistUrl = 'https://balatack.my.id/temp54.m3u'; // Ganti dengan URL Anda

    const response = await fetch(playlistUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://yourdomain.com'
      }
    });

    const content = await response.text();

    return new Response(content, {
      headers: {
        'Content-Type': 'application/x-mpegURL',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store'
      }
    });
  }
}
