<script>
export default {
  name: "StudentChat",
  props: {
    content: {
      type: Object,
      required: false,
    },
  },
  setup(props) {

    return {}
  },
};
</script>

<template>
  <div class="mb-4 w-5/6">
    <div class="wrapper">
      <div class="bg-blue-500 p-5 w-3/4">
        <p class="text-white">
          {{ content.data.message }}
        </p>
        <p class="text-white text-xs mt-1">{{ content.data.date }}</p>
      </div>
      <div class="flex items-center ml-3">
        <img class="w-10 rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=female" alt="Avatar Estudiante" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>