<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <md-field class="md-primary">
          <label>Form name</label>
          <md-input v-model="initial"></md-input>
        </md-field>
        <md-field>
          <label>Form description</label>
          <md-input v-model="type"></md-input>
          <span class="md-helper-text"></span>
        </md-field>
      </md-card-header>

      <md-card-content>
        <md-card>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-90 md-size-90">
                <md-field slot="content">
                  <label>คำถาม</label>
                  <md-input v-model="password" type="text"></md-input>
                </md-field>
                <md-field>
              <label>ข้อความคำตอบ</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
                
              </div>
              <div class="md-layout-item md-small-size-10 md-size-10">
                <md-menu md-size="medium" md-align-trigger>

                  <md-button class="md-primary md-just-icon md-round" md-menu-trigger><md-icon >cached</md-icon></md-button>

                  <md-menu-content>
                    <md-menu-item>ข้อความสั้นๆ</md-menu-item>
                    <md-menu-item>ตัวเลือกประกอบรูปภาพ</md-menu-item>
                    <md-menu-item>ตัวเลอกข้อความ</md-menu-item>
                  </md-menu-content>
                </md-menu>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="left">
            <slot name="footer"><md-button href class="md-success md-round" slot="footer">Unlock</md-button></slot>
          </md-card-actions>
        </md-card>

        <!-- --------------------------------- -->

         <md-card>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-90 md-size-90">
                <md-field slot="content">
                  <label>คำถาม</label>
                  <md-input v-model="password" type="text"></md-input>
                </md-field>
                <md-field>
              <label>ข้อความคำตอบ</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
                
              </div>
              <div class="md-layout-item md-small-size-10 md-size-10">
                <md-menu md-size="medium" md-align-trigger>

                  <md-button class="md-primary md-just-icon md-round" md-menu-trigger><md-icon >cached</md-icon></md-button>

                  <md-menu-content>
                    <md-menu-item>ข้อความสั้นๆ</md-menu-item>
                    <md-menu-item>ตัวเลือกประกอบรูปภาพ</md-menu-item>
                    <md-menu-item>ตัวเลอกข้อความ</md-menu-item>
                  </md-menu-content>
                </md-menu>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="left">
            <slot name="footer"><md-button href class="md-success md-round" slot="footer">Unlock</md-button></slot>
          </md-card-actions>
        </md-card>

        <!-- --------------------------------------------- -->

        <md-card>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-90 md-size-90">
                <md-field slot="content">
                  <label>คำถาม</label>
                  <md-input v-model="password" type="text"></md-input>
                </md-field>
                <md-field>
              <label>ข้อความคำตอบ</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
                
              </div>
              <div class="md-layout-item md-small-size-10 md-size-10">
                <md-menu md-size="medium" md-align-trigger>

                  <md-button class="md-primary md-just-icon md-round" md-menu-trigger><md-icon >cached</md-icon></md-button>

                  <md-menu-content>
                    <md-menu-item>ข้อความสั้นๆ</md-menu-item>
                    <md-menu-item>ตัวเลือกประกอบรูปภาพ</md-menu-item>
                    <md-menu-item>ตัวเลอกข้อความ</md-menu-item>
                  </md-menu-content>
                </md-menu>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="left">
            <slot name="footer"><md-button href class="md-success md-round" slot="footer">Unlock</md-button></slot>
          </md-card-actions>
        </md-card>

        <!-- --------------------------------------------- -->

        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Company (disabled)</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>User Name</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>First Name</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Update Profile</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
    };
  }
};
</script>




