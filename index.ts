import { NativeModules } from "react-native";

const getInstalledApps = NativeModules.InstalledAppList.getAll;

export { getInstalledApps };
