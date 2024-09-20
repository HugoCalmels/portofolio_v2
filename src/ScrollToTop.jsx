import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('fuck u')
    window.scrollTo(0, 0); // Remet la page en haut à chaque changement de route
  }, [pathname]);

  return null; // Ce composant n'a pas de rendu visuel, il agit seulement
};

export default ScrollToTop;