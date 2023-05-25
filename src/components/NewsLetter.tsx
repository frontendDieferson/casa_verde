
'use client'
import { useState } from "react";
import { Snackbar, Alert } from '@mui/material';
import styles from "../styles/newsletter.module.css";





export default function AssinaturaNewsletterCliente() {

    const [ email, setEmail ] = useState('')
    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = () => {
        if (email) {
            confirmEmailRegister(email);
          setEmail('');
        } else {
          alert('Por favor, insira um e-mail válido');
        }
      };

const confirmEmailRegister = async (email: string) => {
    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email})
        })
        if(response.ok) {
            alert('Obrigado pela sua assinatura, você receberá nossas novidades no e-mail cadastrado.');
        } else {
            alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        }

    } catch (error){
        alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');

    }
}

    const handleEmailChange = async (event:any) => {
        setEmail(event.target.value)
        
        
        
    }
    
    const handleFormSubmit  = async (event:any) => {
    event.preventDefault()

    if(isValidEmail(email)) {
        setShowAlert(true);
        setEmail('')
    } else {
        setShowAlert(false);
    }
}

const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

    const handleAlertClose = () => {
        setShowAlert(false);
      };

  return (
      <div className={styles.assinaturaNewsletter}>
          <div className={styles.assinaturaNewsletter__container}>
              <div className={styles.assinaturaNewsletter__container__text}>
                  <h1>
                      Sua casa com as
                      <br />
                  </h1>
                      <strong>
                          melhores <br /> plantas
                      </strong>
                  <p>
                      Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                  </p>
              </div>

              <form className={styles.form} onSubmit={handleFormSubmit}>
                  <div className={styles.fieldGroup}>
                      <input type="email" placeholder='Insira seu E-mail' value={email} onClick={handleButtonClick} onChange={handleEmailChange}/>
                      <button>
                          Assinar Newsletter
                      </button>
                      <Snackbar open={showAlert} autoHideDuration={4000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="success">
          Obrigado pela sua assinatura, você receberá nossas novidades no e-mail {email}
        </Alert>
      </Snackbar>
                  </div>
              </form>
          </div>
      </div>
  );
}
