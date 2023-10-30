import { useState, useEffect } from "react";

export function useLocalStorageState(initalValue) {
  const [watched, setWatched] = useState(function () {
    const storedValues = localStorage.getItem("watched");
    return storedValues ? JSON.parse(storedValues) : initalValue;
  });
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );
  return {watched,setWatched};
}
