// Email plugin configuration with SMTP via env variables.
// You can use Yandex or SpaceWeb SMTP by setting env vars accordingly.
// Yandex example:
//   SMTP_HOST=smtp.yandex.ru
//   SMTP_PORT=465
//   SMTP_SECURE=true
//   SMTP_USER=your_yandex_login
//   SMTP_PASS=your_yandex_app_password
// SpaceWeb example:
//   SMTP_HOST=smtp.spaceweb.ru
//   SMTP_PORT=465
//   SMTP_SECURE=true
//   SMTP_USER=your_spaceweb_login
//   SMTP_PASS=your_spaceweb_password
// Common:
//   EMAIL_FROM=no-reply@mipovoteh.ru
//   EMAIL_REPLY_TO=no-reply@mipovoteh.ru
//   EMAIL_TO=alec-c13@yandex.ru

export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.yandex.ru'),
        port: env.int('SMTP_PORT', 465),
        secure: env.bool('SMTP_SECURE', true),
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
        authMethod: env('SMTP_AUTH_METHOD', undefined),
        requireTLS: env.bool('SMTP_REQUIRE_TLS', false),
        tls: {
          rejectUnauthorized: env.bool('SMTP_TLS_REJECT_UNAUTHORIZED', true),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'no-reply@mipovoteh.ru'),
        defaultReplyTo: env('EMAIL_REPLY_TO', 'no-reply@mipovoteh.ru'),
      },
    },
  },
});
