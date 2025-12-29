export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <h2 className="logo">Git-Wrap</h2>
        <nav>
          <a className="active">Dashboard</a>
          <a>Recommendations</a>
          <a>Repositories</a>
          <a>Profile</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
        </header>

        <section className="dashboard-content">
          <div className="empty-state">
            <h3>No data yet</h3>
            <p>
              Backend services will populate recommendations and repository
              insights here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
