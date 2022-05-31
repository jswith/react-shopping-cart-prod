import Field from "@/components/field/Field";
import Input from "@/components/input/Input";

export default {
  component: Field,
  title: "Field",
};

const Template = (args) => (
  <Field {...args}>
    <Input />
  </Field>
);

export const Default = Template.bind({});
Default.args = {
  labelName: "로그인",
};
