<script setup>

</script>

<template>
  <main class="container mx-auto p-4">
    <!-- Hero Section -->
    <section class="bg-gray-100 p-8 rounded-lg shadow-md text-center mb-8">
      <h1 class="text-3xl font-bold mb-4">欢迎访问我们的网站</h1>
      <p class="text-lg text-gray-700 mb-4">我们为您的需求提供最优质的产品和服务。</p>
      <button class="bg-blue-500 text-white px-4 py-2 rounded">立即开始</button>
    </section>
    <!-- <section class="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item>
          <img src="https://api.btstu.cn/sjbz/api.php" alt="图片 1" key="1">
          <h1 class="text-3xl font-bold mb-4">轮播图标题 1</h1>
          <p class="text-lg text-gray-700 mb-4">轮播图描述 1。</p>
          <el-button type="primary" round>按钮 1</el-button>
        </el-carousel-item>
        <el-carousel-item>
          <img src="https://api.btstu.cn/sjbz/api.php" alt="图片 2" key="2">
          <h1 class="text-3xl font-bold mb-4">轮播图标题 2</h1>
          <p class="text-lg text-gray-700 mb-4">轮播图描述 2。</p>
          <el-button type="primary" round>按钮 2</el-button>
        </el-carousel-item>
        <el-carousel-item>
          <img src="https://api.btstu.cn/sjbz/api.php" alt="图片 3" key="3">
          <h1 class="text-3xl font-bold mb-4">轮播图标题 3</h1>
          <p class="text-lg text-gray-700 mb-4">轮播图描述 3。</p>
          <el-button type="primary" round>按钮 3</el-button>
        </el-carousel-item>
      </el-carousel>
    </section> -->

    <!-- Services Section 1 -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">服务 1</h2>
        <p class="text-gray-700 mb-4">服务 1 的描述。</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">了解更多</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">服务 2</h2>
        <p class="text-gray-700 mb-4">服务 2 的描述。</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">了解更多</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">服务 3</h2>
        <p class="text-gray-700 mb-4">服务 3 的描述。</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">了解更多</button>
      </div>
    </section>
    <!-- Services Section 2 -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">服务 1</h2>
        <p class="text-gray-700 mb-4">服务 1 的描述。</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">了解更多</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">服务 2</h2>
        <p class="text-gray-700 mb-4">服务 2 的描述。</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">了解更多</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-xl font-bold mb-4">服务 3</h2>
        <p class="text-gray-700 mb-4">服务 3 的描述。</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">了解更多</button>
      </div>
    </section>
    <!-- Latest News Section -->
    <section>
      <h2 class="text-2xl font-bold mb-4">最新消息</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">新闻标题 1</h3>
          <p class="text-gray-700 mb-4">新闻文章 1 的摘要。</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">阅读更多</button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold mb-4">新闻标题 2</h3>
          <p class="text-gray-700 mb-4">新闻文章 2 的摘要。</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">阅读更多</button>
        </div>
      </div>
    </section>
  </main>
</template>