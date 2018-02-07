<template>
	<f7-page>
		<f7-navbar title="YO!"></f7-navbar>
		
    <f7-button>
        <f7-icon if-ios="f7:chat_fill"></f7-icon>
    </f7-button>

    <tabbar></tabbar>

	</f7-page>
</template>

<script>
import Tabbar from '../components/index/tabbar'

export default {
  data() {
    return {
      tabs: [
        {

        }
      ]
    };
  },
  methods: {
    
  },
  components: {
    Tabbar
  }
};
</script>

<style scoped>

</style>
