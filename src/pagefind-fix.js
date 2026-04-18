if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", async () => {
      const PagefindUI = (await import("@pagefind/default-ui")).default;
  
      new PagefindUI({
        element: "#search",
        basePath: "/e-klaim-doc/pagefind"
      });
    });
  }