import React from "react";

function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item__body">
      <h1 className="contact-item__title">{name}</h1>
      <p className="contact-item__username">@{tag}</p>
    </div>
  );
}

export default ContactItemBody;
