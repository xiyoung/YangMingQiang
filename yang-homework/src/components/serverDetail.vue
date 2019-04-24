<template>
    <div class="server-wrap">
      <ul>
        <li v-for="(item, index) in serverLists" class="server-detail-wrap clear" :class="{server_detail__wrap_deny: item.isDeny}" :key="index" >
          <div class="icon"></div>
          <div class="detail">
            <div class="about-wrap ellipsis"><span class="domain">{{item.domain}}</span><span class="split">{{item.state}}</span><span class="split">{{item.ip}}</span><span class="split">{{item.directory}}</span></div>
            <div class="resource-wrap clear">
              <div class="add-action"><span class="add-icon">+ </span><a href="" class="add-text">Specify Resource</a>Resources: </div>
              <div class="resource-list">
                <ul class="clear">
                  <li class="resource" v-for="(resource, index) in item.resources" :key="index"><span>{{resource}}</span><i>*</i></li>
                </ul>
              </div>
            </div>
            <div class="deny" v-if="item.isDeny"><span>-</span><a href="" >Deny</a></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    serverLists: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.server-wrap {
  .server_detail__wrap_deny.li {
    background-color: #fffbb9;
  }
  .server-detail-wrap{
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
        .domain {
          padding-right: 26px;
          font-weight: bold;
        }
        .split {
          height: 6px;
          padding: 0 6px;
          border-left: 2px solid #92a3a5;
        }
      }
      .resource-wrap {
        .add-action
         {
          float: left;
          width: 218px;
          font-size: 14px;
          .add-icon {
            font-weight: bold;
            cursor: pointer;
          }
          .add-text {
            margin-right: 5px;
            padding-right: 5px;
            border-right: 2px solid #92a3a5;
          }
        };
        .resource-list {
          padding-left: 218px;
          font-size: 14px;
          .resource {
            float: left;
            padding-right: 20px;
          }
        }
      }
    };
    .deny {
      position: absolute;
      right: -52px;
      top: 17px;
    }
  }
}
</style>
