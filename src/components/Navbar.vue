<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/showcase">Showcase</router-link></li>
      <li><router-link to="/creative">Creative</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar {
  background-color: #002750;
  padding: 1rem;
}
.navbar ul {
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.navbar li {
  font-weight: bold;
}
.navbar a {
  color: white;
  text-decoration: none;
}
.navbar a.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
