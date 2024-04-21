<template>
  <main class="container-fluid px-3 py-5 p-lg-6 p-xxl-8">
    <header class="border-bottom mb-10">
      <div class="row align-items-center">
        <div class="col-sm-6 col-12">
          <h1 class="ls-tight">Настройки аккаунта</h1></div>
      </div>
      <ul class="nav nav-tabs nav-tabs-flush gap-6 overflow-x border-0 mt-4">
        <li class="nav-item"><a href="/pages/account-general.html" class="nav-link active">Главная</a></li>
        <li class="nav-item"><a href="/pages/account-billing.html" class="nav-link">О департаменте</a></li>
        <li class="nav-item"><a href="/pages/account-password.html" class="nav-link">Резиденты</a></li>
        <li class="nav-item"><a href="/pages/account-notifications.html" class="nav-link">Директора</a></li>
        <li class="nav-item"><a href="/pages/account-team.html" class="nav-link">Документы</a></li>
      </ul>
    </header>
    <div class="d-flex align-items-end justify-content-between">
      <div>
        <h4 class="fw-semibold mb-1">Основное</h4>
        <p class="text-sm text-muted">Заполнив свои данные, вы получите гораздо лучший опыт использования нашего веб-сайта.</p>
      </div>
      <div class="d-none d-md-flex gap-2">
        <button type="button" class="btn btn-sm btn-neutral">Отмена</button>
        <button type="submit" class="btn btn-sm btn-primary"><p style="color: white;">Сохранить</p></button>
      </div>
    </div>
    <hr class="my-6">
    <div class="row align-items-center">
      <div class="col-md-2">
        <label class="form-label">Ваше имя</label>
      </div>
      <div class="col-md-8 col-xl-5">
        <div class="">
          <input type="text" class="form-control">
        </div>
      </div>
    </div>
    <hr class="my-6">
    <div class="row align-items-center">
      <div class="col-md-2">
        <label class="form-label">Био</label>
      </div>
      <div class="col-md-8 col-xl-5">
        <div class="">
          <label class="form-label visually-hidden">Био</label>
          <textarea class="form-control" placeholder="Your email" rows="3"></textarea>
        </div>
      </div>
    </div>
    <hr class="my-6">
    <div class="row align-items-center">
      <div class="col-md-2">
        <label class="form-label">Username</label>
      </div>
      <div class="col-md-8 col-xl-5">
        <div class="">
          <div class="input-group position-relative"><span class="input-group-text">datacatalog.com/</span>
            <input type="email" class="form-control" placeholder="username" aria-label="username"> <span class="input-group-text">.com</span></div><span class="mt-2 valid-feedback">Looks good!</span></div>
      </div>
    </div>
    <hr class="my-6">
    <div class="row align-items-center">
      <div class="col-md-2">
        <label class="form-label">Фото</label>
      </div>
      <div class="col-md-8 col-xl-5">
        <div class="">
          <div class="d-flex align-items-center">
            <a href="#" class="avatar avatar-lg bg-warning rounded-circle text-white"><img src="#" alt="..."></a>
            <div class="hstack gap-2 ms-5">
              <label for="file_upload" class="btn btn-sm btn-neutral"><span>Загрузить</span>
                <input type="file" name="file_upload" id="file_upload" class="visually-hidden">
              </label> <a href="#" class="btn d-inline-flex btn-sm btn-neutral text-danger"><span><i class="bi bi-trash"></i> </span><span class="d-none d-sm-block me-2">Удалить</span></a></div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6">
    <div class="row align-items-center">
      <div class="col-md-2">
        <label class="form-label">Документ</label>
      </div>
      <div class="col-md-8 col-xl-5">
        <div class="">
          <label class="form-label visually-hidden">Документ</label>
          <div class="card shadow-none border-2 border-dashed border-primary-hover position-relative">
            <div class="d-flex justify-content-center px-5 py-5">
              <label for="cover_upload" class="position-absolute w-100 h-100 top-0 start-0 cursor-pointer">
                <input id="cover_upload" name="cover_upload" type="file" class="visually-hidden">
              </label>
              <div class="text-center">
                <div class="text-2xl text-muted"><i class="bi bi-upload"></i></div>
                <div class="d-flex text-sm mt-3">
                  <p class="fw-semibold">Загрузите файл или перетащите</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 3MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6">
    <div class="row align-items-center">
      <div class="col-md-2">
        <label class="form-label">Конфидициальность</label>
      </div>
      <div class="col-md-8 col-xl-5">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" name="switch_make_public" id="switch_make_public">
          <label class="form-check-label ms-2" for="switch_make_public">Сделать профиль публичным</label>
        </div>
      </div>
    </div>
    <hr class="my-6 d-md-none">
    <div class="d-flex d-md-none justify-content-end gap-2 mb-6">
      <button type="button" class="btn btn-sm btn-neutral">Cancel</button>
      <button type="submit" class="btn btn-sm btn-primary">Save</button>
    </div>
  </main>
</template>

<script>

</script>
