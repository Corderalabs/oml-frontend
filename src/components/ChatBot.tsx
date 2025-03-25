"use client";
import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

export default function ChatBot() {
  const pathname = usePathname();

  // Define the pages where the widget should appear
  const allowedPages = useMemo(() => ["/", "/about", "/contact"], []);

  useEffect(() => {
    // Check if the current page is in allowedPages
    // if (!allowedPages.includes(pathname)) return;

    var Tawk_API = (window as any).Tawk_API || {},
      Tawk_LoadStart = new Date();

    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/67e16e51c8103119149b166e/1in49dsa9";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, [pathname, allowedPages]); // Re-run when the route changes

  return null; // This component only loads the script, no UI
}

{
  /* <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/67e16e51c8103119149b166e/1in49dsa9';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script> */
}
