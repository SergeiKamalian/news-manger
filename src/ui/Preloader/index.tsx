import { memo, useEffect, useState } from "react";

export const Preloader = memo(() => {
  const [loaded, setLoaded] = useState(false);
  console.log({ loaded });

  useEffect(() => {
    const fontsLoaded = document.fonts.ready;

    const images = Array.from(document.images);
    const imagePromises = images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete && img.naturalHeight !== 0) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        })
    );

    Promise.all([fontsLoaded, ...imagePromises]).then(() => {
      setLoaded(true);
    });
  }, []);
  if (!loaded)
    return <div className="fixed inset-0 w-full h-full bg-black z-50"></div>;
  return null;
  //   return (
  //     <StyledPreloader
  //       $isVisible={!loaded}
  //       $isNavigateLoading={isNavigateLoading}
  //     >
  //       <img src="../../../logo.svg" alt="Logo" />
  //     </StyledPreloader>
  //   );
});

// const StyledPreloader = styled.div<{
//   $isVisible: boolean;
//   $isNavigateLoading: boolean;
// }>`
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   background: #0c111d;
//   z-index: 99999;
//   opacity: ${(p) => (p.$isVisible || p.$isNavigateLoading ? "1" : "0")};
//   visibility: ${(p) =>
//     p.$isVisible || p.$isNavigateLoading ? "visible" : "hidden"};
//   transition: ${(p) =>
//     `opacity ${
//       p.$isNavigateLoading ? "0.2s" : "0.6s"
//     } ease-in-out, visibility ${
//       p.$isNavigateLoading ? "0.2s" : "0.6s"
//     } ease-in-out`};
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @keyframes pulse {
//     0% {
//       transform: scale(1);
//       opacity: 1;
//     }
//     50% {
//       transform: scale(1.02);
//     }
//     100% {
//       transform: scale(1);
//       opacity: 1;
//     }
//   }

//   > img {
//     zoom: 2;
//     animation: pulse 2s ease-in-out infinite;
//   }
// `;
