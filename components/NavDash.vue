
<template>
    <div>
      <VueSidebarMenuAkahon
        :isUsedVueRouter="true"
        style="background-color: #0A0A0A;"
        :menuIcon="bx-grid-alt"
        :secondaryColor="'rgb(10,10,10)'"
        :menuTitle="''"
        :menuLogo="null"
        :profileImg="'https://i.imgur.com/tuoL1G7.png'"
        :isSearch="false"
        :isExitButton="false"
        :profileName="''"
        :profileRole="''"
        :menuItems="[
          { link: '/dashboard', name: 'Dashboard', tooltip: 'Dashboard', icon: 'bx-grid-alt' },
          { link: '/upgrade', name: 'Upgrades', tooltip: 'Upgrades', icon: 'bx-trending-up'},
          { link: '/dashboard/payments', name: 'Payments', tooltip: 'Payments', icon: 'bxs-bank', },
          { link: '/dashboard/upgrades', name: 'History', tooltip: 'History', icon: 'bx-history'},
          { link: '/dashboard/renewals', name: 'Renewls', tooltip: 'Renewls', icon: 'bx-left-arrow'},
        ]"
      />
    </div>
  </template>
  
  <script>
    import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
    
    export default {
      name: 'component.vue',
      components: {VueSidebarMenuAkahon},
      data() {
        return {}
      }
    }
  </script>