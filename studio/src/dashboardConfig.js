export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f08772578bcd11e5a618f9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-1ny2os9f",
                  apiId: "aedce1a1-8207-4f01-ba78-d5443a7599e6",
                },
                {
                  buildHookId: "60f08773a6205611bf847a82",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4zi859zf",
                  apiId: "5fe3eca3-911b-4a49-ae59-75000d63aa21",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dieglitter/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4zi859zf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
