import { faker } from "@faker-js/faker";

const mount = (element: HTMLDivElement) => {
  const productList = [];

  for (let i = 0; i <= 10; i++) {
    productList.push(faker.company.name());
  }
  const productElements = productList
    .map((item) => `<div>${item}</div>`)
    .join(" ");

  element.innerHTML = `From Shared Lib 2 : ${productElements}`;
};

if (process.env.NODE_ENV === "development") {
  const element: HTMLDivElement | null = document.querySelector("#shared2");
  if (element) {
    mount(element);
  }
}
export { mount };
