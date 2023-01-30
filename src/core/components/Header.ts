import Component from "../templates/Component";
import { EHtml } from "../../enums/EHtml";
import Switchers from "../../constants/Switchers";
import Utils from "../../utils/Utils";

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement(EHtml.DIV);

    Switchers.BUTTONS.forEach(button => {
      const buttonHTML = document.createElement(EHtml.A);

      buttonHTML.href = Utils.getId(button.id);

      buttonHTML.innerText = button.text;

      pageButtons.append(buttonHTML);
    });

    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();

    return this.container;
  }
}

export default Header;