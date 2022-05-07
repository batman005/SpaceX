import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLaunches } from "../../models/actions/useLaunch";
import altImage from "../../assets/alt-image.jpg";
import Skeleton from "react-loading-skeleton";

import "../LaunchCard/LaunchCard.css";
// import {options} from '../../models/actions/useNews'
export const LaunchesCard= () => {
  const dispatch = useDispatch();
  const launchesList = useSelector((state) => state.launchesList);
  const { loading, error, launches } = launchesList;
  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);

  return (
    <div className="card-grid bottom-collapse">
      {loading ? (
        <div className="loader-wrap">
          <Skeleton
            className="skeleton-loader"
            count={6}
            width={25 * 16}
            height={20 * 16}
          />
        </div>
      ) : error ? (
        <>
          <div></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>It's a {error.message}.</h2>
            <h4>Check Your Connection & Try Again.</h4>
          </div>
          <div></div>
        </>
      ) : (
        launches.map((n) => (
          <div className="news-card" key={n.title}>
            <div className="image-wrap">
              <img
                src={n.links.patch.small || altImage}
                className="card-image news-card-image"
                alt={altImage}
              />
            </div>
            <div>
              <h5 className="card-title">{n.name}</h5>
              <p className="card-subtext">
                {n.details
                  ? n.details
                  : "No details available."}
              </p>
              <p className="card-subtext">
  
               Date:- {n.date_utc
                  ? n.date_utc
                  : "No current Status Available."}
              </p>
              <p className="card-subtext">
                 {n.failures.map((c) => 
                    <li>
                      {c.times}
                    </li>
                 )}
                            </p>
            </div>
          </div>
        ))
      )}
      <div style={{ marginBottom: "20vh" }} />
    </div>
  );
};