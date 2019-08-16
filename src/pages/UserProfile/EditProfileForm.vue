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
                  <md-button class="md-primary md-just-icon md-round" md-menu-trigger>
                    <md-icon>cached</md-icon>
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
                        <md-icon>radio_button_checked</md-icon>ตัวเลอกข้อความ
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
                <div class="md-layout">
                  <div class="md-layout-item md-small-size-40 md-size-40">
                    <md-field slot="content">
                      <label>เพิ่มรูปภาพ</label>
                      <md-file v-model="single" />
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-45 md-size-45">
                    <md-field slot="content">
                      <md-icon>radio_button_checked</md-icon>
                      <label>ระบุคำตอบ</label>
                      <md-input v-model="password" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-15 md-size-15">
                    <md-button id="btn" class="md-success md-icon-button md-dense">
                      <md-icon>add_box</md-icon>
                      <md-tooltip md-direction="bottom">เพิ่มคำตอบ</md-tooltip>
                    </md-button>
                    <md-button id="btn" class="md-danger md-icon-button md-dense">
                      <md-icon>delete</md-icon>
                      <md-tooltip md-direction="bottom">ลบคำตอบ</md-tooltip>
                    </md-button>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-small-size-10 md-size-10">
                <md-menu md-size="medium" md-align-trigger>
                  <md-button class="md-primary md-just-icon md-round" md-menu-trigger>
                    <md-icon>cached</md-icon>
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
                        <md-icon>radio_button_checked</md-icon>ตัวเลอกข้อความ
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
                        <md-icon>radio_button_checked</md-icon>ตัวเลอกข้อความ
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
        </md-card>

        <!-- --------------------------------------------- -->

        <div class="md-layout">
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-primary md-raised" @click="second = true">Confirm</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>

    <md-dialog-alert
      :md-active.sync="second"
      md-title="Form created!"
      md-content="Your form is success has been created." />

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
    data: () => ({
      first: false,
      second: false
    })
};
</script>

<style lang="scss" scoped>
#btn {
  margin-right: 15px;
}
</style>



