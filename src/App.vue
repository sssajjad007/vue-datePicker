<template>
  <div>
    <input type="date" :max="maxDate" v-model="selectedDate" @change="updateFormattedDate" />
    <p>Selected Date: {{ formattedDate }}</p>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import jalaliday from 'jalali-plugin-dayjs';

dayjs.extend(jalaliday);
dayjs.extend(jalaliday).calendar('jalali');

export default {
  data() {
    return {
      selectedDate: '',
      maxDate: dayjs().format('YYYY-MM-DD'),
      formattedDate: '',
    };
  },
  methods: {
    updateFormattedDate() {
      this.formattedDate = this.selectedDate
        ? dayjs(this.selectedDate,{ jalali: true }).format('YYYY-MM-DD')
        : '';
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>