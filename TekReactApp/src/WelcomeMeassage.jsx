function WelcomeMessage(props) {
  return (
    <h3>Welcome, {props.name}!</h3>
  );
}
export function Welcome2React(props) {
  return (
    <h3>Welcome 2, {props.name}!</h3>
  );
}
export default WelcomeMessage;