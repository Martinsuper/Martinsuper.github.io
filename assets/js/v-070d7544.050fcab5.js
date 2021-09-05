"use strict";(self.webpackChunkynote=self.webpackChunkynote||[]).push([[755],{6867:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-070d7544",path:"/justnote/%E5%B7%A5%E5%85%B7/Git/GitHub%20Action.html",title:"GitHub action",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"什么是 Github action ?",slug:"什么是-github-action",children:[]},{level:2,title:"基本概念",slug:"基本概念",children:[{level:3,title:"Workflows",slug:"workflows",children:[]},{level:3,title:"Events",slug:"events",children:[]},{level:3,title:"Steps",slug:"steps",children:[]},{level:3,title:"Jobs",slug:"jobs",children:[]},{level:3,title:"Actions",slug:"actions",children:[]},{level:3,title:"Runners",slug:"runners",children:[]}]}],filePathRelative:"justnote/工具/Git/GitHub Action.md",git:{updatedTime:null,contributors:[]}}},8364:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const a=(0,i(6252).uE)('<h1 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> GitHub action</h1><h2 id="什么是-github-action" tabindex="-1"><a class="header-anchor" href="#什么是-github-action" aria-hidden="true">#</a> 什么是 Github action ?</h2><p>GitHub action 是 GitHub 提供的持续集成工具，可以通过事件触发自动执行 action 脚本。可以在 GitHub 上构建、测试、打包、发布或部署项目</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>Runner -&gt; Action -&gt; Job -&gt; Step</p><h3 id="workflows" tabindex="-1"><a class="header-anchor" href="#workflows" aria-hidden="true">#</a> Workflows</h3><p>Workflows 是一个添加到 GitHub 仓库自动化脚本，是由一个或者多个 Jobs 构成，可以通过事件或者按计划触发。可以用于构建、测试、打包、发布或者部署项目。</p><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><p>Event 是具体的活动，用于触发 Worflow。比如有人 push 代码到 GitHub ，可以通过 Github 的 Webhook 钩子来触发 Workflow。</p><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h3><p>Step 是 Job 里面的一个单独的可以执行命令的任务。一个 Step 可以是一个 Action 也可以是一个 Shell 命令。在相同的 Runner 里面，任何一个 Job 里面的 Step</p><h3 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> Jobs</h3><p>一系列 Steps 构成 Jobs</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h3><p>多个 Jobs 构成</p><h3 id="runners" tabindex="-1"><a class="header-anchor" href="#runners" aria-hidden="true">#</a> Runners</h3><p>是安装了 GitHub Actions 运行程序的服务器，可以使用 GitHub 托管的 Runners，也可以使用自己的。GitHub 托管的 Runners 是基于 Ubuntu Linux、Microsoft Windows，和 macOS</p>',17),n={render:function(e,t){return a}}}}]);