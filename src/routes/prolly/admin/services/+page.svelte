<script lang="ts">
  import { onMount } from 'svelte';
  import { apiClient } from '$lib/api';

  let services = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      services = await apiClient('/api/services');
      loading = false;
    } catch (err) {
      error = err.message;
      loading = false;
    }
  });

  async function deleteService(id: string) {
    if (!confirm('Are you sure you want to delete this service?')) return;
    
    try {
      await apiClient(`/api/services/${id}`, 'DELETE');
      services = services.filter(s => s.id !== id);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }
</script>

<div class="services-admin">
  <div class="page-header">
    <h1>Manage Services</h1>
    <a href="/prolly/admin/services/new" class="btn-primary">Add Service</a>
  </div>

  {#if loading}
    <p>Loading services...</p>
  {:else if error}
    <p class="error">Error: {error}</p>
  {:else if services.length === 0}
    <p>No services found. Create your first one!</p>
  {:else}
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each services as service}
            <tr>
              <td>{service.title}</td>
              <td>{service.category}</td>
              <td>{service.is_active ? 'Active' : 'Inactive'}</td>
              <td class="actions">
                <a href="/prolly/admin/services/{service.id}" class="btn-small">Edit</a>
                <button class="btn-small btn-danger" on:click={() => deleteService(service.id)}>Delete</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<style>
  /* Same styles as announcement admin page */
  /* ... */
</style> 