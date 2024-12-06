import { useEffect } from "react";

export const PokemonLoading = () => {
  useEffect(() => {
    Object.assign(document.body.style, styles.global);
  }, []);
  return (
    <div style={styles.container}>
      <img
        alt="Pokemon loading theme"
        style={styles.image}
        data-id="4254712"
        data-animated-url="https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif"
        skip_resize="true"
        srcSet="
          https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif 320w,
          https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif 400w,
          https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif 450w,
          https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif 640w,
          https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif 700w,
          https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif 800w,
          https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif 768w
        "
        sizes="(max-width: 919px) 100vw, max(768px, 98vh)"
        src="https://cdn.dribbble.com/users/2105727/screenshots/4254712/media/8abc37a1ca5363cdfaa55a09fff7f680.gif"
      />
    </div>
  );
};

const styles = {
  global: {
    margin: 0,
    padding: 0,
    backgroundColor: "##FFCB05", // Matches the container background
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    height: "100svh", // Modern units for better viewport handling
    padding: "10px",
    backgroundColor: "#FFCB05",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
};
