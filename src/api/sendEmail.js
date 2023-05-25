import sgMail from '@sendgrid/mail';
import dontenv from 'dotenv'
dontenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

        const message = {
              to,
              from: 'appsigmadev@gmail.com',
              subject: 'Confirmação de Cadastro',
              text: 'Olá,\n\nBoas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.\n\nAté logo!',
          }

    try {
      await sgMail.send(message);
      console.log('E-mail enviado com sucesso');
      res.status(200).json({ message: 'E-mail enviado com sucesso' });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).json({ message: 'Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
