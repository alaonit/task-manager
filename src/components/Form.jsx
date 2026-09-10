

function Form(){

  function submit(formData){
    const task = FormData.get()
  }
  return(
    <form action={submit}>
      <label htmlFor="">Task</label>
      <input id="taskName" type="text" name="text" />

      <label htmlFor="">Task</label>
      <input id="text" type="text" name="text" />

      <label htmlFor="description">Description</label>
      <textarea name="description" id="description"></textarea>
    </form>
  )
}

export default Form;