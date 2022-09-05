<template>
  <CRow>
    <CCol :lg="4">
      <CWidgetStatsD style="--cui-card-cap-bg: #3b5998">
        <template #icon>
          <CIcon icon="cib-facebook" height="60" class="text-white" />
        </template>
      </CWidgetStatsD>
    </CCol>
    <CCol :lg="4">
      <CWidgetStatsD style="--cui-card-cap-bg: #00aced">
        <template #icon>
          <CIcon icon="cib-twitter" height="60" class="text-white" />
        </template>
      </CWidgetStatsD>
    </CCol>
    <CCol :lg="4">
      <CWidgetStatsD style="--cui-card-cap-bg: #4875b4">
        <template #icon>
          <CIcon icon="cib-linkedin" height="60" class="text-white" />
        </template>
      </CWidgetStatsD>
    </CCol>
  </CRow>
</template>
