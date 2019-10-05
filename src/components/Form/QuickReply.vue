<template>
  <md-card>
         <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-90 md-size-90">
                <md-field slot="content">
                  <label>คำถาม</label>
                  <md-input v-model="password" type="text"></md-input>
                </md-field>
                <md-field>
                  <label>เพิ่มรูปภาพ</label>
                  <md-file v-model="single" />
                </md-field>
                <md-field>
                  <md-icon>radio_button_checked</md-icon>
                  <label>ระบุคำตอบ</label>
                  <md-input v-model="password" type="text"></md-input>
                  <md-button id="btn" class="md-success md-icon-button md-dense">
                    <md-icon>add_box</md-icon>
                    <md-tooltip md-direction="bottom">เพิ่มคำตอบ</md-tooltip>
                  </md-button>
                  <md-button id="btn" class="md-danger md-icon-button md-dense">
                    <md-icon>delete</md-icon>
                    <md-tooltip md-direction="bottom">ลบคำตอบ</md-tooltip>
                  </md-button>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-10 md-size-10">
                <md-menu md-size="medium" md-align-trigger>
                  <md-button class="md-primary md-just-icon md-round" md-menu-trigger>
                    <md-icon>cached</md-icon>
                  </md-button>

                  <md-button
                    class="md-primary md-just-icon md-round md-raised"
                    @click="showDialog = true"
                  >
                    <md-icon>extension</md-icon>
                    <md-tooltip md-direction="bottom">คำอธิบาย</md-tooltip>
                  </md-button>

                  <md-menu-content>
                    <md-menu-item>
                      <md-button class="md-simple md-sm">
                        <md-icon>short_text</md-icon>ข้อความสั้นๆ
                      </md-button>
                    </md-menu-item>
                    <md-menu-item>
                      <md-button class="md-simple md-sm">
                        <md-icon>insert_photo</md-icon>ตัวเลือกประกอบรูปภาพ
                      </md-button>
                    </md-menu-item>
                    <md-menu-item>
                      <md-button class="md-simple md-sm">
                        <md-icon>radio_button_checked</md-icon>ตัวเลือกข้อความ
                      </md-button>
                    </md-menu-item>
                  </md-menu-content>
                </md-menu>
              </div>
            </div>
          </md-card-content>

          <md-card-actions md-alignment="right">
            <slot name="footer">
              <md-button id="btn" class="md-simple md-icon-button md-dense">
                <md-icon>library_add</md-icon>
                <md-tooltip md-direction="bottom">เพิ่มคำถาม</md-tooltip>
              </md-button>
              <md-button id="btn" class="md-simple md-icon-button md-dense">
                <md-icon>file_copy</md-icon>
                <md-tooltip md-direction="bottom">คัดลอกคำถาม</md-tooltip>
              </md-button>
              <md-button id="btn" class="md-simple md-icon-button md-dense">
                <md-icon>delete</md-icon>
                <md-tooltip md-direction="bottom">ลบคำถาม</md-tooltip>
              </md-button>
            </slot>
          </md-card-actions>
        
           <div>
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title align="center">Description</md-dialog-title>
        <br />
        <md-tabs class="md-accent" md-alignment="centered">
          <md-tab id="tab-home" md-label="ข้อความสั้นๆ" md-icon="short_text">
            <center>
              <div class="md-card-img">
                <img src="@/assets/img/11.png" alt="Cover" />
              </div>
            </center>
          </md-tab>

          <md-tab id="tab-pages" md-label="ตัวเลือกประกอบรูปภาพ" md-icon="insert_photo">
            <center>
              <div class="md-card-img">
                <img src="@/assets/img/2.png" alt="Cover" />
              </div>
            </center>
          </md-tab>

          <md-tab id="tab-posts" md-label="ตัวเลือกข้อความ" md-icon="radio_button_checked">
            <center>
              <div class="md-card-img">
                <img src="@/assets/img/3.png" alt="Cover" />
              </div>
            </center>
          </md-tab>
        </md-tabs>

        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
        </md-card>

        
</template>

<script>
  export default {
name: 'QuickReply',
name: "DialogConfirm",
  data: () => ({
    active: false,
    value: null,
    showDialog: false
  }),
  methods: {
    onConfirm() {
      this.value = "Agreed";
    },
    onCancel() {
      this.value = "Disagreed";
    }
},
props: [ 'type' ]
}

</script>
<style scoped>
button.primary {
background: blue;
color: white;
}
</style>