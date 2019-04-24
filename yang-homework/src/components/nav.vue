<template>
    <div class="nav-wrap clear">
        <ul @click="toggle">
            <li v-for="(item, index) in navLists" :data-index="index" :style="selfStyle(index)" :key="index" >{{item.title}}</li>
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
      this.activedIndex = parseInt(e.target.dataset.index)
    },
    selfStyle (index) {
      let selfStyle = {
        backgroundColor: this.bgColor
      }
      if (index === this.activedIndex) {
        selfStyle = {
          paddingTop: '11px',
          borderBottomColor: 'transparent',
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
      border-bottom-color: transparent;
      display: inline-block;
      bottom: 0;
      margin-left: 4px;
      padding: 8px 15px;
      border: 3px solid $border;
      border-radius: 14px 12px 0 0;
      cursor: pointer;
    }
}
</style>
