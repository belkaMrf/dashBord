import { defineComponent, h, resolveComponent } from 'vue'
import { CSidebarNav, CNavItem, CNavGroup, CNavTitle } from '@coreui/vue'
import { RouterLink } from 'vue-router'

const routes = [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    icon: 'cil-speedometer',
  },
  {
    component: 'CNavTitle',
    name: 'Theme',
  },
  {
    component: 'CNavItem',
    name: 'Colors',
    icon: 'cil-drop',
  },
  {
    component: 'CNavItem',
    name: 'Typography',
    icon: 'cil-pencil',
  },
  {
    component: 'CNavTitle',
    name: 'Components',
  },
  {
    component: 'CNavGroup',
    name: 'Base',
    icon: 'cil-puzzle',
    hasChildren: true,
  },
  {
    component: 'CNavGroup',
    name: 'Buttons',
    icon: 'cil-cursor',
    hasChildren: true,
  },
  {
    component: 'CNavGroup',
    name: 'Forms',
    icon: 'cil-notes',
    hasChildren: true,
  },
  {
    component: 'CNavItem',
    name: 'Charts',
    icon: 'cil-chart-pie',
  },
  {
    component: 'CNavGroup',
    name: 'Icons',
    icon: 'cil-star',
    hasChildren: true,
  },
  {
    component: 'CNavGroup',
    name: 'Notifications',
    icon: 'cil-bell',
    hasChildren: true,
  },
  {
    component: 'CNavItem',
    name: 'Widgets',
    icon: 'cil-calculator',
  },
  {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: 'Pages',
    icon: 'cil-star',
    hasChildren: true,
  },
  {
    component: 'CNavItem',
    name: null,
    icon: null,
  },
  {
    component: 'CNavItem',
    name: null,
    icon: null,
  },
  {
    component: 'CNavItem',
    name: 'Docs',
    icon: 'cil-notes',
  },
  {
    component: 'CNavItem',
    name: 'Try CoreUI PRO',
    icon: 'cil-calendar',
  },
]

const SideBar = defineComponent({
  name: 'SideBar',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const renderRoute = (route) => {
      return route.hasChildren
        ? h(
            CNavGroup,
            {
              visible: false,
            },
            {
              togglerContent: () => [
                h(resolveComponent('CIcon'), {
                  customClassName: 'nav-icon',
                  name: route.icon,
                }),
                route.name,
              ],
            },
          )
        : h(
            RouterLink,
            {
              to: '/',
              custom: true,
            },
            {
              default: (props) =>
                h(
                  resolveComponent(route.component),
                  {
                    href: props.href,
                  },
                  {
                    default: () => [
                      route.icon
                        ? h(resolveComponent('CIcon'), {
                            customClassName: 'nav-icon',
                            name: route.icon,
                          })
                        : null,
                      route.name,
                    ],
                  },
                ),
            },
          )
    }

    return () =>
      h(
        CSidebarNav,
        {},
        {
          default: () => routes.map((route) => renderRoute(route)),
        },
      )
  },
})
export { SideBar }
