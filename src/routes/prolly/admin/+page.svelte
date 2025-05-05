<script lang="ts">
  // Dashboard metrics could be fetched from the API
</script>

<div class="admin-dashboard">
  <h1>Admin Dashboard</h1>
  
  <div class="dashboard-stats">
    <div class="stat-card">
      <h3>Announcements</h3>
      <p class="stat-value">0</p>
    </div>
    <div class="stat-card">
      <h3>Services</h3>
      <p class="stat-value">0</p>
    </div>
    <div class="stat-card">
      <h3>FAQs</h3>
      <p class="stat-value">0</p>
    </div>
  </div>

  <div class="quick-actions">
    <h2>Quick Actions</h2>
    <div class="action-buttons">
      <a href="/prolly/admin/announcements/new" class="btn">Add Announcement</a>
      <a href="/prolly/admin/services/new" class="btn">Add Service</a>
      <a href="/prolly/admin/faqs/new" class="btn">Add FAQ</a>
      <a href="/prolly/admin/business-info" class="btn">Update Business Info</a>
    </div>
  </div>
</div>

<style>
  .admin-dashboard {
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 2rem;
  }

  .dashboard-stats {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5rem 0 0;
  }

  .quick-actions {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .action-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }

  .btn {
    display: inline-block;
    background-color: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    font-weight: 500;
  }
</style> 