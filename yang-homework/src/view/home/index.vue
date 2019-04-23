<template>
    <div class="page-wrap">
        <header class="sign-wrap clear">
          <p class="sign">Signed in as <a>Member</a><i class="arrow-line"></i><i class="arrow"></i><a>Sign out</a></p>
        </header>
        <div class="nav-wrap clear">
          <h2 class="title">Cruise</h2>
          <ul class="nav-lists clear">
            <li>DASHBOARD</li>
            <li>MY CRUISE</li>
            <li class="active">AGENTS</li>
            <li>HELP</li>
          </ul>
        </div>
        <div class="main">
          <div class="main-nav">
            <span class="title">Agents</span><span class="category">All</span><span class="category active">Physical</span><span class="category">Virtual</span>
          </div>
          <div class="main-content clear">
            <div class="content-left">
              <ul>
                <li class="server-detail-wrap clear">
                  <div class="icon"></div>
                  <div class="detail">
                    <div><span>bgstdmngbgr02.thoughtworks.com</span><span>|idle|192.168.1.2| /var/lib/cruise-agent</span></div>
                    <div class="resource-wrap clear">
                      <div class="add-action">+ <a href="">Specify Resource</a>| Resources: </div>
                      <div class="resource-list">
                        <ul class="clear">
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                          <li class="resource">ubuntu <i>*</i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
            <div class="content-right">
              <h5>Summary</h5>
              <div class="line"></div>
              <ul class="summary-list">
                <li><span class="text">building</span><span>2</span></li>
                <li><span class="text">idle</span><span>2</span></li>
              </ul>
              <h5>History</h5>
              <div class="line"></div>
              <ul class="history-list">
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
                <li><span class="text">bjstdmngbgr02/Acceptance_test</span></li>
              </ul>
            </div>
          </div>
        </div>
        <p>Copyright: Thoughtworks Inc.</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      home: 'home'
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
        li {
          float: left;
          padding: 5px;
          margin-left: 4px;
          border: 1px solid $border;
          border-radius: 14px 12px 0 0;
          background-color: rgb(59, 54, 54);
          bottom: 0;
        }
        background-color: rgb(85, 59, 59);
        li.active {
          background-color:rgb(73, 71, 68);
          // padding-bottom: 7px;
          color: #fff;
        }
      }
    }
    .main {
        width: 100%;
        background-color: $ele-bg;
        .main-nav {
          padding: 12px 0;
          padding-left: 10px;
          background-color: rgb(228, 144, 144);
          .title,
          .category {
            margin-left: 10px;
            vertical-align: middle;
          }
          .category {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            min-width: 68px;
            font-size: 12px;
            border: 1px solid $border;
            text-align: center;
            border-radius: 10px;
            background: rgb(83, 80, 80);
          }
          span.active {
            background: rgb(92, 65, 65);
          }
        }
        .main-content {
          .content-left {
            width: calc(76% - 45px) ;
            padding: 0 10px 10px 10px;
            float: left;
            .server-detail-wrap{
              background-color: rgb(105, 153, 124);
              margin-top: 10px;
              padding: 10px;
              border: 1px solid $border;
              .icon {
                float: left;
                width: 50px;
                height: 50px;
                border-radius: 50px;
                background-color: rgb(170, 182, 181);
                margin-right: 20px;
              }
              .detail {
                .resource-wrap {
                  .add-action,
                  .resource-list
                   {
                    float: left;
                    .resource {
                      float: left;
                    }
                  }
                }
              }
            }
          }
          .content-right {
            width: 24%;
            float: right;
            background-color: rgb(69, 96, 126);
            padding: 10px 10px 10px 15px;
            .line {
              border: 1px solid salmon
            }
            .summary-list {
              .text {
                display: inline-block;
                width: 50%;
              }
            };
            .history-list {
              li {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
    }
</style>
