import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import classNames from "classnames";

import styles from "./ProjectBar.module.css";

type ProjectBarProps = {
  project: {
    titleAndShortDesc: string;
    images: {
      src: string;
    }[];
    fullDescription: string;
  };
};

export const ProjectBar = ({ project }: ProjectBarProps) => {
  const [showExpandedBar, setShowExpandedBar] = useState(false);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  return (
    <>
      <div className={classNames(styles.projectBarContainer, "container")}>
        <div
          className={classNames(styles.projectInfoContainer, "row")}
          onClick={() => setShowExpandedBar(!showExpandedBar)}
        >
          <span className={classNames(styles.projectTitle, "col-10")}>
            {project.titleAndShortDesc}
          </span>
          <span className={classNames(styles.expandButton, "col-2")}>
            <Image
              src={
                showExpandedBar
                  ? "/icons/angle-down-solid.svg"
                  : "/icons/angle-right-solid.svg"
              }
              width={15}
              height={15}
              alt=""
              priority
            />
          </span>
        </div>
        <Collapse in={showExpandedBar}>
          <div>
            <div className={styles.image} onClick={() => setLightBoxOpen(true)}>
              <Image src={project.images[0].src} alt="" fill />
            </div>
            <div className={styles.expandedInfo}>
              <div className={styles.description}>
                {project.fullDescription}
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <Lightbox
        open={lightBoxOpen}
        close={() => setLightBoxOpen(false)}
        slides={project.images}
      />
    </>
  );
};
