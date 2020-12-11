<!--  -->
<template>
<div>
  <a-row type='flex' justify='center'>
    <a-col 
    span='24'
    :lg="{span:16}"
    >
    <div class="time-box">
      <a-timeline>
        <a-timeline-item color="green">
          <template>
            <a-comment>
              <template slot="actions">
                <span key="comment-basic-like">
                  <a-tooltip title="Like">
                    <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">
                    {{ likes }}
                  </span>
                </span>
                <span key="comment-basic-dislike">
                  <a-tooltip title="Dislike">
                    <a-icon
                      type="dislike"
                      :theme="action === 'disliked' ? 'filled' : 'outlined'"
                      @click="dislike"
                    />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">
                    {{ dislikes }}
                  </span>
                </span>
                <span key="comment-basic-reply-to">Reply to</span>
              </template>
              <a slot="author">Han Solo</a>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
              <p slot="content">
                We supply a series of design principles, practical patterns and high quality design resources
                (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
              </p>
              <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
                <span>{{ moment().fromNow() }}</span>
              </a-tooltip>
            </a-comment>
          </template>
        </a-timeline-item>
      </a-timeline>
    </div>
    </a-col>
  </a-row>
  <template>
  <div>
    <a-back-top />
  </div>
</template>
</div>
</template>

<script>
export default {

  components: {

},
  data () {
    return {
      targetOffset: undefined,
    };
  },

  filters: {

},

  watch: {

},

  computed: {

},

  methods: {

},

  mounted(){
    this.targetOffset = window.innerHeight / 2;
},
}

</script>
<style scoped lang='scss'>
div{
  border: .3px solid rebeccapurple;
}
.time-box{
  margin: 20px 0;
  width: 100%;
  text-align: left;
  padding: 30px 0;
}
</style>