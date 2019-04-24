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
            <div class="content-left">
              <server-detail :serverLists="serverLists"></server-detail>
            </div>
            <div class="content-right">
              <h4 class="title">Summary</h4>
              <div class="line"></div>
              <ul class="summary-list">
                <li v-for="(stateCount, stateName) in requiresummary" :key="stateName"><span class="text">{{stateName}}</span><span>{{stateCount}}</span></li>
              </ul>
              <h4 class="title">History</h4>
              <div class="line"></div>
              <ul class="history-list ellipsis">
                <li v-for="item in history" :key="item">
                  <span class="text">{{item}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>Copyright: Thoughtworks Inc.</p>
    </div>
</template>

<script>
import cruiseNav from '@/components/nav.vue'
import cruiseChildNav from '@/components/childNav.vue'
import serverDetail from '@/components/serverDetail.vue'

export default {
  components: {
    cruiseNav,
    cruiseChildNav,
    serverDetail
  },
  data () {
    return {
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
      serverLists: [
        {
          domain: 'bgstdmngbgr02.thoughtworks.com',
          state: 'idle',
          ip: '192.168.1.2',
          directory: '/var/lib/cruise-agent',
          isDeny: true,
          resources: ['ubuntu', 'firefox3', 'core-due', 'mysql']
        },
        {
          domain: 'bgstdmngbgr02.thoughtworks.com',
          state: 'idle',
          ip: '192.168.1.2',
          directory: '/var/lib/cruise-agent',
          isDeny: false,
          resources: ['ubuntu', 'firefox3', 'core-due', 'mysql']
        },
        {
          domain: 'bgstdmngbgr02.thoughtworks.com',
          state: 'idle',
          ip: '192.168.1.2',
          directory: '/var/lib/cruise-agent',
          isDeny: true,
          resources: ['ubuntu', 'firefox3', 'core-due', 'mysql']
        },
        {
          domain: 'bgstdmngbgr02.thoughtworks.com',
          state: 'building',
          ip: '192.168.1.2',
          directory: '/var/lib/cruise-agent',
          isDeny: true,
          resources: ['ubuntu', 'firefox3', 'core-due', 'mysql']
        }
      ],
      history: [
        'bjstdmngbgr02/Acceptance_test',
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
  }
}
</script>

<style lang="scss" scoped>
    .page-wrap {
      background-color:bisque;
      a {
        text-decoration: underline;
      }
      li {
        list-style: none;
      }
    }
    .sign-wrap {
      .sign {
        float: right;
        .arrow-line {
          display: inline-block;
          width: 5px;
          height: 3px;
          background-color: black;
          vertical-align: middle;
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
        font-size: 36px;
        font-weight: normal;
        position: absolute;
        left: 0;
        right: 0
      }
      .nav-lists {
        float: right;
        padding-top: 20px;
      }
    }
    .main {
        width: 100%;
        background-color: $ele-bg;
        border: 3px solid $border;
        box-sizing: border-box;
        margin-top: -3px;
        .main-nav {
          padding: 12px 0;
          padding-left: 10px;
          background-color: #606060;
        }
        .main-content {
          .content-left {
            box-sizing: border-box;
            float: left;
            width: 76%;
            padding: 0 18px 18px 18px;
            // border-right: 1px solid $border;
          }
          .content-right {
            float: right;
            box-sizing: border-box;
            width: 24%;
            padding: 18px 8px 0 28px;
            border-left: 1px solid $border;
            background-color: rgb(69, 96, 126);
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
</style>
