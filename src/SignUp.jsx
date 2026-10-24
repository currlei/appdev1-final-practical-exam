import styles from './SignUp.module.css'
import blossomImage from './assets/blossom-flower.svg'

function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign up form area" />
      <section className={styles.right} aria-label="Sign up artwork">
        <img className={styles.image} src={blossomImage} alt="Blossom flower" />
      </section>
    </main>
  )
}

export default SignUp
