import { Link } from "react-router-dom";
import { useState } from "react";
import pages from "@/Navigation/FrontEndPages/Pages";
import { Page, Subpage } from "@/Navigation/FrontEndPages/NavigationTypes";
// Define an array of page objects with subpages

// Prepare the navigation data for rendering
const navigationPages: Page[] = pages;


//       {
//         name: "Frameworks",
//         subpages: [
//           {
//             name: "Django",
//             subpages: [
//               { name: "Django Notes", path: "/django" },
//               { name: "Django Code Notes", path: "/django/djangocode" },
//             ],
//           },
//           {
//             name: "Express.js",
//             subpages: [
//               { name: "Express.js Notes", path: "/express" },
//               { name: "Express.js Code Notes", path: "/express/expresscode" },
//             ],
//           },
//           {
//             name: "Flask",
//             subpages: [
//               { name: "Flask Notes", path: "/flask" },
//               { name: "Flask Code Notes", path: "/flask/flaskcode" },
//             ],
//           },
//           {
//             name: "Koa.js",
//             subpages: [
//               { name: "Koa.js Notes", path: "/koa" },
//               { name: "Koa.js Code Notes", path: "/koa/koacode" },
//             ],
//           },
//           {
//             name: "MERN",
//             subpages: [
//               { name: "MERN Notes", path: "/mern" },
//               { name: "MERN Code Notes", path: "/mern/merncode" },
//             ],
//           },
//           {
//             name: "Node.js",
//             subpages: [
//               { name: "Node.js Notes", path: "/node" },
//               { name: "Node.js Code Notes", path: "/node/nodecode" },
//             ],
//           },
//           {
//             name: "Ruby",
//             subpages: [
//               { name: "Ruby Notes", path: "/ruby" },
//               { name: "Ruby Code Notes", path: "/ruby/rubycode" },
//               {
//                 name: "Ruby on Rails",
//                 subpages: [
//                   { name: "Ruby on Rails Notes", path: "/ruby/rubyonrails" },
//                   { name: "Ruby on Rails Code Notes", path: "/ruby/rubyonrails/rubyonrailscode" },
//                 ],
//               },
//             ],
//           },
//           {
//             name: "Spring Boot",
//             subpages: [
//               { name: "Spring Boot Notes", path: "/springboot" },
//               { name: "Spring Boot Code Notes", path: "/springboot/springbootcode" },
//             ],
//           },
//           {
//             name: "WebSockets",
//             subpages: [
//               { name: "WebSockets Notes", path: "/websockets" },
//               { name: "WebSockets Code Notes", path: "/websockets/websocketscode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "GraphQL & Apollo",
//         subpages: [
//           {
//             name: "GraphQL",
//             subpages: [
//               { name: "GraphQL Notes", path: "/graphql" },
//               { name: "GraphQL Code Notes", path: "/graphql/graphqlcode" },
//             ],
//           },
//           {
//             name: "Apollo Server",
//             subpages: [
//               { name: "Apollo Server Notes", path: "/apolloserver" },
//               { name: "Apollo Server Code Notes", path: "/apolloserver/apolloservercode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Servers",
//         subpages: [
//           {
//             name: "General Server Concepts",
//             subpages: [
//               { name: "General Server Notes", path: "/servers/general" },
//               { name: "General Server Code Notes", path: "/servers/general/servercode" },
//             ],
//           },
//           {
//             name: "Nginx",
//             subpages: [
//               { name: "Nginx Notes", path: "/servers/nginx" },
//               { name: "Nginx Code Notes", path: "/servers/nginx/nginxcode" },
//             ],
//           },
//           {
//             name: "Apache",
//             subpages: [
//               { name: "Apache Notes", path: "/servers/apache" },
//               { name: "Apache Code Notes", path: "/servers/apache/apachecode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Databases",
//         subpages: [
//           {
//             name: "Firebase",
//             subpages: [
//               { name: "Firebase Notes", path: "/databases/firebase" },
//               { name: "Firebase Code Notes", path: "/databases/firebase/firebasecode" },
//             ],
//           },
//           {
//             name: "MongoDB",
//             subpages: [
//               { name: "MongoDB Notes", path: "/databases/mongodb" },
//               { name: "MongoDB Code Notes", path: "/databases/mongodb/mongodbcode" },
//             ],
//           },
//           {
//             name: "MySQL",
//             subpages: [
//               { name: "MySQL Notes", path: "/databases/mysql" },
//               { name: "MySQL Code Notes", path: "/databases/mysql/mysqlcode" },
//             ],
//           },
//           {
//             name: "PostgreSQL",
//             subpages: [
//               { name: "PostgreSQL Notes", path: "/databases/postgresql" },
//               { name: "PostgreSQL Code Notes", path: "/databases/postgresql/postgresqlcode" },
//             ],
//           },
//           {
//             name: "Redis",
//             subpages: [
//               { name: "Redis Notes", path: "/databases/redis" },
//               { name: "Redis Code Notes", path: "/databases/redis/rediscode" },
//             ],
//           },
//           {
//             name: "SQLite",
//             subpages: [
//               { name: "SQLite Notes", path: "/databases/sqlite" },
//               { name: "SQLite Code Notes", path: "/databases/sqlite/sqlitecode" },
//             ],
//           },
//         ],
//       },
//     ],
//   },  
//   {
//     name: "Tools",
//     subpages: [
//       {
//         name: "API Tools",
//         subpages: [
//           {
//             name: "Insomnia",
//             subpages: [
//               { name: "Insomnia Notes", path: "/tools/api/insomnia" },
//               { name: "Insomnia Code Notes", path: "/tools/api/insomnia/insomniacode" },
//             ],
//           },
//           {
//             name: "Postman",
//             subpages: [
//               { name: "Postman Notes", path: "/tools/api/postman" },
//               { name: "Postman Code Notes", path: "/tools/api/postman/postmancode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "CI/CD Tools",
//         subpages: [
//           {
//             name: "CircleCI",
//             subpages: [
//               { name: "CircleCI Notes", path: "/tools/cicd/circleci" },
//               { name: "CircleCI Code Notes", path: "/tools/cicd/circleci/circlecicode" },
//             ],
//           },
//           {
//             name: "Jenkins",
//             subpages: [
//               { name: "Jenkins Notes", path: "/tools/cicd/jenkins" },
//               { name: "Jenkins Code Notes", path: "/tools/cicd/jenkins/jenkinscode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Code Quality",
//         subpages: [
//           {
//             name: "ESLint",
//             subpages: [
//               { name: "ESLint Notes", path: "/tools/codequality/eslint" },
//               { name: "ESLint Code Notes", path: "/tools/codequality/eslintcode" },
//             ],
//           },
//           {
//             name: "Prettier",
//             subpages: [
//               { name: "Prettier Notes", path: "/tools/codequality/prettier" },
//               { name: "Prettier Code Notes", path: "/tools/codequality/prettiercode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Package Management & Bundling",
//         subpages: [
//           {
//             name: "Babel",
//             subpages: [
//               { name: "Babel Notes", path: "/tools/packaging/babel" },
//               { name: "Babel Code Notes", path: "/tools/packaging/babel/babelcode" },
//             ],
//           },
//           {
//             name: "Webpack",
//             subpages: [
//               { name: "Webpack Notes", path: "/tools/packaging/webpack" },
//               { name: "Webpack Code Notes", path: "/tools/packaging/webpack/webpackcode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Containerization",
//         subpages: [
//           {
//             name: "Docker",
//             subpages: [
//               { name: "Docker Notes", path: "/tools/containerization/docker" },
//               { name: "Docker Code Notes", path: "/tools/containerization/docker/dockercode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Git",
//         subpages: [
//           { name: "Git Notes", path: "/git" },
//           { name: "Git Code Notes", path: "/git/gitcode" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Testing",
//     subpages: [
//       {
//         name: "End-to-End Testing",
//         subpages: [
//           {
//             name: "Cypress Testing",
//             subpages: [
//               { name: "Cypress Testing Notes", path: "/testing/e2e/cypress" },
//               { name: "Cypress Testing Code Notes", path: "/testing/e2e/cypresscode" },
//             ],
//           },
//           {
//             name: "Playwright",
//             subpages: [
//               { name: "Playwright Notes", path: "/testing/e2e/playwright" },
//               { name: "Playwright Code Notes", path: "/testing/e2e/playwrightcode" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Framework Testing",
//         subpages: [
//           {
//             name: "Jest",
//             subpages: [
//               { name: "Jest Notes", path: "/testing/framework/jest" },
//               { name: "Jest Code Notes", path: "/testing/framework/jestcode" },
//             ],
//           },
//           {
//             name: "Vitest",
//             subpages: [
//               { name: "Vitest Notes", path: "/testing/framework/vitest" },
//               { name: "Vitest Code Notes", path: "/testing/framework/vitestcode" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Programming Languages",
//     subpages: [
//       {
//         name: "Python",
//         subpages: [
//           { name: "Python Notes", path: "/python" },
//           { name: "Python Code Notes", path: "/python/pythoncode" },
//         ],
//       },
//       {
//         name: "Rust",
//         subpages: [
//           { name: "Rust Notes", path: "/rust" },
//           { name: "Rust Code Notes", path: "/rust/rustcode" },
//         ],
//       },
//       {
//         name: "TypeScript",
//         subpages: [
//           { name: "TypeScript Notes", path: "/typescript" },
//           { name: "TypeScript Code Notes", path: "/typescript/typescriptcode" },
//         ],
//       },
//     ],
//   },
// ];

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => {
      const newDropdowns = new Set(prev);
      if (newDropdowns.has(key)) {
        newDropdowns.delete(key); // Close the dropdown if it's already active
      } else {
        newDropdowns.add(key); // Open the dropdown
      }
      return newDropdowns;
    });
  };

  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level: number = 1
  ) => {
    return subpages.map((subpage, index) => {
      const key = `${parentKey}-${index}`;
      const isActive = activeDropdown.has(key);

      return (
        <div key={key} className={`dropdownItem level-${level}`}>
          {subpage.path ? (
            <Link to={subpage.path} className="dropdownLink">
              {subpage.name}
            </Link>
          ) : (
            <>
              <button
                className={`dropdownButton level-${level}`}
                onClick={() => toggleDropdown(key)}
              >
                {subpage.name}
              </button>
              {isActive && subpage.subpages && (
                <div className={`dropdownMenu level-${level} active`}>
                  {renderSubpages(subpage.subpages, key, level + 1)}
                </div>
              )}
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="navigationMenu">
      <div className="navigationContent">
        {navigationPages.map((page, index) => {
          const pageKey = `page-${index}`;
          const isActive = activeDropdown.has(pageKey);

          return (
            <div key={pageKey} className="dropdown">
              <button
                className="dropdownButton"
                onClick={() => toggleDropdown(pageKey)}
              >
                {page.name}
                {page.subpages.length > 0 && (
                  <span className={`dropdownArrow ${isActive ? "up" : "down"}`} />
                )}
              </button>
              {isActive && page.subpages.length > 0 && (
                <div className="dropdownContent active">
                  {renderSubpages(page.subpages, pageKey)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
