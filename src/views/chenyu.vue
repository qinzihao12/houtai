<template>
<div @click="like">
{{x}}21
</div>
</template>

<script >
export default {
   
data() {
    return {
        x:null,
        y:null,
    }
},
computed:{

},
methods:{

like(){
    alert('!')
}
}



}
</script>

<style>

</style>