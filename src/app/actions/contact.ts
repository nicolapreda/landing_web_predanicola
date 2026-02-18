'use server';

export async function sendContactForm(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const type = formData.get('type') as string;
    const message = formData.get('message') as string;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return { success: false, message: 'Configuration error: Missing Telegram credentials.' };
    }

    const text = `
🚀 *Nuovo Contatto dal Sito*

👤 *Nome:* ${name}
📧 *Email:* ${formData.get('email')}
📱 *Telefono:* ${phone}
🏷 *Tipo:* ${type}

📝 *Messaggio:*
${message}
  `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Telegram API Error:', error);
            return { success: false, message: 'Failed to send message via Telegram.' };
        }

        return { success: true, message: 'Messaggio inviato con successo!' };
    } catch (error) {
        console.error('Network Error:', error);
        return { success: false, message: 'Errore di rete.' };
    }
}
