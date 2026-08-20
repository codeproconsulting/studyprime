import { siteConfig } from "~/data/siteData";

export function StatsBar() {
  return (
    <div className="stats-banner">
      <div className="container">
        <div className="stats-card">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
