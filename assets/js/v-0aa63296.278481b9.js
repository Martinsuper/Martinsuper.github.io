"use strict";(self.webpackChunkynote=self.webpackChunkynote||[]).push([[199],{5769:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-0aa63296",path:"/justnote/%E4%B8%AD%E9%97%B4%E4%BB%B6/Mysql/mysql%E7%B4%A2%E5%BC%95.html",title:"mysql 索引",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"日期索引失效",slug:"日期索引失效",children:[]}],filePathRelative:"justnote/中间件/Mysql/mysql索引.md",git:{updatedTime:null}}},7227:(s,a,n)=>{n.r(a),n.d(a,{default:()=>t});const e=(0,n(6252).uE)('<h1 id="mysql-索引" tabindex="-1"><a class="header-anchor" href="#mysql-索引" aria-hidden="true">#</a> mysql 索引</h1><h2 id="日期索引失效" tabindex="-1"><a class="header-anchor" href="#日期索引失效" aria-hidden="true">#</a> 日期索引失效</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">explain</span> \n<span class="token keyword">SELECT</span>         id<span class="token punctuation">,</span>         msg_no <span class="token keyword">AS</span> msgNo<span class="token punctuation">,</span>         keyword_id <span class="token keyword">AS</span> keywordId<span class="token punctuation">,</span>         keyword<span class="token punctuation">,</span>         alarm_type <span class="token keyword">AS</span> alarmType<span class="token punctuation">,</span>         sms<span class="token punctuation">,</span>         mail_content <span class="token keyword">AS</span> mailContent<span class="token punctuation">,</span>         send_time <span class="token keyword">AS</span> sendTime<span class="token punctuation">,</span>         mobile<span class="token punctuation">,</span>         mail_address <span class="token keyword">AS</span> mailAddress<span class="token punctuation">,</span>         src_ip <span class="token keyword">AS</span> srcIp<span class="token punctuation">,</span>         msg_status <span class="token keyword">AS</span> msgStatus<span class="token punctuation">,</span>         create_emp <span class="token keyword">AS</span> createEmp<span class="token punctuation">,</span>         create_time <span class="token keyword">AS</span> createTime<span class="token punctuation">,</span>         modify_emp <span class="token keyword">AS</span> modifyEmp<span class="token punctuation">,</span>         modify_time <span class="token keyword">AS</span> modifyTime<span class="token punctuation">,</span>         project_name <span class="token keyword">AS</span> projectName<span class="token punctuation">,</span>         alarm_task_class <span class="token keyword">AS</span> alarmTaskClass<span class="token punctuation">,</span>         delivery_time <span class="token keyword">AS</span> deliveryTime<span class="token punctuation">,</span>         member_id <span class="token keyword">AS</span> memberId<span class="token punctuation">,</span>         apns_type <span class="token keyword">AS</span> apnsType<span class="token punctuation">,</span>         url <span class="token keyword">AS</span> url<span class="token punctuation">,</span>         order_id <span class="token keyword">AS</span> orderId        <span class="token keyword">FROM</span>           t_alarm_msg            <span class="token keyword">WHERE</span>           msg_status <span class="token operator">=</span> <span class="token number">1</span>          <span class="token operator">AND</span> create_time <span class="token operator">&lt;=</span> <span class="token string">&#39;2020-03-26 09:30:00.024&#39;</span>          <span class="token operator">AND</span> create_time <span class="token operator">&gt;=</span> <span class="token string">&#39;2020-03-23 09:40:00.024&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',3),t={render:function(s,a){return e}}}}]);