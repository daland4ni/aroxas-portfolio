<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="card p-4" style="width: 300px;">
            <h5 class="text-center mb-4">Login</h5>
            <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="username" placeholder="Enter username" />
            </div>
            <div class="form-group mt-3">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter password" />
            </div>
            <button class="btn btn-primary w-100 mt-4">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: '',
            error: '',
        };
    },
    methods: {
        handleLogin() {
            if (this.username === 'aroxas' && this.password === 'viewportfolio123') {
                this.$router.push('/profile');
            } else {
                this.error = 'Invalid username or password';
            }
        },
    },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
input {
  display: block;
  margin: 1rem 0;
  width: 100%;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}
.error {
  color: red;
  margin-top: 1rem;
}
</style>