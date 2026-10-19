import Button from "./Button";

function BackToHome({ label = "Back to home" }) {
  return <Button to="/">{label}</Button>;
}

export default BackToHome;
