import { Icon } from "@iconify/react/dist/iconify.js";

export const Header = () => {
  return (
    <header className="py-4 flex items-baseline text-xl">
      <a
        href="https://www.greatfrontend.com/questions/react"
        target="_blank"
        rel="noreferrer noopener"
        className="hover:text-amber-300"
      >
        Assignments Source
      </a>
      <h1 className="text-4xl text-indigo-300 px-16">React JS Playground</h1>
      <a
        href="https://github.com/OleksandrKochenko/react"
        target="_blank"
        rel="noreferrer noopener"
        className="hover:text-amber-300 flex items-center"
      >
        <Icon icon={"ri:github-fill"} />{" "}
        <span className="pl-2">GitHub Repo</span>
      </a>
    </header>
  );
};
