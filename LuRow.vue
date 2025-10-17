<template>
  <div class="row">
    <div class="col-12 col-lg-8 mb-6 mb-lg-0">
      <article>
        <slot />
      </article>
    </div>
    <div class="col-12 col-lg-4">
      <slot name="right-column" />
    </div>
  </div>
</template>
