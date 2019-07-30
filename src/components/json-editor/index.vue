<template>
    <div id="app1">
        <div id="myeditor" class="container" ref='myeditor'></div>
    </div>
</template>
<script>
import jsoneditor from "json-editor"

export default {
    name: 'app1',
    props: {
        data: {
            required: true,
        },
        dataSchema: {
            type: Object,
            required: true,
        },
        showFormat: {
            type: String,
            default: 'showCode',
        },
        showFormatButtons: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        'json-editor': jsoneditor
    },
    data() {
        return {
            msg: 'test ----aa',
            jsonshema: {},
            _dataSchema: {}
        }
    },
    created() {
        // setInterval(() => this.fetchData(), 1000)
    },
    mounted() {
        console.log('initData');
        // debugger
        console.log(this.dataSchema);
        this._dataSchema = this.dataSchema; // { ...this.dataSchema };
        //this.initjson();
        this.initJsonEditor();
    },
    methods: {
        async fetchData() {},
        initJsonEditor() {
            var container = document.querySelector('.container');
            var editor = new JSONEditor(container, {
                schema: this._dataSchema
            });
        },
        initjson() {
            var container = document.querySelector('.container');
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