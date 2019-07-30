<template>
    <div id="app1">
        <div id="myeditor" class="container" ref='myeditor'></div>
    </div>
</template>
<script>
import jsoneditor from "json-editor"

export default {
    name: 'app1',
    components: {
        'json-editor': jsoneditor
    },
    data() {
        return {
            msg: 'test ----aa',
            jsonshema: {
                name: 'testt',
                url: 'dsafatt',
                sex: 'male'
            },
            dataSchema: {

            }
        }
    },
    created() {
        // setInterval(() => this.fetchData(), 1000)
    },
    mounted() {
        console.log('initData');
        this.initjson();
    },
    methods: {
        async fetchData() {

        },
        initjson() {
            var container = document.querySelector('.container');
            // var schema = {
            // "type": "array",
            // "title": "Nodes",
            // "items": {
            // "type": "object",
            // "title": "Node",
            // "properties": {
            // "node": {
            // "type": "string",
            // "title": "I am a node"
            // }
            // }
            // }
            // }; 
            var schema = {
                title: '头部区',
                type: 'object',
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        default: '头部标题',
                    },
                    src: {
                        title: '头部图片',
                        description: '试试输入新的图片URL: https://vuejs.org/images/logo.png',
                        type: 'string',
                        default: '头部图片'
                    },
                    link: {
                        title: '头部图片点击跳转',
                        type: 'string',
                        format: 'url',
                        default: '头部图片点击跳转',
                    }
                }
            };
            var editor = new JSONEditor(container, {
                schema: schema
            });
        }
    }
}
</script>
<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;

    h1 {
        color: green;
    }
}
</style>