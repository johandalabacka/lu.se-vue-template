<template>
  <b-modal
    ref="loginModal"
    size="sm"
    :ok-disabled="! username || ! password"
    :ok-title="$t('login')"
    @shown="shown"
    @hidden="hidden"
    @ok="login"
    @cancel="cancelLogin"
    @close="cancelLogin"
  >
    <template v-slot:modal-title>{{ $t('login') }}</template>
    <b-alert :show="!!loginFailed" variant="warning">{{ loginFailed === true ? $t('login_failed') : loginFailed }}</b-alert>
    <b-form @submit.prevent="login">
      <b-form-row>
        <b-form-group class="col-12" :label="$t('username')">
          <b-input ref="username" autocomplete="username" spellcheck="false" v-model="username" @keydown.enter.native="login"/>
          <small>{{ $t('login_text')}}</small>
        </b-form-group>
      </b-form-row>
      <b-form-row>
        <b-form-group class="col-12" :label="$t('password')">
          <b-input type="password" autocomplete="current-password" v-model="password" @keydown.enter.native="login"/>
        </b-form-group>
      </b-form-row>
      <b-form-row v-if="options && options.length > 0">
        <b-select v-model="username" :options="options"></b-select>
      </b-form-row>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  props: {
    loginFailed: [Boolean, String],
    options: Array
  },
  data() {
    return {
      username: '',
      password: ''
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
      let username = this.username.trim().toLowerCase()
      const index = username.indexOf('@')
      if (index !== -1) {
        username = username.substring(0, index)
      }
      console.log(username)
      this.$emit('login', { username, password: this.password })
    },
    cancelLogin() {
      this.$emit('cancel')
    }
  },
  i18n: {
    messages: {
      sv: {
        login: 'Logga in',
        login_text: 'Använd ditt lucat-konto',
        username: 'Användarnamn',
        password: 'Lösenord',
        login_failed: 'Inloggningen misslyckades'
      },
      en: {
        login: 'Login',
        login_text: 'Use your Lucat account',
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