import styles from './Login.module.css'
import blossomImage from '../assets/blossom-flower.svg'
import googleLogo from '../assets/icons-google-logo.svg'
import appleLogo from '../assets/icons-apple-logo.svg'

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign up form area">
        <div className={styles.signupContent}>
          <h1 className={styles.title}>Get Started Now</h1>
          <form className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input className={styles.input} id="name" name="name" type="text" placeholder="Enter your name" />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email address</label>
              <input className={styles.input} id="email" name="email" type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">Password</label>
              <input className={styles.input} id="password" name="password" type="password" placeholder="Name" />
            </div>
            <label className={styles.agreement}>
              <input className={styles.checkbox} type="checkbox" name="agreement" />
              <span>I agree to the <a href="#terms">terms &amp; policy</a></span>
            </label>
            <button className={styles.submit} type="submit">Signup</button>
          </form>
        </div>
        <div className={styles.socialSection}>
          <div className={styles.divider} aria-label="Or">
            <span />
            <span className={styles.dividerText}>Or</span>
            <span />
          </div>
          <div className={styles.socialButtons}>
            <button className={styles.socialButton} type="button">
              <img src={googleLogo} alt="" />
              <span>Sign in with Google</span>
            </button>
            <button className={styles.socialButton} type="button">
              <img src={appleLogo} alt="" />
              <span>Sign in with Apple</span>
            </button>
          </div>
          <p className={styles.signInPrompt}>Have an account? <a href="#signin">Sign In</a></p>
        </div>
      </section>
      <section className={styles.right} aria-label="Sign up artwork">
        <img className={styles.image} src={blossomImage} alt="Blossom flower" />
      </section>
    </main>
  )
}

export default Login
