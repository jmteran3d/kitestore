import { useEffect } from "react";


export const useTitle = ({ title }) => {
  useEffect(() => {
    const capitalizedTitle = title.charAt(0).toLocaleUpperCase() + title.slice(1);
    document.title = `KiteStore - ${capitalizedTitle}`;
  }, [title]);
};
