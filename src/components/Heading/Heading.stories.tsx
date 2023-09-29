import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from '../Heading';

export default {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'O texto está escuro',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta<HeadingProps>;

export const Template: StoryFn<HeadingProps> = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};

export const Light: StoryFn<HeadingProps> = (args) => <Heading {...args} />;
export const Dark: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Dark.args = {
  $colorDark: false,
  children: 'O texto está claro',
};
