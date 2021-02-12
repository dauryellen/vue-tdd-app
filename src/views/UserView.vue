<template>
  <div>
    <v-user-search-form />
    <v-user-profile />
  </div>
</template>

<script>
import VUserSearchForm from "../components/VUserSearchForm";
import VUserProfile from "../components/VUserProfile";

export default {
  name: "UserView",
  components: {
    VUserSearchForm,
    VUserProfile,
  },
};
</script>

<style></style>
