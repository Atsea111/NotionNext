/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #f7f9fe;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      #header-cover {
        transform: scale(1.05);
        overflow: hidden;
      }

      .header-cover-wrapper {
        overflow: hidden;
        position: relative;
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      /* 卡片样式 */
      .card {
        border: none !important;
        background-color: rgba(255, 255, 255, 0.3) !important;
        backdrop-filter: blur(150px);
        -webkit-backdrop-filter: blur(150px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
      }

      .card:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      }

      .dark .card {
        background-color: rgba(30, 30, 30, 0.3) !important;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
      }

      .dark .card:hover {
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
      }

      /* 优化高斯模糊效果 */
      /* 导航栏高斯模糊效果 */
      .bg-blur {
        /* 确保背景色只在内容区域显示 */
        background-clip: padding-box !important;
        -webkit-background-clip: padding-box !important;
        /* 高斯模糊效果，可以调整blur的值来改变模糊程度 */
        -webkit-backdrop-filter: blur(150px) !important;
        backdrop-filter: blur(150px) !important;
        /* 背景色透明度，可以调整最后一个值(0.3)来改变透明度 */
        background-color: rgba(255, 255, 255, 0.45) !important;
        padding: 1px;
        /* 阴影效果及其过渡动画 */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
        transition: all 0.3s ease !important;
        /* 3D变换相关属性 */
        transform-style: preserve-3d;
        backface-visibility: hidden;
        will-change: box-shadow, transform;
      }

      /* 鼠标悬停时增强阴影效果 */
      .bg-blur:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8) !important;
        transform: translateZ(0);
      }

      .dark .bg-blur {
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        transition: box-shadow 0.3s ease;
      }

      /* 深色模式下鼠标悬停时的阴影效果 */
      .dark .bg-blur:hover {
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  )
}

export { Style }

