<template>
  <div>
    <label for="">いまどんなかんじ？ </label>
    <input
      type="radio"
      name="painLevel"
      value="1"
      :checked="painRecord.painLevel === 0"
    />
    <input
      type="radio"
      name="painLevel"
      value="2"
      :checked="painRecord.painLevel === 1"
    />
    <input
      type="radio"
      name="painLevel"
      value="3"
      :checked="painRecord.painLevel === 2"
    />
    <input
      type="radio"
      name="painLevel"
      value="4"
      :checked="painRecord.painLevel === 3"
    />
    <br />

    <label for="medicine">おくすりのんだ？</label>
    <input
      v-for="medicine in painRecord.medicineList"
      :key="medicine.medicineID"
      type="text"
      name="medicineList"
      :value="medicine.medicineName"
    />
    <br />

    <label for="bodypart">いたいところは？</label>
    <input
      v-for="bodypart in painRecord.bodyPartsList"
      :key="bodypart.bodyPartsID"
      type="text"
      name="bodyPartsList"
      :value="bodypart.bodyPartsName"
    />
    <br />

    <label for="memo">どんなきもち？</label>
    <textarea name="memo" :value="painRecord.memo"></textarea>

    <br />
    <label for="">かんぶのしゃしん</label>
    <img
      v-for="image in painRecord.imageList"
      :key="image.imageID"
      :src="image.imagePath"
      :alt="image.imageID"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api';
import {
  useEmptyPainRecord,
  usePainRecord,
} from '@/compositions/pain-record/pain-record';

export default defineComponent({
  name: 'PainRecord',
  setup() {
    const { params } = useContext();
    const painRecord = ref(useEmptyPainRecord());
    useFetch(async () => {
      painRecord.value = await usePainRecord(parseInt(params.value.id));
    });

    return {
      painRecord,
    };
  },
});
</script>
