// base-rules.js
import importPlugin from "eslint-plugin-import";
import turboPlugin from "eslint-plugin-turbo";

export const basePlugins = {
  import: importPlugin,
  turbo: turboPlugin,
};

export const baseRules = {
  "turbo/no-undeclared-env-vars": "warn",
  "import/order": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        ["sibling", "parent"],
        "index",
        "object",
        "type",
      ],
      pathGroups: [
        {
          pattern: "@/**",
          group: "internal",
        },
        {
          pattern: "@on/**",
          group: "internal",
          position: "after",
        },
      ],
      pathGroupsExcludedImportTypes: ["builtin"],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
};
