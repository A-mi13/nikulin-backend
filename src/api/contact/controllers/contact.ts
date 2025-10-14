/**
 * contact controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
  async send(ctx) {
    const { name, email, phone, subject, message } = ctx.request.body || {}

    if (!name || !email || !subject || !message) {
      ctx.status = 400
      return { error: 'Missing required fields' }
    }

    try {
      const to = process.env.EMAIL_TO || 'alec-c13@yandex.ru'
      await strapi.plugin('email').service('email').send({
        to,
        replyTo: email,
        subject: `[Сайт mipovoteh.ru] ${subject}`,
        text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone || '-'}\n\nСообщение:\n${message}`,
        html: `<p><strong>Имя:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Телефон:</strong> ${phone || '-'}</p>
               <p><strong>Тема:</strong> ${subject}</p>
               <p><strong>Сообщение:</strong></p>
               <div>${message.replace(/\n/g, '<br/>')}</div>`,
      })

      ctx.status = 200
      return { ok: true }
    } catch (err) {
      // Log full error on server for diagnostics
      console.error('Email send error:', err)
      ctx.status = 500
      return { error: 'Failed to send email', message: (err as any)?.message }
    }
  },
}));
