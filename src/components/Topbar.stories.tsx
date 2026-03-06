import type { Meta, StoryObj } from '@storybook/react-vite';

import Topbar from './Topbar';

const meta = {
  component: Topbar,
} satisfies Meta<typeof Topbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};