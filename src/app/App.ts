import MainPage from "../pages/main/Main";
import SettingsPage from "../pages/settings/SettingsPage";
import StatisticsPage from "../pages/statistics/StatisticsPage";
import ErrorPage from "../pages/error/ErrorPage";
import Page from "../core/templates/Page";
import Header from "../core/components/Header";
import { EPageNames,  } from "../enums/EPageNames";
import { EHtml } from "../enums/EHtml";
import { EEvents } from "../enums/EEvents";
import Utils from "../utils/Utils";


class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = EPageNames.CURRENT_PAGE;
  private initialPage: MainPage;
  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(Utils.getId(App.defaultPageId));

   if (currentPageHTML) {
    currentPageHTML.remove();
   }

    let page: Page | null = null;

    if (idPage === EPageNames.MAIN_PAGE) {
      page = new MainPage(idPage);
    }

    else if (idPage === EPageNames.SETTINGS_PAGE) {
      page = new SettingsPage(idPage);
    }

    else if (idPage === EPageNames.STATISTICS_PAGE) {
      page = new StatisticsPage(idPage);
    }

    else {
      page = new ErrorPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();

      pageHTML.id = App.defaultPageId;

      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener(EEvents.HASH_CHANGE, () => {
      const hash = window.location.hash.slice(1);

      App.renderNewPage(hash);
    })
  }

  constructor() { 
    this.initialPage = new MainPage(EPageNames.MAIN_PAGE);

    this.header = new Header(EHtml.HEADER, EHtml.HEADER_CONTAINER);
  }

  run() {
   App.container.append(this.header.render());

   App.renderNewPage(EPageNames.MAIN_PAGE);

   this.enableRouteChange();
  }
}

export default App;