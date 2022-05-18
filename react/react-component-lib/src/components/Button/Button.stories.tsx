import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';
import Icon from '../Icon';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        color: {
            options: ['', 'primary', 'link', 'info', 'success', 'warning', 'danger', 'white', 'light', 'dark', 'black', 'text', 'ghost'],
            description: 'Button color.'
        },
        size: {
            options: ['small', 'normal', 'medium', 'large'],
            control: { type: 'select'},
            description: 'Button size',
        },
        isLight: {
            options: [true, false],
            control: {type: 'boolean'},
            description: 'Button is light.'
        },
        isFullWidth: {
            options: [true, false],
            control: {type: 'boolean'},
            description: 'Button has full width of its container.',
        },
        isOutlined: {
            options: [true, false],
            control: {type: 'boolean'},
            description: 'Button is outlined.',
        },
        isRounded: {
            options: [true, false],
            control: {type: 'boolean'},
            description: 'Button has round borders.'
        },
        disabled: {
            options: [true, false],
            control: {type: 'boolean'},
            description: 'Button is disabled.'
        },
        onClick: {
            action: 'clicked',
            description: 'Click event',
        }
    }
} as ComponentMeta<typeof Button>;

export const Examples: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);

export const ExampleWithIcon: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>
        <Icon name="delete" />
        <span>Button Text</span>
    </Button>
);
