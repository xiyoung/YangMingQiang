<template>
    <div class="wrap">
      <ul @click="toggle">
          <li v-for="(item, index) in navLists" :data-index="index" :style="index !== 0 && selfStyle(index)" :class="{title: index === 0, category: index !== 0}" :key="index" >{{item.title}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'cruiseChildNav',
  props: {
    navLists: {
      type: Array,
      required: true
    },
    bgColor: {
      type: String,
      default: '#999'
    },
    activedBgColor: {
      type: String,
      default: '#ddd'
    }
  },
  data () {
    return {
      activedIndex: 1
    }
  },
  methods: {
    toggle (e) {
      const index = parseInt(e.target.dataset.index)
      if (e.target.nodeName.toLowerCase() === 'li' && index !== 0) {
        this.activedIndex = index
      }
    },
    selfStyle (index) {
      const backgroundColor = index === this.activedIndex ? this.activedBgColor : this.bgColor
      return {
        backgroundColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-nav {
  .title,
  .category {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
  }
  .title {
      color: #ebebeb;
  }
  .category {
    box-sizing: border-box;
    display: inline-block;
    height: 28px;
    min-width: 76px;
    line-height: 28px;
    text-align: center;
    border: 1px solid $border;
    border-radius: 14px;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>
