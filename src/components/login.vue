<template>
  <div>
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          placeholder="Enter Username"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div v-show="submitted && !username" class="invalid-feedback">
          Username is required
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          placeholder="Enter password"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button v-on:click="login1" class="btn btn-primary" type="submit">
          Login
        </button>
      </div>
      <!-- <label v-if="error" class="alert alert-danger">Incorrect Username or Password</label>  -->
    </form>
  </div>
</template>

<script>
import { login } from "../../service.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  methods: {
    login1() {
      this.submitted = true;
      let user = {
        username: this.username,
        password: this.password,
      };

      login(user).then(
        (response) => {
          localStorage.setItem("token", response.token);
          this.$router.push("/quiz");
        },
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
        }
      );
    },
  },
};
</script>

<style scoped >


button {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width:auto;
  flex-direction: column;
  text-align: center;
}
</style>
