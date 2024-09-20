import RadioGroup from '@/components/ui/RadioGroup';
import RadioGroupItem from '@/components/ui/RadioGroupItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="1">Test 1</RadioGroupItem>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="2">Test 2</RadioGroupItem>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="3">Test 3</RadioGroupItem>
      </div>
    </RadioGroup>
  ),
};
