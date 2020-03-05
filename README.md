<h1 align="center">Vue js dynamic inputs component</h1>

<p align="center"> 
<img src="https://cdn6.aptoide.com/imgs/4/4/9/4495d03338c42a4374a48fa3aacd8881_icon.png?w=256">
</p>

## Preview

![Example of a form](https://i.ibb.co/7YBTmYf/8e27f4f7-25d4-4220-9874-0f9e9b4e27e1.jpg)

## Live demo:
https://codepen.io/taverasady/pen/LYVzevo

## Installation
```
npm i vue-dynamic-inputs

```

### Usage
```html
HTML: 

 <vue-dynamic-inputs
     @onSubmit="submitedValues"
     :data="listOfInputs"
     :buttonSettings="buttonSettings"
 />


JS:

<script>
import DynamicInputs from "vue-dynamic-inputs";
export default {
  name: "app",
  components: {
    DynamicInputs
  },
  data() {
    return {
      listOfInputs: [
        {
          type: "text",
          value: "",
          col: "6",
          placeholder: "",
          showLabel: true,
          label: "First Name"
        },
        {
          type: "text",
          value: "",
          col: "6",
          placeholder: "",
          showLabel: true,
          label: "Last Name"
        },
        {
          type: "number",
          value: null,
          col: "3",
          showLabel: true,
          label: "Age"
        },

        {
          type: "datepicker",
          value: new Date(),
          col: "3",
          placeholder: "Date of Birth",
          showLabel: true,
          label: "Date of birth"
        },
        {
          type: "text",
          value: "",
          col: "6",
          placeholder: "example: jhonDoe@gmail.com",
          showLabel: true,
          label: "Email"
        },
        {
          type: "checkbox",
          value: false,
          col: "3",
          placeholder: "Are you single?",
          showLabel: false,
          label: ""
        },
        {
          type: "switch",
          value: false,
          col: "3",
          placeholder: "",
          showLabel: true,
          label: "Allow notifications"
        },
        {
          type: "radio",
          value: false,
          col: "6",
          placeholder: "",
          showLabel: true,
          label: "",
          options: [{ name: "Male" }, { name: "Female" }, { name: "Other" }]
        }
      ],
      buttonSettings: {
        label: "Save",
        color: "success",
        position: "right",
        size: "default"
      }
    };
  },
  methods: {
    submitedValues(value) {
      console.log(value);
    }
  },
  created() {}
};
</script>


```
