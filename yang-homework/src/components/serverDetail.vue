<template>
    <div class="server-wrap clear" :class="{server_detail_wrap_deny: !isDeny}">
      <div class="icon"></div>
      <div class="detail">
        <div class="about-wrap ellipsis"><span class="domain">{{domain}}</span><span class="split state">{{state}}</span><span class="split ip">{{ip}}</span><span class="split directory">{{directory}}</span></div>
        <div class="resource-wrap clear">
          <div class="add-action"><span class="add-action-text" @click="toggleResourceDialog"><svg-icon class="icon-add" icon-class="add"/><a class="add-text">Specify Resource</a></span>Resources: </div>
          <div class="resource-list">
            <ul class="clear">
              <li class="resource" v-for="(resource, i) in resources" :key="i"><span>{{resource}}</span><span class="delete-icon-wrap" @click="deleteResource(index, i)"><svg-icon class="icon-delete" icon-class="delete"/></span></li>
            </ul>
          </div>
        </div>
        <div class="deny" v-if="isDeny"><svg-icon class="icon-deny" icon-class="deny"/><span class="deny-text">Deny</span></div>
        <cruise-add-resource v-on="$listeners" :index="index" v-bind:isShow.sync="showAddResourceDialog" class="add-resource-dialog-wrap"></cruise-add-resource>
      </div>
    </div>
</template>

<script>
import cruiseAddResource from '@/components/AddResource.vue'
import svgIcon from '@/components/SvgIcon'

export default {
  components: {
    cruiseAddResource,
    svgIcon
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    domain: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    ip: {
      type: String,
      required: true
    },
    directory: {
      type: String,
      required: true
    },
    isDeny: {
      type: Boolean,
      default: false
    },
    resources: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      showAddResourceDialog: false
    }
  },
  methods: {
    toggleResourceDialog () {
      this.showAddResourceDialog = true
    },
    deleteResource (index, i) {
      this.$emit('handleDeleteResource', {index, i})
    }
  }
}
</script>

<style lang="scss" scoped>
.server-wrap {
  margin-top: 18px;
  padding: 8px 70px 8px 18px;
  border: 2px solid #444;
  border-radius: 10px;
  background-color: #cce8b5;
  .icon {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #929292;
  }
  .detail {
    position: relative;
    padding-left: 68px;
    .about-wrap {
      line-height: 26px;
      .domain {
        padding-right: 26px;
        font-weight: bold;
      }
      .split {
        height: 6px;
        padding: 0 6px;
        border-left: 2px solid #92a3a5;
        font-weight: bold;
        font-size: 14px;
      }
    }
    .resource-wrap {
      .add-action {
        float: left;
        width: 205px;
        font-size: 14px;
        .icon-add {
          cursor: pointer;
        }
        .add-text {
          margin-right: 5px;
          padding-right: 5px;
          border-right: 2px solid #92a3a5;
          color: #000
        }
      };
      .resource-list {
        padding-left: 205px;
        font-size: 14px;
        .resource {
          float: left;
          padding-right: 20px;
          .icon-delete {
            color: #92a3a5;
            font-weight: bold;
            font-size: 18px;
            cursor: pointer;
          }
        }
      }
    }
  };
  .deny {
    position: absolute;
    right: -52px;
    top: 24px;
    .icon-deny {
      width: 20px;
      height: 20px;
      vertical-align: bottom;
    };
    .deny-text {
      vertical-align: bottom;
      text-decoration: underline;
      color: #000;
    }
  }
  .add-resource-dialog-wrap {
    position: absolute;
    z-index: 10;
  }
}
.server_detail_wrap_deny {
  background-color: #fffbb9;
}
</style>
