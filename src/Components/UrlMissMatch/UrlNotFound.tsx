
import { Link, useNavigate } from 'react-router-dom'
import styles from './UrlNotFound.module.css'

const UrlNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className={styles.illustration}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30" fill="#FF6B6B" opacity="0.2" />
            <circle cx="150" cy="150" r="40" fill="#4ECDC4" opacity="0.2" />
            <path d="M 60 80 Q 100 120 140 80" stroke="#FF6B6B" strokeWidth="2" fill="none" />
            <circle cx="80" cy="70" r="5" fill="#FF6B6B" />
            <circle cx="120" cy="70" r="5" fill="#FF6B6B" />
          </svg>
        </div>
        <div className={styles.actions}>
          <button onClick={() => navigate(-1)} className={styles.buttonPrimary}>
            Back to Previous Page
          </button>
          <Link to="/" className={styles.buttonSecondary}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UrlNotFound