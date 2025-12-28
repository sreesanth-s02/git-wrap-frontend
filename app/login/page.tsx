"use client";

import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login UI interaction complete");
    }, 2000);
  }

  return (
    <AuthLayout
      title="Login"
      subtitle="Welcome back! Please enter your credentials."
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" />
        </label>

        <label>
          Password
          <input type="password" />
        </label>

        <button
          type="submit"
          className={`primary-btn ${loading ? "loading" : ""}`}
        >
          {loading ? "" : "Login"}
        </button>
      </form>

      <p className="switch-text">
        New user? <Link href="/signup">Create an account</Link>
      </p>
    </AuthLayout>
  );
}
