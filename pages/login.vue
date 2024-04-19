<template>
  <form>
    <div class="mb-5">
      <label class="form-label" for="email">Username</label>
      <input type="email" class="form-control" id="email">
    </div>
    <div class="mb-5">
      <div class="d-flex justify-content-between gap-2 mb-2 align-items-center">
        <label class="form-label mb-0" for="password">Пароль</label> <a href="#" class="text-sm text-muted text-primary-hover text-underline">Забыли пароль?</a></div>
      <input type="password" class="form-control" id="password" autocomplete="current-password">
    </div>
    <div class="mb-5">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="check_example" id="check_example">
        <label class="form-check-label" for="check_example">Запомнить меня</label>
      </div>
    </div>
    <div><a href="#" class="btn btn-dark w-100">Войти</a></div>
  </form>
</template>

<script>
  export default {
    layout: 'login-layout'
  }
</script>
