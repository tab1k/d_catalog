<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-5">
      <label class="form-label" for="username">Username</label>
      <input type="text" class="form-control" id="username" v-model="username">
    </div>
    <div class="mb-5">
      <div class="d-flex justify-content-between gap-2 mb-2 align-items-center">
        <label class="form-label mb-0" for="password">Пароль</label> <a href="#" class="text-sm text-muted text-primary-hover text-underline">Забыли пароль?</a></div>
      <input type="password" class="form-control" id="password" autocomplete="current-password" v-model="password">
    </div>
    <div class="mb-5">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="check_example" id="check_example">
        <label class="form-check-label" for="check_example">Запомнить меня</label>
      </div>
    </div>
    <div><button type="submit" class="btn btn-dark w-100">Войти</button></div>

    <!-- Отображение сообщения об ошибке -->
    <p v-if="error" class="text-danger">{{ error }}</p>
  </form>
</template>

<script>
export default {
  layout: 'login-layout',
  data() {
    return {
      username: '',
      password: '',
      error: '' // Добавляем переменную для хранения сообщения об ошибке
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        });
        // Перенаправление после успешного входа
        this.$router.push('/');
      } catch (error) {
        // Обработка ошибок входа
        console.error('Ошибка входа:', error);
        this.error = 'Неправильное имя пользователя или пароль'; // Устанавливаем сообщение об ошибке
      }
    }
  }
}
</script>
