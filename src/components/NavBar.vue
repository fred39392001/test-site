<template>
  <nav class="navbar navbar-expand-lg bg-warning bg-yellow">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img class=" logo-m" src="img/2nd-home.png" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="">關於 Second Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">永續專案</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">解決方案</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">最新消息</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="">連絡我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to=""><img class="align-top" src="img/user.svg" alt="">登入/註冊</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
}
</script>
