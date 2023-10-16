import { PushNotificationObject } from "react-native-push-notification"

enum APP {
    BACKGROUND_TASK_NAME = "BackgroundTask"
}

const NOTIFICATION_CONFIG: Object = {
    channelId: "blackholeav-id",
    autoCancel: false,
    largeIcon: "ic_launcher",
    smallIcon: "ic_notification",
    subText: "Anti-malware is our mission",
    bigLargeIcon: "ic_launcher",
    vibrate: true,
    vibration: 3000,
    group: "group",
    groupSummary: false,
    ongoing: false,
    priority: "high",
    visibility: "private",
    ignoreInForeground: false,
    shortcutId: "shortcut-id",
    onlyAlertOnce: false,
    invokeApp: true,
    title: "BlackHoleAV Notification",
}

const NOTIFICATION_CONFIG_START: PushNotificationObject = Object.assign({
    id: 0,
    color: "blue",
    bigText: "We have detected a new file, please wait for scanning malware",
    message: "Scanning malware",

}, NOTIFICATION_CONFIG);

const NOTIFICATION_CONFIG_CLEAN: PushNotificationObject = Object.assign({
    id: 1,
    color: "green",
    bigText: "File clean, No malware found",
    message: "Scan finished",
}, NOTIFICATION_CONFIG);

const NOTIFICATION_CONFIG_MALWARE: PushNotificationObject = Object.assign({
    id: 2,
    color: "red",
    bigText: "Malware found",
    message: "Scan finished",
}, NOTIFICATION_CONFIG);

const NOTIFICATION_CONFIG_ERROR: PushNotificationObject = Object.assign({
    id: 3,
    color: "red",
    bigText: "There was a problem uploading the file",
    message: "Cannot check for malicious software",
}, NOTIFICATION_CONFIG);

export default {
    APP,
    NOTIFICATION_CONFIG,
    NOTIFICATION_CONFIG_START,
    NOTIFICATION_CONFIG_CLEAN,
    NOTIFICATION_CONFIG_MALWARE,
    NOTIFICATION_CONFIG_ERROR
}