<template>
  <div
    style="
      cursor: pointer;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 15px;
    "
    @click="onClicked($event)"
  >
    <b-row>
      <b-col cols="7">
        <b-row>
          <b-col>
            <h4>{{ name }}</h4>
          </b-col>
        </b-row>
        <!-- <b-row>
          <b-col>sdaklfjasdf</b-col>
        </b-row> -->
        <b-row>
          <b-col>{{ cost }}원</b-col>
        </b-row>
      </b-col>
      <b-col cols="5">
        <div
          style="
            height: 120px;
            width: 120px;
            background-position: center;
            background-size: cover;
            border-radius: 15px;
          "
          v-bind:style="{ 'background-image': 'url(' + url + ')' }"
        ></div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FoodListItem",

  props: {
    name: String,
    cost: String,
    url: String,
  },

  methods: {
    onClicked(event: any) {
      console.log("eve", event, this.$el);
      this.$emit("onClicked", {
        name: this.name,
        cost: this.cost,
        url: this.url,
        el: this.$el,
      });
    },
  },

  mounted() {
    this.$el.addEventListener("transitionend", () => {
      console.log("end");
      this.$emit("transitionend");
    });
  },
});
</script>

<style scoped></style>
