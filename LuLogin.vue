<template>
  <b-modal
    ref="loginModal"
    size="sm"
    :ok-disabled="! username || ! password"
    :ok-title="$t('login')"
    @shown="shown"
  >
    <template v-slot:modal-title>{{ $t('login') }}</template>
    <b-alert :show="loginFailed" variant="warning">{{ $t('login_failed') }}</b-alert>
    <b-form @submit.prevent="login">
      <b-form-row>
        <b-form-group class="col-12" :label="$t('username')">
          <b-input ref="username" spellcheck="false" v-model="username" />
        </b-form-group>
      </b-form-row>
      <b-form-row>
        <b-form-group class="col-12" :label="$t('password')">
          <b-input type="password" v-model="password" />
        </b-form-group>
      </b-form-row>
      <b-form-row>
        <b-select v-model="username" :options="options"></b-select>
      </b-form-row>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  props: {
    loginFailed: Boolean
  },
  data() {
    return {
      username: '',
      password: '',
      login_failed: '',
      options: []
    };
  },
  methods: {
    shown() {
      this.username = ''
      this.password = ''
    },
    show() {
      this.$refs.loginModal.show()
    },
    hide() {
      this.$refs.loginModal.hide()
    },
    login() {
      this.$emit('login', { username: this.username, password: this.password })
    }
  },
  i18n: {
    messages: {
      sv: {
        login: 'Logga in',
        username: 'Användarnamn',
        password: 'Lösenord'
      },
      en: {
        login: 'Login',
        username: 'Username',
        password: 'Password'
      }
    }
  }
};
</script>

<style>
.modal-backdrop {
  opacity: 0.7;
}
</style>