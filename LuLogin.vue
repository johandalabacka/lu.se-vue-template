<template>
  <b-modal
    ref="loginModal"
    size="sm"
    :ok-disabled="! username || ! password"
    :ok-title="$t('login')"
    @shown="shown"
    @hidden="hidden"
    @ok="login"
  >
    <template v-slot:modal-title>{{ $t('login') }}</template>
    <b-alert :show="loginFailed" variant="warning">{{ $t('login_failed') }}</b-alert>
    <b-form @submit.prevent="login">
      <b-form-row>
        <b-form-group class="col-12" :label="$t('username')">
          <b-input ref="username" spellcheck="false" v-model="username" @keydown.enter.native="login"/>
        </b-form-group>
      </b-form-row>
      <b-form-row>
        <b-form-group class="col-12" :label="$t('password')">
          <b-input type="password" v-model="password" @keydown.enter.native="login"/>
        </b-form-group>
      </b-form-row>
      <b-form-row v-if="options.length > 0">
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
      this.$refs.username.focus()
    },
    show() {
      this.$refs.loginModal.show()
    },
    hide() {
      this.$refs.loginModal.hide()
    },
    hidden () {
      this.username = ''
      this.password = ''
    },
    login(event) {
      event.preventDefault()
      this.$emit('login', { username: this.username, password: this.password })
    }
  },
  i18n: {
    messages: {
      sv: {
        login: 'Logga in',
        username: 'Användarnamn',
        password: 'Lösenord',
        login_failed: 'Inloggningen misslyckades'
      },
      en: {
        login: 'Login',
        username: 'Username',
        password: 'Password',
        login_failed: 'Inloggningen misslyckades'
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