<script>
export default {
  name: "DownloadChat",
  props: {
    content: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    // Methods
    const downloadFile = () => {
      alert(props.content.data.url);
    }

    return { downloadFile }
  },
};
</script>

<template>
  <div class="border-b-2 border-t-2 mb-6 py-3 w-5/6 flex justify-between">
    <div>
      <p class="text-xl mb-1">Versión {{ content.data.version }}</p>
      <p class="text-blue-500 font-bold">{{ content.data.title }}</p>
      <p class="mb-2">{{ content.data.info }}</p>
    </div>
    <div>
      <img @click="downloadFile" class="cursor-pointer" src="../../assets/cloud-download-regular-48.png"
        alt="Download file">
    </div>
  </div>
</template>

<style scoped></style>