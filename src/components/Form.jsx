function Form() {
  function submit(formData) {
    const task = formData.get("taskName");
    console.log(task);
  }
  return (
    <form className="bg-amber-200 flex flex-col" action={submit}>
      <div>
        <label htmlFor="taskName">Task</label>
        <input id="taskName" type="text" name="textName" />

        <label htmlFor="">Task</label>
        <input id="text" type="text" name="text" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>

        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
