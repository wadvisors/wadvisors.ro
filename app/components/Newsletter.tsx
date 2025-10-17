import { useEffect, useRef } from "react";

export default function EmailOctopusForm() {
  const formContainerRef = useRef(null);

  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src =
      "https://eocampaign1.com/form/7d3bcae8-a821-11f0-843f-0394a5360317.js";
    script.async = true;
    script.dataset.form = "7d3bcae8-a821-11f0-843f-0394a5360317";

    container.appendChild(script);

    return () => {
      container.innerHTML = ""; // cleanup on unmount
    };
  }, []);

  return (
    <div
      className="mx-auto p-4 md:py-8 border-t w-full flex justify-center border-t-base-100"
      ref={formContainerRef}
    />
  );
}
