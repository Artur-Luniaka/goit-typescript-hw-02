import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.error_wrapper}>
      <p className={s.error_message}>
        Sorry, server Error or just try again a bit later...
      </p>
    </div>
  );
};

export default ErrorMessage;
