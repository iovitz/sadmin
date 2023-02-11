<template>
  <CommonDataCard title="累计销售额" value-prefix="￥" :value="12312412">
    <div>
      日同比：<IncreaseValue type="increase"> <span class="font-bold">124124</span> </IncreaseValue>
    </div>
    <div>
      月同比：<IncreaseValue type="decrease"><span class="font-bold">124124</span></IncreaseValue>
    </div>
    <template #footer> 昨日销售额: 9283917 </template>
  </CommonDataCard>
</template>

<script setup lang="ts">
import CommonDataCard from '@/widget/common-data-card/common-data-card.vue'
import IncreaseValue from '@/widget/increase-value/increase-value.vue'
</script>

<style lang="scss" scoped></style>
