import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PropsWithChildren, ReactElement } from "react";

import ErrorBoundary from "../src/components/ErrorBoundary/ErrorBoundary";

function AllTheProviders() {
  return function withProviders({ children }: PropsWithChildren<object>) {
    return (
      <ErrorBoundary>
        <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
      </ErrorBoundary>
    );
  };
}

function customRender(component: ReactElement, { ...renderOptions }: RenderOptions = {}) {
  return render(component, { wrapper: AllTheProviders(), ...renderOptions });
}

export * from "@testing-library/react";
export { customRender as render };