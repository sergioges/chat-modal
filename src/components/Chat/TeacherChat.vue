<script>
export default {
  name: "TeacherChat",
  props: {
    content: {
      type: Object,
      required: false,
    },
  },
  setup() {

  },
};
</script>

<template>
  <div class="mb-4 w-5/6 flex justify-start">
    <div class="flex items-center">
      <img class="w-10 rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Avatar Profesor" />
    </div>
    <div class="bg-gray-300 p-5 ml-3 w-3/4">
      <p class="text-white">
        {{ content.data.message }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>