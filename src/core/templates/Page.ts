import { EHtml } from "../../enums/EHtml";

abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement(EHtml.DIV);

    this.container.id = id;
  }

  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement(EHtml.H1);

    headerTitle.innerText = text;

    return headerTitle;
  }

  render(): HTMLElement {
    return this.container;
  }

}

export default Page;