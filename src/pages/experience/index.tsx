import Head from "next/head";
import ProjectBar from "@/components/Project/ProjectBar";

import projects from "./projects.json";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {projects.map((project, i) => (
          <ProjectBar key={i} project={project} />
        ))}
      </main>
    </>
  );
}
