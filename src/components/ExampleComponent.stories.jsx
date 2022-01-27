import { ExampleComponent } from "./ExampleComponent";

export default {
  title: "ExampleComponent",
  component: ExampleComponent,
};

const Template = (args) => <ExampleComponent {...args} />;

export const Default = Template.bind({});
