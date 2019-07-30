<template>
    <div id="app1">
        <!--  <h1>{{ msg }}</h1> -->
        <!--    <img src="./img/logo.png"> -->
        <input type="text" v-model="msg">
        <div id="myeditor" class="container" ref='myeditor'></div>
        <!--  <jsonTest></jsonTest> -->
        <my-header :config='configdata'></my-header>
        <my-jsoneditor :data='msg' :dataSchema='jsonshema' showFormat="showBoth"></my-jsoneditor>
    </div>
</template>
<script>
import getData from './src/util';

import jsoneditor from "json-editor"
import myjsoneditor from './src/components/json-editor/index.vue'
import myheader from './src/components/demo/vheader.vue'
//import jsonTest from './src/components/test.vue'


export default {
    name: 'app1',
    components: {
        'json-editor': jsoneditor,
        'my-jsoneditor': myjsoneditor,
        'my-header': myheader
        // 'jsonTest': jsonTest
    },
    data() {
        return {
            jsoneditor: null,
            msg: '测试数据',
            configdata: {
                "title": "页建框架1111",
                "src": "https://avatars3.githubusercontent.com/u/38666040",
                "link": "www.baidu.com"
            },
            jsonshema: {
                title: '头部区',
                type: 'object',
                properties: {
                    title: {
                        title: '头部标题',
                        type: 'string',
                        default: '头部标题test1111',
                    },
                    src: {
                        title: '头部图片',
                        description: '试试输入新的图片 ',
                        type: 'string',
                        default: '头部图片'
                    },
                    link: {
                        title: ' 点击跳转',
                        type: 'string',
                        format: 'url',
                        default: '头部图片点击跳转testt',
                    }
                }
            },
            dataSchema: {

            }
        }
    },
    created() {
        setInterval(() => this.fetchData(), 1000)
    },
    mounted() {
        console.log('initData');
        // this.initjson();
    },
    methods: {
        async fetchData() {
            const data = await getData();
            this.msg = data;
        },
        initjson() {
            var container = document.querySelector('.container');
            var _data = {
                "title": "页 建框架1111",
                "src": "https://avatars3.githubusercontent.com/u/38666040",
                "link": "www.baidu.com"
            };
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
            this.jsoneditor = editor;
            editor.on('change', this.jsoneditorchangeHandler)
            editor.setValue(_data);
        },
        jsoneditorchangeHandler() {
            console.log('value--change');
            let value1 = this.jsoneditor.getValue();
            console.log(value1);
            //if (this.jsoneditor ||!this.jsoneditor.getValue()) { return }
            const newData = this.jsoneditor.getValue();
            console.log(newData);
            // if (!this.dataValidate(newData)) {
            //     return
            // }
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