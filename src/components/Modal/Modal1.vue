<template>
  
  <modal v-if="smallAlertModal" @close="smallAlertModalHide">
    <template slot="header">
      <md-button
        class="md-simple md-just-icon md-round modal-default-button"
        @click="smallAlertModalHide"
      >
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
      <p>Are you sure you want to do this?</p>
    </template>

    <template slot="footer">
      <md-button class="md-simple" @click="smallAlertModalHide">Never Mind</md-button>
      <md-button class="md-success md-simple">Yes</md-button>
    </template>
  </modal>
</template>

<script>
export default {
  name: "modal1"
};
</script>