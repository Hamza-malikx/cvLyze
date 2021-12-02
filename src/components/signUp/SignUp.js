import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./signUp.module.css";
const SignUp = () => {
  const [passState, setPassState] = useState(true);
  const showHidePass = () => {
    if (passState === true) {
      setPassState(false);
    } else {
      setPassState(true);
    }
  };
  return (
    <div className={styles.signIn}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Link to="/" className="global-link">
              <h2 className={styles.logo}>CVLyZe</h2>
            </Link>
            <form className={`p-5 ${styles.signInForm}`}>
              <div className="mb-0">
                <h2 className={styles.signInHeading}>Sign in</h2>
                <p className={styles.signInContent}>
                  If you don’t have an account register
                </p>
                <p className={styles.signInContent}>
                  You can{" "}
                  <Link to="/login" className={styles.regSpan}>
                    <span>login here !</span>
                  </Link>
                </p>
                <div className={`${styles.loginField} `}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`form-label ${styles.label}`}
                  >
                    Email address
                  </label>
                  <img
                    src="/assets/icons/messageIcon.png"
                    alt="Email Address Icon"
                    className={styles.loginIcon}
                  />
                  <input
                    type="email"
                    placeholder="Enter Your email address"
                    className={` ${styles.loginInput}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className={`${styles.loginField} `}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`form-label ${styles.label}`}
                  >
                    Email address
                  </label>
                  <img
                    src="/assets/icons/user.png"
                    alt="Email Address Icon"
                    className={styles.loginIcon}
                  />
                  <input
                    type="email"
                    placeholder="Enter Your User name"
                    className={` ${styles.loginInput}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="mb-0">
                <div className={`${styles.loginField} `}>
                  <label
                    htmlFor="exampleInputPassword1"
                    className={`form-label ${styles.label}`}
                  >
                    Password
                  </label>
                  <img
                    src="/assets/icons/passwordIcon.png"
                    alt="Email Address Icon"
                    className={styles.loginIcon}
                  />
                  <input
                    type={passState === true ? "password" : "text"}
                    className={` ${styles.loginInput}`}
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                  />
                  {passState === true ? (
                    <img
                      src="/assets/icons/visibility_off.png"
                      alt=""
                      className={`${styles.showHidePass}`}
                      onClick={showHidePass}
                    />
                  ) : (
                    <img
                      src="/assets/icons/visibility.png"
                      alt=""
                      className={`${styles.showHidePass}`}
                      onClick={showHidePass}
                    />
                  )}
                </div>
                <div className={`${styles.loginField} `}>
                  <label
                    htmlFor="exampleInputPassword1"
                    className={`form-label ${styles.label}`}
                  >
                    Password
                  </label>
                  <img
                    src="/assets/icons/passwordIcon.png"
                    alt="Email Address Icon"
                    className={styles.loginIcon}
                  />
                  <input
                    type={passState === true ? "password" : "text"}
                    className={` ${styles.loginInput}`}
                    id="exampleInputPassword1"
                    placeholder="Confirm Your Password"
                  />
                  {passState === true ? (
                    <img
                      src="/assets/icons/visibility_off.png"
                      alt=""
                      className={`${styles.showHidePass}`}
                      onClick={showHidePass}
                    />
                  ) : (
                    <img
                      src="/assets/icons/visibility.png"
                      alt=""
                      className={`${styles.showHidePass}`}
                      onClick={showHidePass}
                    />
                  )}
                </div>
              </div>
              <div className="mb-1 form-check">
                <div className="d-flex justify-content-between">
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      className={`form-check-label ${styles.RememberMeText}`}
                      htmlFor="exampleCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to="" className={styles.ForgotPass}>
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className={styles.signInBtn}>
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className={`${styles.signInRigntContent}`}>
              <div className="d-flex justify-content-center">
                <img
                  src="/assets/images/signIn.png"
                  alt=""
                  className={`${styles.signInRigntContentImage}`}
                />
              </div>
              <div className={styles.signInRigntContentContent}>
                <h2 className={styles.signInRigntContentHeading}>
                  Sign in to CVLyZe
                </h2>
                <p className={styles.signInRigntContentPara}>
                  Lorem Ipsum is simply{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
