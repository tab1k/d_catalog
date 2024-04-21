
export default function ({ route, redirect }) {
  // Если пользователь не на странице входа и не аутентифицирован, перенаправляем его на страницу входа
  if (route.name !== 'login' && !isAuthenticated()) {
    return redirect('/login')
  }
}

function isAuthenticated() {
  // Здесь должна быть логика проверки, аутентифицирован ли пользователь
  // Вернем true для тестовых целей
  return true
}
