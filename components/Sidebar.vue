<template>
  <nav class="flex-none navbar navbar-vertical navbar-expand-lg show vh-lg-100 px-0 py-2 navbar-light bg-light" id="sidebar">
    <div class="container-fluid px-3 px-md-4 px-lg-6">
      <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <a class="navbar-brand d-inline-block py-lg-3 mb-lg-5" href="/pages/dashboard.html">
        <img src="/img/logo.png" class="" style="height: 80px;" alt="...">
      </a>
      <div class="navbar-user d-lg-none">
        <div class="dropdown">
          <a class="d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
            <div>
              <div class="avatar avatar-sm text-bg-secondary rounded-circle">AE</div>
            </div>
            <div class="d-none d-sm-block ms-3"><span class="h6">Alexis</span></div>
            <div class="d-none d-md-block ms-md-2"><i class="bi bi-chevron-down text-muted text-xs"></i></div>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <div class="dropdown-header"><span class="d-block text-sm text-muted mb-1">Signed in as</span> <span class="d-block text-heading fw-semibold">Alexis Enache</span></div>
            <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="bi bi-house me-3"></i>Home </a><a class="dropdown-item" href="#"><i class="bi bi-pencil me-3"></i>Edit profile</a>
            <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="bi bi-gear me-3"></i>Settings </a><a class="dropdown-item" href="#"><i class="bi bi-image me-3"></i>Media </a><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-up me-3"></i>Share</a>
            <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="bi bi-person me-3"></i>Login</a></div>
        </div>
      </div>
      <div class="collapse navbar-collapse overflow-x-hidden" id="sidebarCollapse">
        <ul class="navbar-nav">
          <li class="nav-item my-1">
            <nuxt-link exact no-prefetch active-class="active" class="nav-link d-flex align-items-center rounded-pill" to="/home" role="button" aria-expanded="true" aria-controls="sidebar-dashboards">
              <i class="bi bi-house-fill"></i>
              <span>Главная</span>
              <span class="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span>
            </nuxt-link>
          </li>

          <li class="nav-item my-1">
            <nuxt-link exact no-prefetch active-class="active" class="nav-link d-flex align-items-center rounded-pill" to="/" role="button" aria-expanded="false" aria-controls="sidebar-pages"><i class="bi bi-bar-chart-fill"></i> <span>Документы</span> <span class="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span>
            </nuxt-link>
          </li>
          <li class="nav-item my-1"><a class="nav-link d-flex align-items-center rounded-pill" href="#sidebar-account" role="button" aria-expanded="false" aria-controls="sidebar-account"><i class="bi bi-gear-fill"></i> <span>Аккаунт</span> <span class="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span></a>

          </li>

          <li class="nav-item my-1"><a class="nav-link d-flex align-items-center rounded-pill" href="#sidebar-other" role="button" aria-expanded="false" aria-controls="sidebar-other"><i class="bi bi-file-break-fill"></i> <span>Другое</span> <span class="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span></a>
          </li>
        </ul>
        <hr class="navbar-divider my-5 opacity-70">
        <ul class="navbar-nav">
          <li><span class="nav-link text-xs fw-semibold text-uppercase text-muted ls-wide">Дополнительно</span></li>
          <li class="nav-item my-1"><a class="nav-link d-flex align-items-center rounded-pill" href="/docs"><i class="bi bi-book-fill"></i> <span>Документация</span> <span class="badge badge-sm rounded-pill me-n2 bg-success-subtle text-success ms-auto"></span><span class="badge badge-sm rounded-pill me-n2 bg-warning-subtle text-warning ms-auto">Новое</span></a></li>

        </ul>
        <div class="mt-auto"></div>

      </div>
    </div>
  </nav>
</template>

<style>

</style>

<script>

</script>
