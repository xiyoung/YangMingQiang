<template>
    <div class="page-wrap">
        <header class="sign-wrap clear">
          <p class="sign">Signed in as <a>Member</a><i class="arrow-line"></i><i class="arrow"></i><a>Sign out</a></p>
        </header>
        <div class="nav-wrap clear">
          <h2 class="title">Cruise</h2>
          <cruise-nav :navLists="navLists" class="nav-lists clear"></cruise-nav>
        </div>
        <div class="main">
          <cruiseChildNav :navLists="childNavLists" class="main-nav"></cruiseChildNav>
          <div class="main-content clear">
            <div ref="contentLeft" :class="{take_height_left: takeHeight === 'left'}" class="content-left" v-if="serverLists.length">
              <cruise-server-detail v-for="(item, index) in serverLists"
              v-on:handleAddResource="handleAddResource"
              v-on:handleDeleteResource="handleDeleteResource"
              :index="index"
              v-bind="item"
              :key="index"></cruise-server-detail>
            </div>
            <div ref="contentRight" :class="{take_height_right: takeHeight === 'right'}" class="content-right">
              <h4 class="title">Summary</h4>
              <div class="line"></div>
              <ul class="summary-list">
                <li v-for="(stateCount, stateName) in requiresummary" :key="stateName"><span class="text">{{stateName}}</span><span>{{stateCount}}</span></li>
              </ul>
              <h4 class="title">History</h4>
              <div class="line"></div>
              <ul class="history-list">
                <li v-for="(item,index) in history" :key="index" class="ellipsis">
                  <span class="text">{{item}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="copyright">Copyright: Thoughtworks Inc.</p>
    </div>
</template>

<script>
import cruiseNav from '@/components/Nav.vue'
import cruiseChildNav from '@/components/ChildNav.vue'
import cruiseServerDetail from '@/components/ServerDetail.vue'

export default {
  components: {
    cruiseNav,
    cruiseChildNav,
    cruiseServerDetail
  },
  data () {
    return {
      takeHeight: '',
      navLists: [
        {title: 'DASHBOARD'},
        {title: 'MY CRUISE'},
        {title: 'AGENTS'},
        {title: 'HELP'}
      ],
      childNavLists: [
        {title: 'Agents'},
        {title: 'All'},
        {title: 'Physical'},
        {title: 'Virtual'}
      ],
      serverLists: [],
      history: [
        'bjstdmngbgr02/Acceptance_test',
        'bjstdmngbgr02/Acceptance_test',
        'bjstdmngbgr02/Acceptance_test',
        'bjstdmngbgr02/Acceptance_test',
        'bjstdmngbgr02/Acceptance_test',
        'bjstdmngbgr02/Acceptance_test',
        'bjstdmngbgr02/Acceptance_test'
      ]
    }
  },
  mounted () {
    this.initData().then(data => {
      this.serverLists = data
      this.$nextTick(() => {
        const lHeight = this.$refs.contentLeft.offsetHeight
        const rHeight = this.$refs.contentRight.offsetHeight
        this.takeHeight = lHeight > rHeight ? 'left' : 'right'
      })
    })
  },
  computed: {
    requiresummary () {
      if (!this.serverLists.length) return
      const states = {}
      for (let server of this.serverLists) {
        if (states[server.state]) {
          states[server.state]++
        } else {
          states[server.state] = 1
        }
      }
      return states
    }
  },
  methods: {
    handleAddResource ({addedResources, index}) {
      this.serverLists.splice(index, 1, {
        ...this.serverLists[index],
        resources: this.serverLists[index]['resources'].concat(addedResources)
      })
    },
    handleDeleteResource ({index, i}) {
      this.serverLists[index]['resources'].splice(i, 1)
    },
    initData () {
      const self = this
      return self.$http.get('static/initdata.txt').then(res => {
        try {
          const initStr = self.transferString(res.body).split('serverLists:')[1]
          const arr = JSON.parse(initStr)
          return arr
        } catch (error) {
          console.log(error)
          throw error
        }
      })
        .catch(() => {
          return []
        })
    },
    transferString (content) {
      let str
      try {
        str = content.replace(/\r\n/g, '').replace(/\n/g, '').replace(/\s*/g, '')
      } catch (e) {
        console.log(e.message)
      }
      return str
    }
  }
}
</script>

<style lang="scss" scoped>
    .page-wrap {
      background-color:#fff;
    }
    .sign-wrap {
      .sign {
        float: right;
        .arrow-line {
          display: inline-block;
          vertical-align: middle;
          width: 5px;
          height: 3px;
          margin-left: 20px;
          background-color: black;
        }
        .arrow {
          display: inline-block;
          border: 5px solid transparent;
          border-left: 12px solid black;
        }
      }
    }
    .nav-wrap {
      position: relative;
      .title {
        font-size: 48px;
        font-weight: normal;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px
      }
      .nav-lists {
        float: right;
        padding-top: 20px;
      }
    }
    .main {
        width: 100%;
        border: 4px solid $border;
        box-sizing: border-box;
        margin-top: -4px;
        .main-nav {
          padding: 12px 0;
          padding-left: 10px;
          border-bottom: 4px solid $border;
          background-color: #606060;
        }
        .main-content {
          div.take_height_left {
            border-right: 2px solid $border;
          }
          .content-left {
            box-sizing: border-box;
            float: left;
            width: 76%;
            padding: 0 18px 18px 18px;
          }
          div.take_height_right {
            border-left: 2px solid $border;
          }
          .content-right {
            float: right;
            box-sizing: border-box;
            width: 24%;
            padding: 18px 8px 0 28px;
            // border-left: 2px solid $border;
            .title {
              padding-bottom: 6px;
            }
            .line {
              padding: 1px 0;
              background-color: #d0d0d0;
            }
            .summary-list {
              padding-bottom: 14px;
              li {
                padding: 10px 0;
                .text {
                  display: inline-block;
                  width: 50%;
                }
              }
            };
            .history-list {
              li {
                padding: 9px 0;
              }
            }
          }
        }
    }
    .copyright {
      padding: 10px 0 20px 0;
      font-weight: bold;
      font-size: 12px;
    }
</style>
