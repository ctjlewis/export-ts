import { Template } from '../template';

interface ProjectArgs {
  name: string;
  author: string;
}
export const composePackageJson =
  (template: Template) =>
  ({ name, author }: ProjectArgs) => {
    return {
      ...template.packageJson,
      name,
      author,
      'size-limit': [
        {
          path: `dist/${name}.cjs`,
          limit: '10 KB',
        },
        {
          path: `dist/${name}.mjs`,
          limit: '10 KB',
        },
      ],
    };
  };
