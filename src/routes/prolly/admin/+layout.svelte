<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="admin-layout">
  <aside class="admin-sidebar">
    <div class="admin-sidebar-header">
      <h2>Admin Dashboard</h2>
    </div>
    <nav class="admin-nav">
      <ul>
        <li class:active={$page.url.pathname.includes('/prolly/admin/announcements')}>
          <a href="/prolly/admin/announcements">Announcements</a>
        </li>
        <li class:active={$page.url.pathname.includes('/prolly/admin/services')}>
          <a href="/prolly/admin/services">Services</a>
        </li>
        <li class:active={$page.url.pathname.includes('/prolly/admin/business-info')}>
          <a href="/prolly/admin/business-info">Business Info</a>
        </li>
        <li class:active={$page.url.pathname.includes('/prolly/admin/faqs')}>
          <a href="/prolly/admin/faqs">FAQs</a>
        </li>
      </ul>
    </nav>
  </aside>

  <main class="admin-content">
    <slot />
  </main>
</div>

<style>
  .admin-layout {
    display: flex;
    min-height: 100vh;
  }

  .admin-sidebar {
    width: 250px;
    background-color: #1e293b;
    color: white;
    padding: 1rem;
  }

  .admin-sidebar-header {
    margin-bottom: 2rem;
  }

  .admin-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .admin-nav li {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  .admin-nav li.active {
    background-color: #2d3748;
  }

  .admin-nav a {
    color: white;
    text-decoration: none;
    display: block;
  }

  .admin-content {
    flex: 1;
    padding: 2rem;
    background-color: #f8fafc;
  }
</style> 