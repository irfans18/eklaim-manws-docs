if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", async () => {
      try {
        const PagefindUI = (await import("@pagefind/default-ui")).default;
  
        console.log("Pagefind init...");
  
        new PagefindUI({
          element: "#search",
          basePath: "/e-klaim-doc/pagefind"
        });
  
      } catch (e) {
        console.error("Pagefind failed:", e);
      }
    });
  }