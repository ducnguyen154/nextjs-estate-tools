import React from "react";
import type { Preview } from "@storybook/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../src/styles/globals.css";

const clientQuery = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (story) => (
      <QueryClientProvider client={clientQuery}>
        {story()}
        <ReactQueryDevtools />
      </QueryClientProvider>
    ),
  ],
};

if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/workers");
  worker.start();
}

export default preview;
