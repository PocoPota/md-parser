import { useState, useEffect } from "react";
import type { User } from "firebase/auth";
import { signInWithGoogle, logOut, onAuthStateChange } from "../firebase/auth";

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <div className="auth-container">
        <img
          src={user.photoURL || ""}
          alt={user.displayName || "User"}
          className="auth-avatar"
        />
        <span>{user.displayName}</span>
        <button onClick={handleSignOut}>
          ログアウト
        </button>
      </div>
    );
  }

  return (
    <button onClick={handleSignIn} className="auth-button">
      Googleでログイン
    </button>
  );
}