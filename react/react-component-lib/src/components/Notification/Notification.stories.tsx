import { ComponentMeta, ComponentStory } from '@storybook/react';

import Notification, { useNotification, NotificationProvider } from './index';

export default {
    title: 'Notification',
    component: Notification,
    argTypes: {
        color: {
            options: ['', 'primary', 'link', 'info', 'success', 'warning', 'danger', 'white', 'light', 'dark', 'black', 'text', 'ghost'],
            defaultValue: 'success',
            description: 'Notification box color.',
        },
        isLight: {
            options: [ true, false ],
            control: { type: 'boolean' },
            description: 'Notification box is light.',
            defaultValue: false,
        },
        duration: {
            description: 'Notification duration',
            defaultValue: 3000,
        }
    }
} as ComponentMeta<React.FC>;

const NotificationExample: React.FC<any> = ({args}) => {
    const { showNotification } = useNotification();
    return (
        <div onClick={() => {
            showNotification({
                notificationContent: 'text',
                color: args.color,
                duration: args.duration,
                isLight: args.isLight,
            });
        }}>
            click to display notification(check story implementation to see how to use useNotification hook :))
        </div>
    )
};

export const Examples: ComponentStory<React.FC> = (args) => (
    <NotificationProvider>
        <NotificationExample args={args} />
    </NotificationProvider>
);
