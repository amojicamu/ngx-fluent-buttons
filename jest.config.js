const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/sample',
    '<rootDir>/libs/ngx-fluent-buttons',
  ],
};
