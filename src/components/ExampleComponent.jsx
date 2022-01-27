export function ExampleComponent() {
  return (
    <div>
      <p>
        I'm a example component that will be showing images inside a subfolder
      </p>
      <div style={{ margin: "20px" }}>
        <img src="assets/one.jpg" alt="example one" width={300} height={300} />
      </div>
      <div style={{ margin: "20px" }}>
        <img src="assets/two.jpg" alt="example two" width={300} height={300} />
      </div>
    </div>
  );
}
