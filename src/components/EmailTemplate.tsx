interface EmailTemplateProps {
  name: string;
  contactEmail: string;
  body: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  contactEmail,
  body,
}) => (
  <div>
    <h1>
      Got a message from {name}, email: {contactEmail}
    </h1>
    message <br />
    {body}
  </div>
);
