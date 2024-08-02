import { render } from "@testing-library/react";
import App from "./App";

jest.mock("react-scroll", () => ({
  Element: "Element",
}));
jest.mock("./containers/Header", () => "Header");
jest.mock("./containers/AppIntro", () => "AppIntro");
jest.mock("./containers/Events", () => "Events");
jest.mock("./containers/Notices", () => "Notices");
jest.mock("./containers/PreOrder", () => "PreOrder");
jest.mock("./containers/HowToUse", () => "HowToUse");
jest.mock("./containers/Footer", () => "Footer");
jest.mock("./containers/NavBar", () => "NavBar");

describe("App", () => {
  it("renders learn react link", () => {
    render(<App />);
  });
});
