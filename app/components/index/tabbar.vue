<template>
	<f7-toolbar tabbar labels inner="false">
      <f7-link text="Contacts">
        <f7-icon if-ios="f7:email_fill"></f7-icon>
      </f7-link>

      <a href="#tab-1" class="tab-link tab-link-active">
        <!-- Different icons for iOS and MD themes -->
        <!-- <i class="icon f7-icons ios-only">email_fill</i>
        <i class="icon material-icons md-only">email</i> -->
        <!-- Label text -->
        <f7-icon if-ios="f7:chat"></f7-icon>
        <span class="tabbar-label">Inbox</span>
      </a>
    </f7-toolbar>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
