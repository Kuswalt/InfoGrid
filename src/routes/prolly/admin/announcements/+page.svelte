<script lang="ts">
  import { onMount } from 'svelte';
  import { apiClient } from '$lib/api';

  let announcements = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      announcements = await apiClient('/api/announcements');
      loading = false;
    } catch (err) {
      error = err.message;
      loading = false;
    }
  });

  async function deleteAnnouncement(id: string) {
    if (!confirm('Are you sure you want to delete this announcement?')) return;
    
    try {
      await apiClient(`/api/announcements/${id}`, 'DELETE');
      announcements = announcements.filter(a => a.id !== id);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }
</script>

<div class="announcements-admin">
  <div class="page-header">
    <h1>Manage Announcements</h1>
    <a href="/prolly/admin/announcements/new" class="btn-primary">Add Announcement</a>
  </div>

  {#if loading}
    <p>Loading announcements...</p>
  {:else if error}
    <p class="error">Error: {error}</p>
  {:else if announcements.length === 0}
    <p>No announcements found. Create your first one!</p>
  {:else}
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each announcements as announcement}
            <tr>
              <td>{announcement.title}</td>
              <td>{new Date(announcement.created_at).toLocaleDateString()}</td>
              <td>{announcement.is_active ? 'Active' : 'Inactive'}</td>
              <td class="actions">
                <a href="/prolly/admin/announcements/{announcement.id}" class="btn-small">Edit</a>
                <button class="btn-small btn-danger" on:click={() => deleteAnnouncement(announcement.id)}>Delete</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<style>
  .announcements-admin {
    max-width: 1000px;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .btn-primary {
    background-color: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
  }

  .table-container {
    overflow-x: auto;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
  }

  .data-table th, .data-table td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
  }

  .data-table th {
    background-color: #f1f5f9;
    font-weight: 600;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-small {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: #e2e8f0;
    text-decoration: none;
    color: #1e293b;
    border: none;
    cursor: pointer;
  }

  .btn-danger {
    background-color: #ef4444;
    color: white;
  }

  .error {
    color: #ef4444;
  }
</style> 