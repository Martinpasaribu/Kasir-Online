
<template>

    <div>


    </div>

</template>



<script>

export default {

    data () {
      return {
        
        sideBar : false,
    
      }
    },

    methods: {

        openSideBar() {
        this.sideBar = true;
        },
        closeSideBar() {
        this.sideBar = false;
        },
    }
}

</script>