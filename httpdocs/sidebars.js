const sidebarHttpDocs = {
  httpdocs: [
    {
      type: "category",
      label: "OpenAPI",
      items: [
        {
          type: "category",
          label: "/server/v1",
          items: [
            { type: "doc", id: "server/v1/api" },
            { type: "doc", id: "server/v1/admin" },
            { type: "doc", id: "server/v1/auth" },
            { type: "doc", id: "server/v1/health" },
            { type: "doc", id: "server/v1/observability" },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebarHttpDocs;
