export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const target = url.searchParams.get("target");

    if (!target) {
      return new Response("Missing target parameter", { status: 400 });
    }

    try {
      const proxyUrl = new URL(target);
      const response = await fetch(proxyUrl.toString(), {
        headers: request.headers,
        method: request.method,
        body: request.body
      });
      return response;
    } catch (err) {
      return new Response("Error: " + err.message, { status: 500 });
    }
  }
}