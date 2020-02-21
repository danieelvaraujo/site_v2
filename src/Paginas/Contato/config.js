/**
 * @config prepareing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be  the same
 * fieldsConfig = settings for each input/textarea field
 */
const config = {
  api: `${process.env.REACT_APP_API}`,
  title: "Contact Me",
  successMessage: "Email enviado. Entrarei em contato em breve.",
  errorMessage: "Ops. Houve um erro ao enviar.",
  fields: {
    nome: "",
    assunto: "",
    email: "",
    msg: ""
  },
  fieldsConfig: [
    {
      id: 1,
      label: "Nome",
      fieldName: "nome",
      type: "text",
      placeholder: "Seu nome",
      isRequired: true
    },
    {
      id: 2,
      label: "Assunto",
      fieldName: "assunto",
      type: "text",
      placeholder: "Assunto da mensagem",
      isRequired: true
    },
    {
      id: 3,
      label: "Email",
      fieldName: "email",
      type: "email",
      placeholder: " Seu email",
      isRequired: true
    },
    {
      id: 4,
      label: "Mensagem",
      fieldName: "msg",
      type: "textarea",
      placeholder: "Deixe sua mensagem.",
      isRequired: true
    }
  ]
};
export default config;
