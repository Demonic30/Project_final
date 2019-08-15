<template>
  <div class="content">
    <div class="md-layout">
      <center>
        <div class="md-layout-item md-medium-size-80 md-xsmall-size-80 md-size-80">
          <md-tabs class="md-accent" md-alignment="centered" md-sync-route>
            <md-tab id="tab-home" md-label="Question" to="/form">
              <edit-profile-form data-background-color="orange"></edit-profile-form>
            </md-tab>
            <md-tab id="tab-pages" md-label="Feedback" to="/feedback"></md-tab>
          </md-tabs>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import { EditProfileForm } from "@/pages";

export default {
  components: {
    EditProfileForm
  }
};
</script>

