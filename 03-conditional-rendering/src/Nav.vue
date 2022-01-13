<template>
  <nav>
      <a id="profile" href="/profile">My Profile</a>
      <ul v-show="shouldShowDropdown" id="profile-dropdown">
        <li>Dropdown</li>
        <li>Content</li>
      </ul>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
  </nav>  
</template>

<script>
export default {
  data() {
    return {
      admin: false,
      shouldShowDropdown: false
    }
  }  
}
</script>
