function Form() {
  function submit(formData) {
    const task = formData.get("taskName");
    console.log(task);
  }
  return (
    <form className="bg-amber-200" action={submit}>
      <div className="flex flex-col w-2xl">
        <label htmlFor="taskName">Task</label>
        <input id="taskName" type="text" name="textName" />

        <label htmlFor="stuff">Stuff</label>
        <input id="stuff" type="text" name="stuff" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>

        <button className="bg-green-500 p-2">Submit</button>
      </div>
    </form>
  );
}

export default Form;
