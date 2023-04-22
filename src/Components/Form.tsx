import React, { useRef } from "react";

// Defines the ContactForm component as a function component using the React.FC (Function Component) type from React
const ContactForm: React.FC = () => {
  // initializes a user variable with a useRef hook that creates an object with string keys and HTMLInputElement values. 
  const user = useRef<{ [key: string]: HTMLInputElement }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `Name: ${user.current["email"].value}, Email: ${user.current["password"].value}`
    );
    // You can replace this console.log with a function to submit the data to a server or perform other actions.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          defaultValue=""
          ref={(e) => (user.current["email"] = e as HTMLInputElement)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          defaultValue=""
          ref={(e) => (user.current["password"] = e as HTMLInputElement)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
