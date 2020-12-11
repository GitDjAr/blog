<template>
  <a-list item-layout="vertical" size="large" :data-source="listData">
    <div slot="footer">
      拉多斯拉克
      <!-- <router-link tag='div' :to='{path:"/tags",query:{tag:item.tagId}}' 
      v-for="(item, index) in listData.tags" :key="index">
        <a-tag color=''>
          {{index}}阿斯蒂芬
          {{item.tag}}
        </a-tag>
      </router-link> -->
    </div>
    <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img
        slot="extra"
        width="272"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
      />
      <a-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{ item.title }}</a>
        <a-avatar slot="avatar" :src="item.avatar" />
      </a-list-item-meta>
      {{ item.content }}
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  data() {
    return {
      listData:[{
        href: 'https://www.antdv.com/',
        title: "ant design vue part ",
        tags:[{tag:'vue',tagId:'1'},{tag:'javascript',tagId:'2'}],
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.', 
      }],
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
};
</script>
<style></style>
