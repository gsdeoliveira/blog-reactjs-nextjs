import { CloneMe, CloneMeProps } from './CloneMe';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'CloneMe',
  component: CloneMe,
  tags: ['autodocs'],
} as Meta<typeof CloneMe>;

export const Template: StoryFn<CloneMeProps> = (args) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
