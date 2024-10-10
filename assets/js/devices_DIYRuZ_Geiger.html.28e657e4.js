"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[69293],{73868:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>n});var i=o(1768);const a={},d=(0,o(69420).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"diyruz-diyruz-geiger",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#diyruz-diyruz-geiger"},[(0,i.Lk)("span",null,"DIYRuZ DIYRuZ_Geiger")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"DIYRuZ_Geiger")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=DIYRuZ"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("DIYRuZ")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"DiY Geiger counter")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"action, radioactive_events_per_minute, radiation_dose_per_hour, led_feedback, buzzer_feedback, alert_threshold, sensors_type, sensors_count, sensitivity, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIYRuZ_Geiger.png",alt:"DIYRuZ DIYRuZ_Geiger"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://modkam.ru/?p=1591" target="_blank" rel="noopener noreferrer">DiY Geiger counter</a></p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="radioactive-events-per-minute-numeric" tabindex="-1"><a class="header-anchor" href="#radioactive-events-per-minute-numeric"><span>Radioactive events per minute (numeric)</span></a></h3><p>Current count radioactive pulses per minute. Value can be found in the published state on the <code>radioactive_events_per_minute</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>rpm</code>.</p><h3 id="radiation-dose-per-hour-numeric" tabindex="-1"><a class="header-anchor" href="#radiation-dose-per-hour-numeric"><span>Radiation dose per hour (numeric)</span></a></h3><p>Current radiation level. Value can be found in the published state on the <code>radiation_dose_per_hour</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>μR/h</code>.</p><h3 id="led-feedback-binary" tabindex="-1"><a class="header-anchor" href="#led-feedback-binary"><span>Led feedback (binary)</span></a></h3><p>Enable LED feedback. Value can be found in the published state on the <code>led_feedback</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_feedback&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_feedback&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led feedback is ON, if <code>OFF</code> OFF.</p><h3 id="buzzer-feedback-binary" tabindex="-1"><a class="header-anchor" href="#buzzer-feedback-binary"><span>Buzzer feedback (binary)</span></a></h3><p>Enable buzzer feedback. Value can be found in the published state on the <code>buzzer_feedback</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;buzzer_feedback&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;buzzer_feedback&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> buzzer feedback is ON, if <code>OFF</code> OFF.</p><h3 id="alert-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#alert-threshold-numeric"><span>Alert threshold (numeric)</span></a></h3><p>Critical radiation level. Value can be found in the published state on the <code>alert_threshold</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alert_threshold&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alert_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>. The unit of this value is <code>μR/h</code>.</p><h3 id="sensors-type-enum" tabindex="-1"><a class="header-anchor" href="#sensors-type-enum"><span>Sensors type (enum)</span></a></h3><p>Type of installed tubes. Value can be found in the published state on the <code>sensors_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensors_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensors_type&quot;: NEW_VALUE}</code>. The possible values are: <code>СБМ-20/СТС-5/BOI-33</code>, <code>СБМ-19/СТС-6</code>, <code>Others</code>.</p><h3 id="sensors-count-numeric" tabindex="-1"><a class="header-anchor" href="#sensors-count-numeric"><span>Sensors count (numeric)</span></a></h3><p>Count of installed tubes. Value can be found in the published state on the <code>sensors_count</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensors_count&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensors_count&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50</code>.</p><h3 id="sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#sensitivity-numeric"><span>Sensitivity (numeric)</span></a></h3><p>This is applicable if tubes type is set to other. Value can be found in the published state on the <code>sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23))])}]]),n=JSON.parse('{"path":"/devices/DIYRuZ_Geiger.html","title":"DIYRuZ DIYRuZ_Geiger control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"DIYRuZ DIYRuZ_Geiger control via MQTT","description":"Integrate your DIYRuZ DIYRuZ_Geiger via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Radioactive events per minute (numeric)","slug":"radioactive-events-per-minute-numeric","link":"#radioactive-events-per-minute-numeric","children":[]},{"level":3,"title":"Radiation dose per hour (numeric)","slug":"radiation-dose-per-hour-numeric","link":"#radiation-dose-per-hour-numeric","children":[]},{"level":3,"title":"Led feedback (binary)","slug":"led-feedback-binary","link":"#led-feedback-binary","children":[]},{"level":3,"title":"Buzzer feedback (binary)","slug":"buzzer-feedback-binary","link":"#buzzer-feedback-binary","children":[]},{"level":3,"title":"Alert threshold (numeric)","slug":"alert-threshold-numeric","link":"#alert-threshold-numeric","children":[]},{"level":3,"title":"Sensors type (enum)","slug":"sensors-type-enum","link":"#sensors-type-enum","children":[]},{"level":3,"title":"Sensors count (numeric)","slug":"sensors-count-numeric","link":"#sensors-count-numeric","children":[]},{"level":3,"title":"Sensitivity (numeric)","slug":"sensitivity-numeric","link":"#sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728594421000},"filePathRelative":"devices/DIYRuZ_Geiger.md"}')}}]);