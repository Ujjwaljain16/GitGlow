import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import ThemeToggle from '../../components/ThemeToggle'

export default function Home() {
  const [username, setUsername] = useState('')
  const inputRef = useRef()
  const navigate = useNavigate()

  const validateUsername = (un) => /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(un)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateUsername(username)) {
      inputRef.current.focus()
      return
    }
    navigate(`/dashboard/${username}`)
  }

  return (
    <main className={`${styles.container} fade-in`}>
      <ThemeToggle />
      
      <div className={styles.hero}>
      <h1 className={styles.title}>
  <span className={styles.gradientText}>Git</span>
  <span className={styles.glow}>Glow</span>
</h1>
        <p className={styles.subtitle}>Unlock your coding patterns & productivity metrics</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          ref={inputRef}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className={styles.searchInput}
          autoFocus
        />
        <button
          type="submit"
          className={styles.searchButton}
          aria-label="Analyze GitHub profile"
        >
          <span>Analyze</span>
          <svg className={styles.arrowIcon} viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>
    </main>
  )
}