import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as s,a}from"./app-24YcbuIj.js";const d="/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/Set-key-value.png",n="/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/get-key-value.png",c="/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/HSET-key-value.png",o="/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/HGETALL.png",r="/assets/images/Redis/Redis-Basic-Use(Structure-Storage)/HGET.png",l={},t=a(`<h1 id="redis-简单使用-数据结构存储" tabindex="-1"><a class="header-anchor" href="#redis-简单使用-数据结构存储" aria-hidden="true">#</a> Redis 简单使用（数据结构存储）</h1><p>通过命令行连接到Redis之后，就可以用Redis来存储和读取数据。</p><blockquote><p>这里使用命令行的方式来操作。方便理解学习Reids。之后可以使用图形化界面来操作。</p></blockquote><h2 id="一、存储字符串" tabindex="-1"><a class="header-anchor" href="#一、存储字符串" aria-hidden="true">#</a> 一、存储字符串</h2><p>Redis中存储数据为键值对的模式，前面是key，后面是value。</p><p>Redis 字符串存储字节序列。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存储了一个键为bike:1，值为 Process 134 的键值对。</span>
SET bike:1 <span class="token string">&quot;Process 134&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="设置值" tabindex="0" loading="lazy"><figcaption>设置值</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 读取键为 bike:1 的值</span>
GET bike:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+n+'" alt="读取值" tabindex="0" loading="lazy"><figcaption>读取值</figcaption></figure><h2 id="二、存储对象" tabindex="-1"><a class="header-anchor" href="#二、存储对象" aria-hidden="true">#</a> 二、存储对象</h2><p>除了这种单独的键值对，Redis还可以存储和访问对象类型。</p><p>Reids中存储对象使用哈希表的方式来存储，和直接的存储字符串不同，是使用 <code>HSET</code>来存储。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>HSET bike:1 model Deimos brand Ergonom <span class="token builtin class-name">type</span> <span class="token string">&#39;Enduro bikes&#39;</span> price <span class="token number">4972</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令运行之前，需要将上次一存储的<code>bike:1</code>这条数据先删除，否则会报错。</p><p>这条命令的分析如下：</p><ul><li><code>HSET</code>表示这是一个使用散列表存储的命令；</li><li><code>bike:1</code>表示这条存储所对应的键；</li><li>后面的数据为两两一组： <ul><li><code>model Deimos</code>：key为<code>model</code>, value为<code>Deimos</code></li><li><code>brand Ergonom</code>：key为<code>brand</code>, value为<code>Ergonom</code></li><li><code>type &#39;Enduro bikes&#39;</code>：key为``type<code>, value为</code>&#39;Enduro bikes&#39;`</li><li><code>price 4972</code>：key为``price<code>, value为</code>4972`</li></ul></li></ul><figure><img src="'+c+`" alt="存储对象" tabindex="0" loading="lazy"><figcaption>存储对象</figcaption></figure><p>相对的，读取这些数据的时候需要使用的命令为<code>HGET</code>，或 <code>HGETALL</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>HGETALL bike:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>HGETALL</code>是读取所有的数据，将所有的数据都获取出来：</p><figure><img src="`+o+`" alt="获取所有" tabindex="0" loading="lazy"><figcaption>获取所有</figcaption></figure><p>如果是要读取对应值的数据，则需要这样输入命令（在后面加上需要读取的key的名称）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>HGET bike:1 model
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="获取对象单独的数据" tabindex="0" loading="lazy"><figcaption>获取对象单独的数据</figcaption></figure>',25),u=[t];function p(g,m){return i(),s("div",null,u)}const h=e(l,[["render",p],["__file","Redis简单使用（数据结构存储）.html.vue"]]);export{h as default};
