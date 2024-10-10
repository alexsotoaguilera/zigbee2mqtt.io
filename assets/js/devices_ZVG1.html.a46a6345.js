"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30120],{14526:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>l,data:()=>c});var a=i(1768);const o={},l=(0,i(69420).A)(o,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"rtx-zvg1",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#rtx-zvg1"},[(0,a.Lk)("span",null,"RTX ZVG1")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZVG1")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=RTX"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("RTX")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee smart water valve")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), battery, weather_delay, timer_state, timer, timer_time_left, last_valve_open_duration, water_consumed, cycle_timer_1, cycle_timer_2, cycle_timer_3, cycle_timer_4, normal_schedule_timer_1, normal_schedule_timer_2, normal_schedule_timer_3, normal_schedule_timer_4, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZVG1.png",alt:"RTX ZVG1"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the button on the device for 3 seconds. After this the device will automatically join.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="weather-delay-enum" tabindex="-1"><a class="header-anchor" href="#weather-delay-enum"><span>Weather delay (enum)</span></a></h3><p>Value can be found in the published state on the <code>weather_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;weather_delay&quot;: NEW_VALUE}</code>. The possible values are: <code>disabled</code>, <code>24h</code>, <code>48h</code>, <code>72h</code>.</p><h3 id="timer-state-enum" tabindex="-1"><a class="header-anchor" href="#timer-state-enum"><span>Timer state (enum)</span></a></h3><p>Value can be found in the published state on the <code>timer_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>disabled</code>, <code>active</code>, <code>enabled</code>.</p><h3 id="timer-numeric" tabindex="-1"><a class="header-anchor" href="#timer-numeric"><span>Timer (numeric)</span></a></h3><p>Auto off after specific time. Value can be found in the published state on the <code>timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="timer-time-left-numeric" tabindex="-1"><a class="header-anchor" href="#timer-time-left-numeric"><span>Timer time left (numeric)</span></a></h3><p>Auto off timer time left. Value can be found in the published state on the <code>timer_time_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="last-valve-open-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-valve-open-duration-numeric"><span>Last valve open duration (numeric)</span></a></h3><p>Time the valve was open when state on. Value can be found in the published state on the <code>last_valve_open_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="water-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#water-consumed-numeric"><span>Water consumed (numeric)</span></a></h3><p>Liters of water consumed. Value can be found in the published state on the <code>water_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>L</code>.</p><h3 id="cycle-timer-1-text" tabindex="-1"><a class="header-anchor" href="#cycle-timer-1-text"><span>Cycle timer 1 (text)</span></a></h3><p>Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>cycle_timer_1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_timer_1&quot;: NEW_VALUE}</code>.</p><h3 id="cycle-timer-2-text" tabindex="-1"><a class="header-anchor" href="#cycle-timer-2-text"><span>Cycle timer 2 (text)</span></a></h3><p>Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>cycle_timer_2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_timer_2&quot;: NEW_VALUE}</code>.</p><h3 id="cycle-timer-3-text" tabindex="-1"><a class="header-anchor" href="#cycle-timer-3-text"><span>Cycle timer 3 (text)</span></a></h3><p>Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>cycle_timer_3</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_timer_3&quot;: NEW_VALUE}</code>.</p><h3 id="cycle-timer-4-text" tabindex="-1"><a class="header-anchor" href="#cycle-timer-4-text"><span>Cycle timer 4 (text)</span></a></h3><p>Format 08:00 / 20:00 / 15 / 60 / MoTuWeThFrSaSu / 1 (08:00 = start time 20:00 = end time 15 = irrigation duration in minutes 60 = pause duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>cycle_timer_4</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_timer_4&quot;: NEW_VALUE}</code>.</p><h3 id="normal-schedule-timer-1-text" tabindex="-1"><a class="header-anchor" href="#normal-schedule-timer-1-text"><span>Normal schedule timer 1 (text)</span></a></h3><p>Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>normal_schedule_timer_1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_schedule_timer_1&quot;: NEW_VALUE}</code>.</p><h3 id="normal-schedule-timer-2-text" tabindex="-1"><a class="header-anchor" href="#normal-schedule-timer-2-text"><span>Normal schedule timer 2 (text)</span></a></h3><p>Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>normal_schedule_timer_2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_schedule_timer_2&quot;: NEW_VALUE}</code>.</p><h3 id="normal-schedule-timer-3-text" tabindex="-1"><a class="header-anchor" href="#normal-schedule-timer-3-text"><span>Normal schedule timer 3 (text)</span></a></h3><p>Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>normal_schedule_timer_3</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_schedule_timer_3&quot;: NEW_VALUE}</code>.</p><h3 id="normal-schedule-timer-4-text" tabindex="-1"><a class="header-anchor" href="#normal-schedule-timer-4-text"><span>Normal schedule timer 4 (text)</span></a></h3><p>Format 08:00 / 15 / MoTuWeThFrSaSu / 1 (08:00 = start time 15 = duration in minutes MoTu..= active weekdays 1 = deactivate timer with 0). Value can be found in the published state on the <code>normal_schedule_timer_4</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;normal_schedule_timer_4&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',38))])}]]),c=JSON.parse('{"path":"/devices/ZVG1.html","title":"RTX ZVG1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"RTX ZVG1 control via MQTT","description":"Integrate your RTX ZVG1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Weather delay (enum)","slug":"weather-delay-enum","link":"#weather-delay-enum","children":[]},{"level":3,"title":"Timer state (enum)","slug":"timer-state-enum","link":"#timer-state-enum","children":[]},{"level":3,"title":"Timer (numeric)","slug":"timer-numeric","link":"#timer-numeric","children":[]},{"level":3,"title":"Timer time left (numeric)","slug":"timer-time-left-numeric","link":"#timer-time-left-numeric","children":[]},{"level":3,"title":"Last valve open duration (numeric)","slug":"last-valve-open-duration-numeric","link":"#last-valve-open-duration-numeric","children":[]},{"level":3,"title":"Water consumed (numeric)","slug":"water-consumed-numeric","link":"#water-consumed-numeric","children":[]},{"level":3,"title":"Cycle timer 1 (text)","slug":"cycle-timer-1-text","link":"#cycle-timer-1-text","children":[]},{"level":3,"title":"Cycle timer 2 (text)","slug":"cycle-timer-2-text","link":"#cycle-timer-2-text","children":[]},{"level":3,"title":"Cycle timer 3 (text)","slug":"cycle-timer-3-text","link":"#cycle-timer-3-text","children":[]},{"level":3,"title":"Cycle timer 4 (text)","slug":"cycle-timer-4-text","link":"#cycle-timer-4-text","children":[]},{"level":3,"title":"Normal schedule timer 1 (text)","slug":"normal-schedule-timer-1-text","link":"#normal-schedule-timer-1-text","children":[]},{"level":3,"title":"Normal schedule timer 2 (text)","slug":"normal-schedule-timer-2-text","link":"#normal-schedule-timer-2-text","children":[]},{"level":3,"title":"Normal schedule timer 3 (text)","slug":"normal-schedule-timer-3-text","link":"#normal-schedule-timer-3-text","children":[]},{"level":3,"title":"Normal schedule timer 4 (text)","slug":"normal-schedule-timer-4-text","link":"#normal-schedule-timer-4-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728594421000},"filePathRelative":"devices/ZVG1.md"}')}}]);