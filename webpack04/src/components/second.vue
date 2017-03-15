<script>
    //es6
    export default {
        name:"app",
         //data:function(){}，下面是es6写法
        data () {
            return {
                msg: 'Second Component '
            }
        },
    }
</script>
<template>
    <div>
        <span v-html="msg"></span>
    </div>
</template>
<style lang="scss" scoped>
    div{
        height:100px;
        width: 50%;
        border: solid 1px;
        margin-top: 10px;
    }
</style>