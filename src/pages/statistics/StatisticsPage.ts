import Page from "../../core/templates/Page";
import textUI from "../../constants/textUI";

class StatisticsPage extends Page{

  constructor(id: string) {
    super(id)
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(textUI.STATISTICS_PAGE);

    this.container.append(title);

    return this.container;
  }
}

export default StatisticsPage;