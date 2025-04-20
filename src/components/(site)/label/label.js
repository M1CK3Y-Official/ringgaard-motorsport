import styles from './label.module.css';

const Label = ({children}) => {
  return (
    <div className={styles.label}>
      {children}
    </div>
  )
};

export default Label
