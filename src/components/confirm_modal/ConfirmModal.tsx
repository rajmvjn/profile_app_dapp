import styles from "./confirmModal.module.scss";

const ConfirmModal: React.FC<{
  header: String;
  b1Text: String;
  b2Text: string;
  onClose: () => void;
  onConfirm: () => void;
}> = ({ header, b1Text, b2Text, onClose, onConfirm }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.box}>
          <p className={styles.has_text_centered}>{header}</p>
        </div>
        <div className={styles.action_box}>
          <button
            className={styles.modal_close}
            aria-label="close"
            onClick={onClose}
          >
            {b1Text}
          </button>
          <button
            className={styles.modal_confirm}
            aria-label="confirm"
            onClick={onConfirm}
          >
            {b2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
