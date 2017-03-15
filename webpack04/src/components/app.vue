<script>
    //es6
    import second from './second.vue';
    export default {
        name:"app",
         //data:function(){}，下面是es6写法
        data () {
            return {
                msg: 'first Component '
            }
        },
        components:{
            second
        }
    }
</script>
<template>
    <div>
        <div class="first">
            <span>df</span>
            <span v-html="msg"></span>
        </div>
        <second></second>
    </div>
</template>
<style lang="scss" scoped>
    .first{
        height:100px;
        width: 50%;
        border: solid 1px;
    }
</style>