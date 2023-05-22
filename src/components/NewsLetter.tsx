
'use client'
import { useState } from "react";
import { Snackbar, Alert } from '@mui/material';
import styles from "../styles/newsletter.module.css";


export default function AssinaturaNewsletterCliente() {

    const [ email, setEmail ] = useState('')
    const [showAlert, setShowAlert] = useState(false);

    
    const handleEmailChange = (event:any) => {
        setEmail(event.target.value)
    }

    const handleFormSubmit  = (event:any) => {
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
                      <input type="email" placeholder='Insira seu E-mail' value={email} onChange={handleEmailChange}/>
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
