import { NativeModules } from "react-native";

const InstalledAppList = NativeModules.InstalledAppList;

module.exports = {
  getAll: InstalledAppList.getAll,
};

export default InstalledAppList;
