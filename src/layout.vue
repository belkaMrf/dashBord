<template>
  <div>
    <Sidebar />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <Header />
      <div class="body flex-grow-1 px-3">
        <CContainer lg>
          <router-view />
        </CContainer>
      </div>
    </div>
  </div>
</template>
<script>
import { CContainer } from '@coreui/vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'layout',
  components: {
    Header,
    Sidebar,
    CContainer,
  },
}
</script>
