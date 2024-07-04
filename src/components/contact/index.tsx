// Libraries
import React, { FunctionComponent, useState } from "react";
import Divider from "@mui/material/Divider";

// Styles
import styles from "./index.module.css";

// Redux
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { AppState } from "../../redux/store";
import { AppActions } from "../../redux/actions/AppActions";
import { Email } from "../../redux/types/UserActionTypes";
import { SendEmail } from "../../redux/actions/UserActions";

interface LinkStateProps {
  user: Email;
}

interface LinkDispatchProps {
  SendEmail: (name: string, email: string, message: string) => void;
}

type Props = LinkStateProps & LinkDispatchProps;

const Contact: FunctionComponent<Props> = ({ SendEmail }) => {
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isEmpty1, setIsEmpty1] = useState(false);
  const [isEmpty2, setIsEmpty2] = useState(false);
  const [isEmpty3, setIsEmpty3] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFocus1 = () => {
    setIsFocused1(true);
    setIsFocused2(false);
    setIsFocused3(false);
  };

  const handleFocus2 = () => {
    setIsFocused1(false);
    setIsFocused2(true);
    setIsFocused3(false);
  };

  const handleFocus3 = () => {
    setIsFocused1(false);
    setIsFocused2(false);
    setIsFocused3(true);
  };

  const handleBlur = () => {
    setIsFocused1(false);
    setIsFocused2(false);
    setIsFocused3(false);
  };

  const isValidEmail = (email: string) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    // Initialize all fields as not empty
    setIsEmpty1(false);
    setIsEmpty2(false);
    setIsEmpty3(false);
    setIsInvalidEmail(false);

    // Check if each input field is empty
    if (name.trim() === "") {
      setIsEmpty1(true);
    }

    if (email.trim() === "") {
      setIsEmpty2(true);
    } else if (!isValidEmail(email)) {
      setIsEmpty2(false);
      setIsInvalidEmail(true);
    }

    if (message.trim() === "") {
      setIsEmpty3(true);
    }

    // If any field is empty, return without sending the email
    if (isEmpty1 || isEmpty2 || isEmpty3 || isInvalidEmail) {
      return;
    }

    // If none of the fields are empty, proceed to send the email
    SendEmail(name, email, message);
  };

  return (
    <div>
      <text style={{ fontSize: "30px", fontWeight: "600" }}>Contact</text>
      <Divider
        flexItem
        style={{
          backgroundColor: "#0071ff",
          height: "6px",
          width: "100px",
          borderRadius: "10px",
        }}
      />
      <br />
      <div className={styles.mainInputDiv}>
        <div className={styles.inputDiv}>
          <input
            className={`${styles.inputMain} ${
              isFocused1 ? styles.focused : ""
            }`}
            placeholder={isFocused1 ? "" : "Full name"}
            onFocus={handleFocus1}
            onBlur={handleBlur}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {isEmpty1 && (
            <text
              style={{
                flex: 1,
                paddingLeft: "10px",
                color: "red",
                fontSize: "smaller",
              }}
            >
              Please enter your name
            </text>
          )}
        </div>
        <div className={styles.inputDiv}>
          <input
            className={`${styles.inputMain} ${
              isFocused2 ? styles.focused : ""
            }`}
            placeholder={isFocused2 ? "" : "Email address"}
            onFocus={handleFocus2}
            onBlur={handleBlur}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isEmpty2 && (
            <text
              style={{
                flex: 1,
                paddingLeft: "10px",
                color: "red",
                fontSize: "smaller",
              }}
            >
              Please enter your email
            </text>
          )}
          {isInvalidEmail && (
            <text
              style={{
                flex: 1,
                paddingLeft: "10px",
                color: "red",
                fontSize: "smaller",
              }}
            >
              Please enter a valid email
            </text>
          )}
        </div>
      </div>
      <br />
      <textarea
        className={`${styles.inputMain} ${isFocused3 ? styles.focused : ""} ${
          styles.inputTxtArea
        }`}
        placeholder={isFocused3 ? "" : "Your message"}
        onFocus={handleFocus3}
        onBlur={handleBlur}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {isEmpty3 && (
        <text
          style={{
            flex: 1,
            paddingLeft: "10px",
            color: "red",
            fontSize: "smaller",
          }}
        >
          Please enter your message
        </text>
      )}
      <br />
      <div className={styles.submitBtnDiv}>
        <div className={styles.submitBtn} onClick={handleSubmit}>
          <text>Submit</text>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): LinkStateProps => ({
  user: state.user,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  SendEmail: bindActionCreators(SendEmail, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
