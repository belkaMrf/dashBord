<template>
  <CAvatar :src="profile" />
</template>

<script>
import profile from '@/assets/img/profile.jpg'
export default {
  setup() {
    return {
      profile: profile,
    }
  },
}
</script>
