import { useTheme } from '../context/ThemeContext'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <svg className={styles.icon} viewBox="0 0 24 24">
        {/* Sun */}
        <g className={theme === 'dark' ? styles.hidden : ''}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10.4 10.4l1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m10.4-10.4l1.4-1.4" />
        </g>
        
        {/* Moon */}
        <g className={theme === 'light' ? styles.hidden : ''}>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
        </g>
      </svg>
    </button>
  )
}