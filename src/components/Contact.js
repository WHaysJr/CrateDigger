import React, { useState } from "react";
// import { useMutation } from "@apollo/react-hooks";

// export const REGISTER_EMAIL = gql`
//   mutation RegisterEamil($params: MemberInput!) {
//     registerMember(params: $params) {
//       id
//       email
//   }
// };

const Contact = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // const [registerEmail] = useMutation(REGISTER_EMAIL);

  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const createEntry = (e) => {
    if (email.match(emailRegex)) {
      e.preventDefault();
      setEmail("");
      console.log(email + " Submitted Successfully!");
      setSubmitted(true);
      // registerEmail({
      //   variables: {
      //     address,
      //   },
      // });
    } else {
      e.preventDefault();
      setError(true);
    }
  };

  const formMessage = () => {
    if (submitted) {
      return "Submitted successfully!";
    }
    if (error) {
      return "Please enter a valid Email";
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="title">
        <h3>Contact</h3>
      </div>
      <a href="https://www.facebook.com/cratedigger/">Facebook</a>
      <a> | </a>

      <a href="https://www.youtube.com/channel/UCRsu7LjX8hMg0TZ1WXUI2KA">
        Youtube
      </a>
      <a> | </a>

      <a href="https://www.instagram.com/cratediggerband/">Instagram</a>
      <a> | </a>

      <a href="https://cratediggerband.bandcamp.com/">Bandcamp</a>
      <br />
      <br />
      <br />
      <h3>Mailing List</h3>
      <br />

      <form onSubmit={createEntry}>
        <div>
          <label>Email Address </label>
          <a> </a>

          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <a> </a>
          <input type="submit" value="Submit" />
        </div>

        <br />
        {formMessage()}
      </form>
    </div>
  );
};

export default Contact;
