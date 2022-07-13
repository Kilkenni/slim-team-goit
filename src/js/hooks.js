import { useState, useEffect } from "react";

//custom hook to check media queries inside JavaScript
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query); //check query
    if (media.matches !== matches) {
      setMatches(media.matches); //match status changed, save it
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener); //cleanup function to delete listener on component dismount
  }, [matches, query]);

  return matches;
}

export {
  useMediaQuery,
};