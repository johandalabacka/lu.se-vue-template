<template>
  <div class="avatar" :class="{'avatar-sm': small}">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'LuAvatar',
  props: {
    text: { type: String, required: true },
    small: Boolean
  }
}
</script>

<style>
  .avatar {
    background-color: var(--primary);
    color: white;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    flex-shrink: 0;
    width: 1.8rem;
    height: 1.8rem;
    font-size: 0.72em;
    font-weight: 400;
    line-height: 1;
    max-width: 100%;
    max-height: auto;
    text-align: center;
    text-transform: uppercase;
  }

  .avatar-sm {
    width: 1.5rem;
    height: 1.5rem;
    font-size: .6rem;
  }
</style>
