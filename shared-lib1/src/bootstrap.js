import { faker } from "@faker-js/faker";

const mount = (element) => {
  const cartLotal = `<div>${faker.finance.amount()}</div>`;

  element.innerHTML = `From Shared Lib 1: ${cartLotal}`;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#shared");
  if (element) {
    mount(element);
  }
}

export {mount}