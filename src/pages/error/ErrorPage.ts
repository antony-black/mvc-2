import Page from "../../core/templates/Page";
import textUI from "../../constants/textUI";

class ErrorPage extends Page{

  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(textUI.ERROR_404);

    this.container.append(title);

    return this.container;
  }

}

export default ErrorPage;