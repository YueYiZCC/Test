<template>
    <div class="header-container">
        <label>{{msg}}</label>
        <div class="title">{{config.title}}</div>
        <div class="header">
            <img class="header__img" :src="config.src" @click="imgClick">
        </div>
    </div>
</template>
<script>
export default {
    name: 'my-header',
    props: {
        config: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            msg: 'test',
            Config: {}
        }
    },
    mounted() {
        //this.Config = this.config; // { ...this.dataSchema };

    },
    methods: {
        imgClick() {
            window.location.href = this.config.link;
        }
    }
}
</script>
<style lang="scss" scoped>
</style>