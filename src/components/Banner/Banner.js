import "./Banner.css";

export default function Banner() {

  // REALTIME GREETING
  const date = new Date();
  const hour = date.getHours();

  // CONTENT
  return (
    <div className="banner-wrap">
      <h2 className="banner-subtitle">
        {hour >= 12
          ? hour >= 17
            ? "Good Evening"
            : "Good Afternoon"
          : "Good Morning"}
      </h2>
      <h3 className="banner-title">Here are The SpaceX Launch-Pads</h3>
    </div>
  );
}
