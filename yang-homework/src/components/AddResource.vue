<template>
    <div class="add-resource-wrap" v-show="isShow">
        <div class="triangle">
          <div class="child"></div>
        </div>
        <div class="input-wrap">
          <p>(separate multiple resources name with commas)</p>
          <div><input ref="inputResource" v-model="addedResources" type="text"></div>
          <div class="button-wrap"><button @click="addResource" class="btn-add">Add resources</button><button @click="closeResourceDialog" class="btn-close">Close</button></div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      addedResources: ''
    }
  },
  methods: {
    closeResourceDialog () {
      this.$emit('update:isShow', false)
    },
    addResource () {
      if (!this.addedResources) {
        return
      }
      const addedResources = this.addedResources.split(',').map(item => item.trim())
      this.$emit('handleAddResource', {addedResources, index: this.index})
      this.$emit('update:isShow', false)
      this.addedResources = ''
    }
  },
  watch: {
    isShow (show, oldshow) {
      if (show) {
        this.$nextTick(() => {
          this.$refs.inputResource.focus()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-resource-wrap {
  .triangle {
    position: relative;
    width: 0px;
    height: 0px;
    margin-left: 40px;
    border-width: 0 20px 20px;
    border-style: solid;
    border-color: transparent transparent #553c00;
    .child {
      width: 0px;
      height: 0px;
      border-width:0 19px 19px;
      border-style:solid;
      border-color:transparent transparent #e0edd3;
      position: absolute;
      left: -19px;
      bottom: -22px;
    }
  }
  .input-wrap {
    border: 2px solid #553c00;
    padding: 8px;
    border-radius: 20px;
    background-color: #e0edd3;
    input {
      width: 600px;
      height: 18px;
      margin: 10px 0;
      border-color: #747474;
    }
    .button-wrap {
      button {
        margin-right: 10px;
        padding: 6px 14px;
        border: 1px solid $border;
        border-radius: 15px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
