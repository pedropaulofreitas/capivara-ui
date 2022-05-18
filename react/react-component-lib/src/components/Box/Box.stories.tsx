import { ComponentMeta, ComponentStory } from '@storybook/react';

import Box from './index'

export default {
    title: 'Box',
    component: Box,
} as ComponentMeta<typeof Box>;

export const Examples: ComponentStory<typeof Box> = () => (
    <Box>
        Text inside a box
    </Box>
);
