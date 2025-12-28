"use client";

type AuthLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* LEFT SIDE – Animated Background */}
        <div className="auth-left">
          <video
            className="auth-video"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src="/auth-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* RIGHT SIDE – Form */}
        <div className="auth-right">
          <h2>{title}</h2>
          {subtitle && <p className="subtitle">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
