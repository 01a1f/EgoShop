<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>
        流量分析是“存量分析”的对称。对一定时期内经济体系中各种经济总量的变动及其相互影响进行的分析。
        流量是经济变量在一定时期中变动的数量，它必须按同一时期进行测算。在宏观经济体系中，总收入、总投资、
        总消费、总储蓄等都是流量。这些流量的变动直接制约着国民收入水平和社会就业水平，直接影响着社会经济的波动和增长，
        因此流量分析在经济分析中占有重要的地位。
      </p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line-left">购买数量</div>
      <div class="sales-board-line-right">
        <Counter :counterObj="counterObj" />
      </div>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line-left">产品类型</div>
      <div class="sales-board-line-right">
        <Tyeps :selecterData="selecterData" />
      </div>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line-left">有效时间</div>
      <div class="sales-board-line-right">
        <Timer :timerData="timerData"/>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>
        网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据
      </p>

      <h3>用户行为指标</h3>
      <ul>
        <li>
          用户行为指标主要反应用户时如何来到网站的、在网站上停留了多长时间。
        </li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时间段的用户访问量情况等。</li>
      </ul>

      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率模式</li>
        <li>用户使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布情况等</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Counter from "../../../components/HomePage/Counter.vue";
import Tyeps from "../../../components/HomePage/Tyeps.vue";
import Timer from "../../../components/HomePage/Timer.vue";
export default {
  data() {
    return {
      counterObj: {
        min: 1,
        max: 20,
      },
      selecterData: [
        {
          value: "经典型",
          id: 0,
        },
        {
          value: "豪华型",
          id: 1,
        },
        {
          value: "致臻型",
          id: 2,
        },
        {
          value: "无敌型",
          id: 3,
        },
      ],
      timerData: [
        {
          value: "一个月",
          id: 1,
        },
        {
          value: "三个月",
          id: 3,
        },
        {
          value: "六个月",
          id: 6,
        },
        {
          value: "九个月",
          id: 9,
        },
      ],
    };
  },
  components: {
    Counter,
    Tyeps,
    Timer,
  },
};
</script>

<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>