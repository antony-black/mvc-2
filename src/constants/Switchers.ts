import { EPageNames } from "../enums/EPageNames";
import textUI from "./textUI";

class Switchers {
  public static BUTTONS = [
    {
      id: EPageNames.MAIN_PAGE,
      text: textUI.MAIN_PAGE
    },
    {
      id: EPageNames.SETTINGS_PAGE,
      text: textUI.SETTINGS_PAGE
    },
    {
      id: EPageNames.STATISTICS_PAGE,
      text: textUI.STATISTICS_PAGE
    },
  ]
}

export default Switchers;