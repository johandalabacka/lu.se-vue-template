<template>
  <span class="b-avatar b-avatar-sm badge-primary rounded-circle">
    <span class="b-avatar-text">{{ text }}<span />
    </span></span>
</template>

<script>
export default {
  name: 'BAvatar',
  props: {
    text: { type: String, default: '' },
  },
}
</script>

<style scoped>
.b-avatar-sm .b-avatar-text {
    font-size: 0.6rem;
}
.b-avatar .b-avatar-text {
    text-transform: uppercase;
    white-space: nowrap;
}

.b-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    font-size: inherit;
    font-weight: 400;
    line-height: 1;
    max-width: 100%;
    max-height: auto;
    text-align: center;
    overflow: visible;
    position: relative;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background-color: var(--bs-primary);
    color: white;
}

</style>
