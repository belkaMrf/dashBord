<template>
  <CRow>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="primary">
        <template #value
          >26K
          <span class="fs-6 fw-normal">
            (-12.4% <CIcon icon="cil-arrow-bottom" />)
          </span>
        </template>
        <template #title>Users</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 90px"
            :data="{
              labels: ['1', '2', '3', '4', '5', '6', '7'],
              datasets: [
                {
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: '#321fdb',
                  data: [80, 80, 80, 80, 80, 80, 80],
                },
              ],
            }"
            :options="{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="info">
        <template #value
          >$6.200
          <span class="fs-6 fw-normal">
            (40.9% <CIcon icon="cil-arrow-top" />)
          </span>
        </template>
        <template #title>Income</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 90px"
            :data="{
              labels: ['1', '2', '3', '4', '5', '6', '7'],
              datasets: [
                {
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: '#39f',
                  data: [20, 20, 20, 20, 20, 20, 20, 20, 20],
                },
              ],
            }"
            :options="{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="warning">
        <template #value
          >2.49%
          <span class="fs-6 fw-normal">
            (84.7% <CIcon icon="cil-arrow-top" />)
          </span>
        </template>
        <template #title>Conversion Rate</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3"
            style="height: 90px"
            :data="{
              labels: ['1', '2', '3', '4', '5', '6', '7'],
              datasets: [
                {
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  data: [80, 80, 80, 80, 80, 80, 80],
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="danger">
        <template #value
          >44K
          <span class="fs-6 fw-normal">
            (-23.6% <CIcon icon="cil-arrow-bottom" />)
          </span>
        </template>
        <template #title>Sessions</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="bar"
            class="mt-3 mx-3"
            style="height: 90px"
            :data="{
              labels: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
              ],
              datasets: [
                {
                  backgroundColor: 'lightgrey',
                  data: [
                    50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
                    50, 50,
                  ],
                },
              ],
            }"
            :options="{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
  </CRow>
</template>

<script>
import { CChart } from '@coreui/vue-chartjs'
export default {
  name: 'WidgetsStatsA',
  components: {
    CChart,
  },
}
</script>
