<template>
  <main class="container-fluid p-0">
    <div class="px-6 px-lg-7 pt-8 border-bottom">
      <div class="d-flex align-items-center">
        <h1>Банковский сектор</h1>
        <div class="hstack gap-2 ms-auto">
          <button type="button" class="btn btn-sm btn-neutral d-none d-lg-inline-flex"><i class="bi bi-arrow-90deg-right me-2"></i> Отправить</button> <a href="#" class="btn btn-sm btn-primary"><i class="bi bi-plus-lg me-2"></i> Создать</a></div>
      </div>

      <!-- ДАРМЕН ВОТ ПОИСК -->

      <div class="row align-items-center mt-2">
        <div class="col">
          <input type="text" class="form-control h-75" placeholder="Поиск...">
        </div>
        <div class="col-auto">
          <button type="button" class="btn d-inline-flex btn-sm btn-dark">
            <p style="color: white; margin: 0;">Поиск</p>
          </button>
        </div>
      </div>

      <!-- ДАРМЕН ПОИСК ЗАКОНЧИЛСЯ-->
      <!-- p.s. УЧИ BOOTSTRAP , HTML, CSS  -->

      <ul class="nav nav-tabs nav-tabs-flush gap-8 overflow-x border-0 mt-4">
        <li class="nav-item"><a href="#" class="nav-link active">Все</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Избранное</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Архивированное</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Отмененные</a></li>
      </ul>
    </div>
    <div class="d-flex gap-2 scrollable-x py-3 px-7 border-bottom">
      <button type="button" class="btn btn-xs btn-neutral text-xs"><i class="bi bi-plus-circle-fill opacity-70 me-2"></i>Категория</button>
      <button type="button" class="btn btn-xs btn-neutral text-xs"><i class="bi bi-plus-circle-fill opacity-70 me-2"></i>Количество</button>
      <button type="button" class="btn btn-xs btn-neutral text-xs"><i class="bi bi-plus-circle-fill opacity-70 me-2"></i>Статус</button>
      <div class="align-items-center ms-auto text-sm text-muted text-primary-hover fw-semibold d-none d-md-flex" role="button"><i class="bi bi-x me-1"></i> <span>Очистить</span></div>
    </div>
    <div class="table-responsive">
      <table class="table table-hover table-striped table-sm table-nowrap">
        <thead>
        <tr>
          <th scope="col">
            <div class="d-flex align-items-center gap-2 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div><span>Handler</span></div>
          </th>
          <th scope="col">Currency</th>
          <th scope="col">Rate</th>
          <th scope="col">Amount</th>
          <th scope="col" class="d-none d-xl-table-cell">Date</th>
          <th scope="col" class="d-none d-xl-table-cell">Status</th>
          <th scope="col" class="d-none d-xl-table-cell">Required Action</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Bought BTC</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Sold ADA</span></div>
            </div>
          </td>
          <td class="text-xs">ADA <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Bought XRP</span></div>
            </div>
          </td>
          <td class="text-xs">XRP <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Robert Fox</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Robert Fox</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Robert Fox</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Robert Fox</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Robert Fox</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Robert Fox</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Robert Fox</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3 ps-1">
              <div class="text-base">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox">
                </div>
              </div>
              <div class="d-none d-xl-inline-flex icon icon-shape w-rem-8 h-rem-8 rounded-circle text-sm bg-secondary bg-opacity-25 text-secondary"><i class="bi bi-file-fill"></i></div>
              <div><span class="d-block text-heading fw-bold">Robert Fox</span></div>
            </div>
          </td>
          <td class="text-xs">BTC <i class="bi bi-arrow-right mx-2"></i> USDT</td>
          <td>1.23</td>
          <td>$1,300,000.00</td>
          <td class="d-none d-xl-table-cell">3 min ago</td>
          <td class="d-none d-xl-table-cell"><span class="badge badge-lg badge-dot"><i class="bg-success"></i>Active</span></td>
          <td class="d-none d-xl-table-cell">Needs your attention</td>
          <td class="text-end">
            <button type="button" class="btn btn-sm btn-square btn-neutral w-rem-6 h-rem-6"><i class="bi bi-three-dots"></i></button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="py-4 px-6">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-6 d-none d-md-block"><span class="text-muted text-sm">Показаны 10 элементов из 250 найденных результатов.</span></div>
        <div class="col-md-auto">
          <nav aria-label="Page navigation example">
            <ul class="pagination pagination-spaced gap-1">
              <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item"><a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

</script>
