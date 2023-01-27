import { animate, inView } from "motion";

export default function () {
  if (document.querySelectorAll(".social-link").length == 0) {
    return;
  }
  animate("h3", { opacity: 1 }, { duration: 0.5, delay: 0.5 }).finished.then(
    () => {
      inView(".social-link", ({ target }) => {
        animate(target, { opacity: 1 }, { duration: 0.9 });
      });
    }
  );
}
