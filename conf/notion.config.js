/**
 * 读取Notion相关的配置
 * 如果需要在Notion中添加自定义字段，可以修改此文件
 */
module.exports = {
  // 自定义配置notion数据库字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || '密码',  // 密码  默认：'password'
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || '文章类型', // 文章类型，默认：'type'
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || '文章', // 当type文章类型与此值相同时，为博文。 默认：'Post'
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || '单页', // 当type文章类型与此值相同时，为单页。 默认：'Page'
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || '公告', // 当type文章类型与此值相同时，为公告。 默认：'Notice'
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || '菜单', // 当type文章类型与此值相同时，为菜单。 默认：'Menu'
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || '子菜单', // 当type文章类型与此值相同时，为子菜单。 默认：'SubMenu'
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || '标题', // 文章标题表头 默认：'title'
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || '状态',  //状态的表头  默认：'status'
    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || '已发布', // 当status状态值与此相同时为发布，可以为中文   默认：'Published'
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || '隐藏文章', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上  默认：'Invisible'
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || '概括',   // 描述概括的表头 默认：'summary'
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || '链接',  //链接   默认：'slug'
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || '分类',  //分类  默认：'category'
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || '日期',  //日期  默认：'date'
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || '标签',   //标签  默认：'tags'
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon',    //
    ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || 'ext' // 扩展字段，存放json-string，用于复杂业务
  },
  NOTION_ACTIVE_USER: process.env.NOTION_ACTIVE_USER || '',
  NOTION_TOKEN_V2: process.env.NOTION_TOKEN_V2 || '' // Useful if you prefer not to make your database public
}
