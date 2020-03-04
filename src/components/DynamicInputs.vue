<template>
  <section>
    <div class="columns is-multiline is-mobile">
      <div v-for="item in data" :key="item.id" :class="`column is-${item.col}`">
        <template v-if="item.type == 'text' || item.type == 'number'">
          <div v-if="item.showLabel">
            <b-field :label="item.label">
              <b-input :placeholder="item.placeholder" :type="item.type" v-model="item.value"></b-input>
            </b-field>
          </div>
          <div v-else>
            <b-input :placeholder="item.placeholder" :type="item.type" v-model="item.value"></b-input>
          </div>
        </template>
        <template v-if="item.type == 'checkbox'">
          <b-checkbox :type="item.type" v-model="item.value">{{item.placeholder}}</b-checkbox>
        </template>
        <template v-if="item.type == 'datepicker'">
          <div v-if="item.showLabel">
            <b-field :label="item.label">
              <b-datepicker
                v-model="item.value"
                :show-week-number="false"
                :placeholder="item.placeholder"
                icon="calendar"
              ></b-datepicker>
            </b-field>
          </div>
          <div v-else>
            <b-datepicker
              v-model="item.value"
              :show-week-number="false"
              :placeholder="item.placeholder"
              icon="calendar"
            ></b-datepicker>
          </div>
        </template>
        <template v-if="item.type == 'switch'">
          <div v-if="item.showLabel">
            <b-switch v-model="item.value">{{item.label}}</b-switch>
          </div>
          <div v-else>
            <b-switch v-model="item.value"></b-switch>
          </div>
        </template>
        <template v-if="item.type == 'radio'">
          <div class="block">
            <b-radio
              v-for="element in item.options"
              :key="element.id"
              v-model="item.value"
              :name="element.name"
              :native-value="element.name"
            >{{element.name}}</b-radio>
          </div>
        </template>
      </div>
      <div class="container">
        <div class="field">
          <b-button
            @click="onSubmit"
            :class="`button is-${buttonSettings.color ? buttonSettings.color : 'default'} is-${buttonSettings.size ? buttonSettings.size : 'default'} is-pulled-${buttonSettings.position ? buttonSettings.position : 'right'}`"
          >{{ buttonSettings.label}}</b-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DynamicInputs",
  props: {
    data: null,
    buttonSettings: null
  },
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.data);
    }
  },
  created() {}
};
</script>
