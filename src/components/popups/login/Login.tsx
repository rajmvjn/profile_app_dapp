import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../store";

import styles from "./login.module.scss";

const Login: React.FC<{ onClose: () => void; login_open: string }> = (
  props
) => {
  const navigate = useNavigate();
  const { userAuthAsync } = useActions();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { requstStatus } = useAppSelector((state) => state.httpReqStatus);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user._id) {
      navigate("/admindashboard");
    }
  }, [user, navigate]);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    userAuthAsync(email, password);
  };

  return (
    <div className={styles.login + " " + styles[props.login_open]}>
      <div className={styles.login_close} onClick={props.onClose}>
        <span> x </span>
      </div>
      <div className={styles.login_container}>
        <div className={styles.login_content}>
          <form
            className={styles.login_container_form}
            action="#"
            onSubmit={submitHandler}
          >
            <div className={styles.form_group}>
              <input
                type="email"
                className={styles.form_input}
                id="email_login"
                placeholder="E mail"
                ref={emailRef}
                required
              />
              <label htmlFor="email_login" className={styles.form_label}>
                E mail
              </label>
            </div>

            <div className={styles.form_group}>
              <input
                type="password"
                className={styles.form_input}
                id="pwd"
                placeholder="Password"
                ref={passwordRef}
                required
              />
              <label htmlFor="pwd" className={styles.form_label}>
                Password
              </label>
            </div>
            <div className={styles.form_group}>
              <button
                className={[
                  styles.btn,
                  styles.btnb_lue,
                  styles.login_button,
                ].join(" ")}
              >
                Submit
              </button>
              {requstStatus.errored && (
                <span className={styles.connect_success_msg}>
                  {requstStatus.message}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
