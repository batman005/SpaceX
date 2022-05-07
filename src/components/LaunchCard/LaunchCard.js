import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLaunch } from "../../models/actions/useLaunch";
import altImage from "../../assets/alt-image.jpg";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import "./LaunchCard.css";
// import {options} from '../../models/actions/useNews'
export const LaunchCards = () => {
  const dispatch = useDispatch();
  const launchList = useSelector((state) => state.launchList);
  const { loading, error, launch } = launchList;
  useEffect(() => {
    dispatch(getLaunch());
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
        launch.map((n) => (
          <div className="news-card" key={n.title}>
            <div className="image-wrap">
              <img
                src={n.images.large || altImage}
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
               Status:- {n.status
                  ? n.status
                  : "No current Status Available."}
              </p>
              <Link to ="/launches">
              <p className="card-subtext">
                Launches :- {n.launches.slice(0,3) ||  "No Launche Available."}
              </p>
              </Link>
            </div>
          </div>
        ))
      )}
      <div style={{ marginBottom: "20vh" }} />
    </div>
  );
};
