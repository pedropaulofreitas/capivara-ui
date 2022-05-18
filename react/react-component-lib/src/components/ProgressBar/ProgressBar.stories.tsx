import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProgressBar from './index';

export default {
    title: 'Progress Bar',
    component: ProgressBar,
    argTypes: {
        size: {
            options: ['small', 'normal', 'medium', 'large'],
            control: { type: 'select'},
            description: 'ProgressBar size',
        },
        color: {
            description: 'ProgressBar color',
        },
        value: {
            description: '% of the bar that is colored. Undefined will have infinite loading',
            defaultValue: undefined,
        }
    }
} as ComponentMeta<typeof ProgressBar>;

export const Examples: ComponentStory<typeof ProgressBar> = (args) => (
    <ProgressBar {...args} />
);
