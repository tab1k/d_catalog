<template>
  <div class="d-none d-lg-flex py-3">
    <div class="flex-none">
      <div class="input-group input-group-sm input-group-inline w-rem-64 rounded-pill"><span class="input-group-text rounded-start-pill"><i class="bi bi-search me-2"></i> </span>
        <input type="search" class="form-control ps-0 rounded-end-pill" placeholder="Искать" aria-label="Search">
      </div>
    </div>
    <div class="hstack flex-fill justify-content-end flex-nowrap gap-6 ms-auto px-6 px-xxl-8">
      <button type="button" class="btn btn-xs btn-primary rounded-pill text-nowrap" data-bs-target="#connectWalletModal" data-bs-toggle="modal"><p style="color: white;">Подержка</p></button>
      <div class="dropdown d-none"><a href="#" class="nav-link" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-sun-fill"></i></a>
        <div class="dropdown-menu">
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light">Light</button>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark">Dark</button>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto">System</button>
        </div>
      </div>
      <div class="dropdown"><a href="#" class="nav-link" id="dropdown-notifications" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-bell"></i></a>
        <div class="dropdown-menu dropdown-menu-end px-2" aria-labelledby="dropdown-notifications">
          <div class="dropdown-item d-flex align-items-center">
            <h6 class="dropdown-header px-0">Notifications</h6><a href="#" class="text-sm fw-semibold ms-auto">Clear all</a></div>
          <div class="dropdown-item py-3 d-flex">
            <div>
              <div class="avatar bg-primary text-white rounded-circle">RF</div>
            </div>
            <div class="flex-fill ms-3">
              <div class="text-sm lg-snug w-rem-64 text-wrap"><a href="#" class="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" class="fw-semibold text-heading text-primary-hover">Webpixels</a></div><span class="text-muted text-xs">30 mins ago</span></div>
          </div>
          <div class="dropdown-item py-3 d-flex">
            <div><img src="img/img-1.jpg" class="avatar rounded-circle" alt="..."></div>
            <div class="flex-fill ms-3">
              <div class="text-sm lg-snug w-rem-64 text-wrap"><a href="#" class="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" class="fw-semibold text-heading text-primary-hover">Webpixels</a></div><span class="text-muted text-xs">30 mins ago</span></div>
          </div>
          <div class="dropdown-item py-3 d-flex">
            <div><img src="/img/img-2.jpg" class="avatar rounded-circle" alt="..."></div>
            <div class="flex-fill ms-3">
              <div class="text-sm lg-snug w-rem-64 text-wrap"><a href="#" class="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" class="fw-semibold text-heading text-primary-hover">Webpixels</a></div><span class="text-muted text-xs">30 mins ago</span></div>
          </div>
          <div class="dropdown-item py-3 d-flex">
            <div>
              <div class="avatar bg-success text-white rounded-circle">KW</div>
            </div>
            <div class="flex-fill ms-3">
              <div class="text-sm lg-snug w-rem-64 text-wrap"><a href="#" class="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" class="fw-semibold text-heading text-primary-hover">Webpixels</a></div><span class="text-muted text-xs">30 mins ago</span></div>
          </div>
          <div class="dropdown-item py-3 d-flex">
            <div><img src="images/img-4.jpg" class="avatar rounded-circle" alt="..."></div>
            <div class="flex-fill ms-3">
              <div class="text-sm lg-snug w-rem-64 text-wrap"><a href="#" class="fw-semibold text-heading text-primary-hover">Robert</a> sent a message to <a href="#" class="fw-semibold text-heading text-primary-hover">Webpixels</a></div><span class="text-muted text-xs">30 mins ago</span></div>
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item py-2 text-center"><a href="#" class="fw-semibold text-muted text-primary-hover">View all</a></div>
        </div>
      </div>
      <div class="dropdown">
        <a class="avatar avatar-sm text-bg-dark rounded-circle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false"><img src="img/memoji-1.svg"></a>
        <div class="dropdown-menu dropdown-menu-end">
          <div class="dropdown-header"><span class="d-block text-sm text-muted mb-1">Вы вошли как</span> <span class="d-block text-heading fw-semibold">Табигат Карбаев</span></div>
          <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="bi bi-house me-3"></i>Главная </a>
          <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="bi bi-gear me-3"></i>Настройки </a>
          <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="bi bi-person me-3"></i>Выйти</a></div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>

</script>

