// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("myyvgnyv");
  if (state.succeeded) {
    return <p>Thanks for your feedback!</p>;
  }
  return (
    <div>
      <div className="bb-spacer" />
      <form className='form' onSubmit={handleSubmit}>
        <div className="bb-spacer" />
        <div class="pageTitle">Please fill in the form to provide feedback </div>
        <input
          class="name formEntry"
          placeholder="Name"
          id="name"
          name="name"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <input
          class="email formEntry"
          placeholder="Email"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          class="message formEntry"
          placeholder="Message"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button class="submit formEntry" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      <div className="bb-spacer" />
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;