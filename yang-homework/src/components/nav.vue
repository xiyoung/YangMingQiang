<template>
    <div class="nav-wrap clear">
        <ul @click="toggle">
            <li v-for="(item, index) in navLists" :data-index="index" :class="{active: activedIndex === index}" :style="selfStyle(index)" :key="index" >{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'cruiseNav',
  props: {
    navLists: {
      type: Array,
      required: true
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    activedBgColor: {
      type: String,
      default: '#606060'
    }
  },
  data () {
    return {
      activedIndex: 0
    }
  },
  methods: {
    toggle (e) {
      if (e.target.nodeName.toLowerCase() === 'li') {
        this.activedIndex = parseInt(e.target.dataset.index)
      }
    },
    selfStyle (index) {
      let selfStyle = {
        backgroundColor: this.bgColor
      }
      if (index === this.activedIndex) {
        selfStyle = {
          paddingTop: '11px',
          color: '#fff',
          backgroundColor: this.activedBgColor
        }
      }
      return selfStyle
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrap {
    li {
      display: inline-block;
      bottom: 0;
      margin-left: 4px;
      padding: 8px 15px 4px 15px;
      border: 4px solid $border;
      border-radius: 14px 12px 0 0;
      cursor: pointer;
    }
    li:after {
      content: "";
      display: block;
      width: calc(100% + 30px);
      position: relative;
      left: -15px;
      top: 8px;
      height: 4px;
      background-color: $border;
    }
    li.active:after {
      background-color: #606060;
    }
}
</style>
