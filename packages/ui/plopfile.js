export default function (plop) {
  plop.setGenerator("story", {
    description: "Generate a new story",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "input",
        name: "path",
        message: "Component path:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase path}}/{{name}}.stories.tsx",
        templateFile: "plop-templates/story.hbs",
      },
    ],
  });
};
