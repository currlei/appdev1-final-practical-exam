import styles from './SignUp.module.css'
import blossomImage from './assets/blossom-flower.svg'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign up form area">
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
      </section>
      <section className={styles.right} aria-label="Sign up artwork">
        <img className={styles.image} src={blossomImage} alt="Blossom flower" />
      </section>
    </main>
  )
}

export default SignUp
