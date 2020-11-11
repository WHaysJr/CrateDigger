import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
// import { useAlert, positions } from "react-alert";

const REGISTER_EMAIL = gql`
  mutation createEmail($address: String!) {
    createEmail(address: $address) {
      id
      address
    }
  }
`;

const DELETE_EMAIL = gql`
  mutation deleteEmail($address: String!) {
    deleteEmail(address: $address) {
      id
      address
    }
  }
`;

const MailList = () => {
  const [formEmail, setFormEmail] = useState("");
  const [message, setMessage] = useState("");

  // *** add *** //

  var returnedAddress = "";
  // const alert = useAlert();
  const [submitAddMutation] = useMutation(REGISTER_EMAIL, {
    onError(error) {
      returnedAddress = JSON.stringify(error.message);
      setMessage(returnedAddress);
      console.error(error.message);
      // alert.show(error.message, { position: positions.BOTTOM_CENTER });
    },
    onCompleted(data) {
      returnedAddress = JSON.stringify(data.createEmail.address);
      console.log(returnedAddress);
      setMessage(returnedAddress + " has been added!");
      // alert.show(returnedAddress + " has been added!", {
      //   position: positions.BOTTOM_CENTER,
      // });
    },
  });

  const createEntry = (e) => {
    e.preventDefault();
    submitAddMutation({
      variables: {
        address: formEmail,
      },
    });

    setFormEmail("");
  };

  // *** delete *** //

  var returnedDeletedAddress;

  const [submitDeleteMutation] = useMutation(DELETE_EMAIL, {
    onError(error) {
      returnedDeletedAddress = error.message;
      returnedDeletedAddress = JSON.stringify(error.message);
      console.log(returnedAddress);
      setMessage(returnedDeletedAddress);
      console.log(error.message);
      // alert.show(returnedError, { position: positions.BOTTOM_CENTER });
    },
    onCompleted(data) {
      returnedDeletedAddress = data.deleteEmail.address;
      returnedAddress = JSON.stringify(data.deleteEmail.address);
      console.log(returnedAddress);
      setMessage(returnedAddress + " has been deleted!");
      console.log(returnedDeletedAddress);
      // alert.show(returnedDeletedAddress + " has been deleted!", {
      //   position: positions.BOTTOM_CENTER,
      // });
    },
  });

  const deleteEntry = (e) => {
    e.preventDefault();
    submitDeleteMutation({
      variables: {
        address: formEmail,
      },
    });

    setFormEmail("");
  };

  return (
    <div className="contact" id="contact">
      <div className="title">
        <h3>Mail List</h3>
      </div>
      <form>
        <div>
          <input
            type="text"
            onChange={(e) => setFormEmail(e.target.value)}
            value={formEmail}
          />
          <br />
          <input onClick={createEntry} value="Add Email" />
          <br />
          <input onClick={deleteEntry} value="Delete Email" />
        </div>
      </form>
      {message === "" ? null : <p>{message}</p>}
    </div>
  );
};

export default MailList;
