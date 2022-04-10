import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Home.module.css";
export default function Login() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to my Auth App!</h1>
          <h2>Hey {user.name}, You are logged in!</h2>
          <a href="/api/auth/logout">
            <button>Logout</button>
          </a>
        </main>
      </div>
    );
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Oauth0 Login</h1>
      <a href="/api/auth/login">
        <button>Please Login</button>
      </a>
    </main>
  );
}
