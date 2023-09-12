import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/DatePicker";
import "@ui5/webcomponents/dist/Input";

function App() {
  let task, due;

  function doSomething() {
    console.log(task.value, due.value);
    alert(`Task: ${task.value} Due: ${due.value}`);
  }

  return (
    <section>
      <ui5-input ref={task} placeholder="Enter task here"></ui5-input>
      <ui5-date-picker ref={due} format-pattern="dd/MM/yyyy"></ui5-date-picker>
      <ui5-button on:click={doSomething} design="Emphasized">
        Add
      </ui5-button>
    </section>
  );
}

export default App;
