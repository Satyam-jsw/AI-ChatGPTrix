const { createProxyMiddleware } = require('http-proxy-middleware');
const url = 'https://vercel.com/satyamjsw/ai-chat-gp-trix-az8n/A7nB3eBKtyqeYAaio2EBGiF3wDBq'

// const url="http://127.0.0.1:8080";

module.exports = function (app) {
  app.use(
    '/api/v1/auth/register',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  ),
  app.use(
    '/api/v1/auth/login',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  ),
  app.use(
    '/api/v1/auth/logout',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
}
