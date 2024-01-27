import React from "react";
import "./Platforms.scss";
import { platforms } from "../../utils/data";

const Platforms = () => {
  return (
    <section className="platforms">
      <div className="platforms__heading">
        <h4>Top platform</h4>
        <span>See All</span>
      </div>
      <div className="platforms__content">
        {platforms?.map((plat) => (
          <div className="platform" key={plat?.name}>
            <p className="platform__name">{plat?.name}</p>
            <progress
              className={`progressBar ${plat?.color}`}
              value={plat?.progress}
              max="100"
            />
            <div className="platform__analytics">
              <span>{plat?.value}</span>
              <span>{plat?.percent}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Platforms;
