# Angular Boilerplate
npm在package json中的script节点中可以定义脚本任务

.editorconfig --统一不同开发者的不同开发工具的开发配置
在sublime中使用需要安装一个EditorConfig的插件

-- 为NG做一个项目骨架的目的是为了快速开始一个新的项目

-- 为不同的视图模板创建独立的模块，并为这些模块做路由，写控制器

-- API:Application Programme Interface(应用程序编程接口)

    有哪些常见的API？

    WebAPI 通过WEB方式提供的接口叫做WEBAPI

    Math.random()  --api?

    所有有输入输出的事物都可以是API,都是函数

-- 测试WebAPI的工具：POSTMAN

分页:
每页显示多少条 10

page:1 --> start:0  count:10
page:2 --> start:10 count:10
page:3 --> start:20 count:10

start = (page-1) * count;
pageCount = Math.ceil(total / count); 

1.在路由的配置中加上分页的参数
2.在控制器提取配置参数



