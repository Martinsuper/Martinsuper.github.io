"use strict";(self.webpackChunkynote=self.webpackChunkynote||[]).push([[258],{7075:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-14cbd4cc",path:"/justnote/%E4%B8%AD%E9%97%B4%E4%BB%B6/Mysql/mysql%E5%B8%B8%E7%94%A8%E8%AF%AD%E5%8F%A5.html",title:"mysql 常用语句",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"统计数据库信息相关",slug:"统计数据库信息相关",children:[{level:3,title:"查询数据库中所有表",slug:"查询数据库中所有表",children:[]},{level:3,title:"统计数据库某个表的所有数据",slug:"统计数据库某个表的所有数据",children:[]}]}],filePathRelative:"justnote/中间件/Mysql/mysql常用语句.md",git:{updatedTime:null}}},8122:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="mysql-常用语句" tabindex="-1"><a class="header-anchor" href="#mysql-常用语句" aria-hidden="true">#</a> mysql 常用语句</h1><h2 id="统计数据库信息相关" tabindex="-1"><a class="header-anchor" href="#统计数据库信息相关" aria-hidden="true">#</a> 统计数据库信息相关</h2><h3 id="查询数据库中所有表" tabindex="-1"><a class="header-anchor" href="#查询数据库中所有表" aria-hidden="true">#</a> 查询数据库中所有表</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- 查询数据库所有表</span>\n<span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span>\n<span class="token comment">-- 查询所有数据库</span>\n<span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="统计数据库某个表的所有数据" tabindex="-1"><a class="header-anchor" href="#统计数据库某个表的所有数据" aria-hidden="true">#</a> 统计数据库某个表的所有数据</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span>\n  column_name <span class="token keyword">AS</span> <span class="token string">&#39;字段名称&#39;</span><span class="token punctuation">,</span>\n  column_comment <span class="token keyword">AS</span> <span class="token string">&#39;字段描述&#39;</span><span class="token punctuation">,</span>\n  UPPER<span class="token punctuation">(</span>column_type<span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">&#39;字段类型&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">IF</span><span class="token punctuation">(</span>column_key <span class="token operator">=</span> <span class="token string">&#39;PRI&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YES&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NO&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">&#39;主键&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">IF</span><span class="token punctuation">(</span>IS_NULLABLE <span class="token operator">=</span> <span class="token string">&#39;NO&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YES&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NO&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> <span class="token string">&#39;非空&#39;</span>\n<span class="token keyword">FROM</span>\n  information_schema<span class="token punctuation">.</span><span class="token keyword">COLUMNS</span>\n<span class="token keyword">WHERE</span>\n  TABLE_SCHEMA <span class="token operator">=</span> <span class="token string">&#39;数据库名&#39;</span>\n  <span class="token operator">AND</span> table_name <span class="token operator">=</span> <span class="token string">&#39;表名&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',6),p={render:function(s,n){return e}}}}]);