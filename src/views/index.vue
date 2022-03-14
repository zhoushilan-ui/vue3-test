<template>
  <div class="app-container">
    <!-- <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in option"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @change="handleChange"
      >
      </el-option>
    </el-select> -->
    <div id="typed"></div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
      class="xingkong"
    ></vue-particles>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Typed from "typed.js";

var figlet = require("figlet");
ss();

onMounted(() => {
  new Typed("#typed", {
    strings: [
      `游中华文化的千里长河，诗词是璀璨的星辰、飞舞的精灵，在岁月的风干下妥帖成一帧帧水墨画，余韵悠长，历久弥新。<br>
         我想文化若是开在源头活水的繁华，那么诗便是这伊人的华露，凝结幽幽冷香，滋润淡淡流年。<br>
         诗，是一位别致的东方美人，静卧在长卷丹青，两弯似蹙非蹙罥烟眉，一双似喜非喜含情目。<br>
         她是含蓄、是优雅、是离愁、是恬静、是明艳、是沉淀在深潭下的梦幻与朦胧。<br>
         正是这“烟笼寒水月笼沙”的缥缈美感，引得多少才子佳人竞相追求——‘为人性僻耽佳句，语不惊人死不休’。<br>
         我素爱诗，每每翻开诗书的扉页，入眸便是几句“被酒莫惊春睡重，赌书消得泼茶香，当时只道是寻常”。<br>
         仿佛看到词人独自感伤，回忆往昔的景象。翻开目录，又是许多熟悉的名字。<br>
         那一瞬，在窸窣的呼吸间，时光逆游而上。我走进、走近曾经辉煌的王朝，走近繁华的故乡，走近诗人的青丝与华发。<br>
         我看“无可奈何花落去，似曾相识燕归来”的岁月流转；我瞧“闲看庭前花开花落，漫随天外云卷云舒”的悠然闲适；<br>
         我听“嘈嘈切切错杂弹，大珠小珠落玉盘”的江外之声；我守“浊酒一杯家万里，燕然未勒归无计”的思家之人。<br>
         诗歌的美，安抚了我每夜不甘寂寞的心。<br>
         若能低声浅吟醉人心肠的诗句，时而淡雅又时而忧伤，取其精华又去其糟粕，学而无憾。<br>
         若说诗是盛世的繁华（花），那么诗人就是以笔为旗的战士，他们那侠客般的一生令后人心神向往——或徜徉在竹林，闲来漫步听风雨，<br>
         料峭春风扑面香；或卧坐在花间，醉意阑珊邀明月，举杯对影成三人。<br>
         最慕天外李青莲狂傲不羁、潇洒恣意、绣口一吐就是半个盛唐；最喜圣贤苏东坡书才华横溢，谈笑自如，尝尽百味仍悦人间清欢。<br>
         这时，诗成了一种精神、一种立场、一种价值观、一种生活，然后才是文学。某种程度上，现代人重拾起对诗歌的喜爱有何尝不是重拾起对生活的理想呢？<br>
         因为有诗，我们知道险滩过后，大江横流；越过沟壑，必有高峰；云层之上，就是阳光。<br>
         远方尽在诗意里，似花似月似繁华。热爱诗吧，就是热爱你自己，热爱这个世界；高唱诗吧，就是高唱生命，高唱你我的未来！`,
    ],
    startDelay: 0,
    typeSpeed: 120,
    loop: false,
    loopCount: Infinity,
  });
});
function ss() {
  const arr = ["node", "javascript", "hello", "world"];
  const options = [
    {
      op1: {
        horizontalLayout: "default",
        verticalLayout: "default",
        font: "3D Diagonal",
        width: 40,
        whitespaceBreak: false,
      },
    },
    {
      op2: {
        font: "Ghost",
        horizontalLayout: "full",
        verticalLayout: "default",
        width: 40,
        whitespaceBreak: false,
      },
    },
    {
      op3: {
        font: "Graffiti",
        horizontalLayout: "fitted",
        verticalLayout: "default",
        width: 40,
        whitespaceBreak: false,
      },
    },
    {
      op4: {
        font: "Standard",
        horizontalLayout: "fitted",
        verticalLayout: "fitted",
        width: 40,
        whitespaceBreak: false,
      },
    },
  ];

  function example(items, index) {
    options.forEach(function (item_, index_) {
      if (index === index_) {
        console.log(item_);
        console.log(items);
        figlet(items, item_, function (err, data) {
          if (err) {
            console.log(1);
            console.log(err);
            return err;
          }
          console.log(2);
          console.log(data);
        });
      }
    });
  }
  arr.forEach(example);
}
</script>

<style lang="scss" scoped>
.app-container {
  background-color: aquamarine;
  position: relative;
  #typed {
    width: 450px;
    color: #fff;
    z-index: 2000;
    position: absolute;
    right: 10px;
  }

  .m-2 {
    z-index: 2000;
    position: absolute;
    left: 10px;
  }
  .xingkong {
    background-image: url("../assets/images/xing.jpg");
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1000;
  }
}
</style>
