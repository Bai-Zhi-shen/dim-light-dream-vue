<script setup lang="ts">

</script>

<template>
    
    <div class="masthead">
        <div class="masthead-mask">
            <h1 class="tagline">加入我们, 成为志愿者!</h1>
        </div>
    </div>
    <div class="introduce">
        展示...
    </div>
</template>

<style>
.tagline {
    text-align: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
}

.masthead {
    width: 100%;
    background-color: #343a40;
    background: url(https://wgzm.soai.cc/static/index/assets/img/bg-masthead.jpg);
    background-position: center;
    background-size: cover;
}

.masthead-mask {
    height: 100%;
    width: 100%;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background: rgba(28, 55, 94, .3);
}

@media (min-width: 768px) {
    .masthead-mask {
        padding-top: 12rem;
        padding-bottom: 12rem;
    }
}

.introduce {
    width: min(100% - 2rem, 90rem);
    margin: 0 auto;
}
</style>