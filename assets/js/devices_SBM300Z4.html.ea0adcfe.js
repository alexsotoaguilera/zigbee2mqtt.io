"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2363],{49025:(t,e,o)=>{o.r(e),o.d(e,{comp:()=>d,data:()=>n});var i=o(1768);const a={},d=(0,o(69420).A)(a,[["render",function(t,e){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[e[8]||(e[8]=(0,i.Lk)("h1",{id:"shinasystem-sbm300z4",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#shinasystem-sbm300z4"},[(0,i.Lk)("span",null,"ShinaSystem SBM300Z4")])],-1)),(0,i.Lk)("table",null,[e[6]||(e[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[e[2]||(e[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"SBM300Z4")],-1)),(0,i.Lk)("tr",null,[e[1]||(e[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=ShinaSystem"},{default:(0,i.k6)((()=>e[0]||(e[0]=[(0,i.eW)("ShinaSystem")]))),_:1})])]),e[3]||(e[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"SiHAS IOT smart switch 4 gang")],-1)),e[4]||(e[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), linkquality")],-1)),e[5]||(e[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SBM300Z4.png",alt:"ShinaSystem SBM300Z4"})])],-1))])]),e[9]||(e[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>e[7]||(e[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),e[10]||(e[10]=(0,i.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-top-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-left-endpoint"><span>Switch (top_left endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_top_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_left&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-bottom-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-left-endpoint"><span>Switch (bottom_left endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_bottom_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-top-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-right-endpoint"><span>Switch (top_right endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_top_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_right&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-bottom-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-right-endpoint"><span>Switch (bottom_right endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_bottom_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-3" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-3"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20))])}]]),n=JSON.parse('{"path":"/devices/SBM300Z4.html","title":"ShinaSystem SBM300Z4 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ShinaSystem SBM300Z4 control via MQTT","description":"Integrate your ShinaSystem SBM300Z4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (top_left endpoint)","slug":"switch-top-left-endpoint","link":"#switch-top-left-endpoint","children":[]},{"level":3,"title":"Switch (bottom_left endpoint)","slug":"switch-bottom-left-endpoint","link":"#switch-bottom-left-endpoint","children":[]},{"level":3,"title":"Switch (top_right endpoint)","slug":"switch-top-right-endpoint","link":"#switch-top-right-endpoint","children":[]},{"level":3,"title":"Switch (bottom_right endpoint)","slug":"switch-bottom-right-endpoint","link":"#switch-bottom-right-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728594421000},"filePathRelative":"devices/SBM300Z4.md"}')}}]);