import { ComponentMeta, ComponentStory } from '@storybook/react';

import Close from './index';

export default {
    title: 'Close',
    component: Close,
    argTypes: {
        size: {
            options: ['small', 'normal', 'medium', 'large'],
            control: { type: 'select'},
            description: 'Close size',
        },
    }
} as ComponentMeta<typeof Close>;

export const Examples: ComponentStory<typeof Close> = (args) => (
    <Close {...args} />
)
