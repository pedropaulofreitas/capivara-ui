import { createContext, useState, useContext, useEffect } from 'react';

import Notification from './index';
import { ThemeColors } from 'theme';

import './index.scss';

//Provider and context
const NotificationCtx = createContext<any>({});
type NotificationData = {
    id: string;
    notificationContent: JSX.Element | string;
    color: ThemeColors;
    isLight: boolean;
};

const NotificationRender: React.FC<{notifications: NotificationData[], setNotifications: (n: NotificationData[]) => void }> = ({ notifications, setNotifications }) => {
    const [_notifications, _setNotifications] = useState<NotificationData[]>([]);
    const [leaveAnimation, setLeaveAnimation] = useState<{[id: string]: string}>({
        '': '',
    });

    useEffect(() => {
        if(notifications.length > _notifications.length) {
            _setNotifications(notifications);
        }
        else {
            if(_notifications.length > 0) {
                const n = _notifications.filter((x) => !notifications.map(y => y.id).includes(x.id));
                if(n.length > 0) {
                    setLeaveAnimation({[n[0].id]: 'animate__bounceOut'});
                    setTimeout(() => _setNotifications(notifications), 550);
                }
            }
        }
    }, [notifications]);

    const onRemoveNotification = (id: string) => {
        setNotifications(
            notifications.filter((x: any) => x.id !== id)
        );
    };

    return (
        <div className="_notification">
            {([..._notifications].reverse()).map((n) => {
                return (
                    <div className={leaveAnimation[n.id] || 'animate__bounceIn'} 
                        onClick={() => onRemoveNotification(n.id)}
                        key={n.id}>
                        <Notification
                            color={n.color} 
                            isLight={n.isLight}>
                            {n.notificationContent}
                        </Notification>
                    </div>
                );
            })}
        </div>
    );
};

export const NotificationProvider: React.FC = ({ children }) => {
    const [activeNotifications, setActiveNotifications] = useState<NotificationData[]>([]);
    return (
        <NotificationCtx.Provider value={{activeNotifications, setActiveNotifications}}>
            <NotificationRender 
                notifications={activeNotifications}
                setNotifications={(n: NotificationData[]) => setActiveNotifications(n)}/>
            {children}
        </NotificationCtx.Provider>
    );
};


// hook
type NotificationConfig = {
    notificationContent: JSX.Element | string;
    duration?: number;
    color?: ThemeColors;
    isLight?: boolean;
};

interface IUseNotification {
    showNotification: (config: NotificationConfig) => void;
};

export const useNotification = (): IUseNotification => {
    const { activeNotifications, setActiveNotifications } = useContext(NotificationCtx);
    const [idToRemove, setIdToRemove] = useState('');

    useEffect(() => {
        if(idToRemove) {
            setActiveNotifications(
                activeNotifications.filter((x: any) => x.id !== idToRemove),
            );
        }
    }, [idToRemove]);

    const _setRemoveNotificationTimer = (id: string, duration: number) => {
        setTimeout(() => {
            setIdToRemove(id);
        }, duration);
    };

    const showNotification = ({
            notificationContent = '',
            duration = 3000,
            color = 'success',
            isLight = false,
        }: NotificationConfig) => {
        const notificationId = (Date.now()).toString();
        setActiveNotifications([
            ...(activeNotifications),
            {
                id: notificationId,
                notificationContent,
                color,
                isLight,
            },
        ]);
        _setRemoveNotificationTimer(notificationId, duration);
    };

    return { showNotification };
};
