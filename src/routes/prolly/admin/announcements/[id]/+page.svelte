<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { apiClient, uploadFile } from '$lib/api';
  import { goto } from '$app/navigation';

  const isNew = $page.params.id === 'new';
  const id = $page.params.id;

  let announcement = {
    title: '',
    content: '',
    image_url: '',
    is_active: true
  };
  
  let imageFile: File | null = null;
  let loading = !isNew;
  let saving = false;
  let error: string | null = null;

  onMount(async () => {
    if (!isNew) {
      try {
        announcement = await apiClient(`/api/announcements/${id}`);
        loading = false;
      } catch (err: unknown) {
        error = err instanceof Error ? err.message : 'Unknown error';
        loading = false;
      }
    }
  });

  async function handleSubmit() {
    saving = true;
    try {
      // Upload image if selected
      if (imageFile) {
        const uploadResult = await uploadFile('/api/uploads', imageFile);
        announcement.image_url = uploadResult.file_url;
      }

      if (isNew) {
        await apiClient('/api/announcements', 'POST', announcement);
      } else {
        await apiClient(`/api/announcements/${id}`, 'PUT', announcement);
      }
      goto('/prolly/admin/announcements');
    } catch (err: unknown) {
      error = err instanceof Error ? err.message : 'Unknown error';
      saving = false;
    }
  }

  function handleImageSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      imageFile = files[0];
    }
  }
</script>

<div class="announcement-form">
  <h1>{isNew ? 'Create' : 'Edit'} Announcement</h1>

  {#if loading}
    <p>Loading announcement...</p>
  {:else if error}
    <p class="error">Error: {error}</p>
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="title">Title</label>
        <input 
          type="text" 
          id="title" 
          bind:value={announcement.title} 
          required
        />
      </div>

      <div class="form-group">
        <label for="content">Content</label>
        <textarea 
          id="content" 
          bind:value={announcement.content} 
          rows="8" 
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input 
          type="file" 
          id="image" 
          accept="image/*" 
          on:change={handleImageSelect} 
        />
        {#if announcement.image_url}
          <div class="current-image">
            <p>Current image:</p>
            <img src={announcement.image_url} alt="Current announcement image" />
          </div>
        {/if}
      </div>

      <div class="form-group">
        <label for="is_active" class="checkbox-label">
          <input 
            type="checkbox" 
            id="is_active" 
            bind:checked={announcement.is_active} 
          />
          Active
        </label>
      </div>

      <div class="form-actions">
        <a href="/prolly/admin/announcements" class="btn-secondary">Cancel</a>
        <button type="submit" class="btn-primary" disabled={saving}>
          {saving ? 'Saving...' : 'Save Announcement'}
        </button>
      </div>
    </form>
  {/if}
</div>

<style>
  .announcement-form {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #cbd5e1;
    border-radius: 0.25rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .current-image {
    margin-top: 0.5rem;
  }

  .current-image img {
    max-width: 200px;
    max-height: 200px;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .btn-primary, .btn-secondary {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    border: none;
  }

  .btn-primary {
    background-color: #2563eb;
    color: white;
  }

  .btn-primary:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }

  .btn-secondary {
    background-color: #e2e8f0;
    color: #1e293b;
  }

  .error {
    color: #ef4444;
  }
</style> 