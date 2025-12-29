"use client";

import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Signup UI interaction complete");
    }, 2000);
  }

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Git-Wrap and start contributing to open source."
    >
      <form className="auth-form signup-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input type="text" />
        </label>

        <label>
          Username
          <input type="text" />
        </label>

        <label>
          Email
          <input type="email" />
        </label>

        <label>
          Password
          <input type="password" />
        </label>

        <label>
          Confirm Password
          <input type="password" />
        </label>

        <button
          type="submit"
          className={`primary-btn ${loading ? "loading" : ""}`}
        >
          {loading ? "" : "Sign Up"}
        </button>
      </form>

      <p className="switch-text">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </AuthLayout>
  );
}
