function Form() {
  function submit(formData) {
    const task = formData.get("taskName");
    const stuff = formData.get("category");
    const description = formData.get("description");
    const status = formData.get("status")

    console.log(task, stuff, description,status);
  }

  return (
    <section className="min-h-screen flex justify-center items-center p-10">

      <form
        action={submit}
        className="w-full max-w-xl bg-white p-8 border border-gray-200 rounded-xl shadow-lg"
      >

        <h2 className="text-2xl font-bold text-gray-800">
          Create a Task
        </h2>

        <p className="text-sm text-gray-500 mt-1 mb-7">
          Add the details of your new task below.
        </p>

        {/* Task Name */}
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="taskName"
            className="text-sm font-semibold text-gray-700"
          >
            Task Name
          </label>

          <input
            id="taskName"
            type="text"
            name="taskName"
            placeholder="e.g. Finish React project"
            className="
              w-full
              px-4 py-3
              border border-gray-300
              rounded-lg
              outline-none
              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="stuff"
            className="text-sm font-semibold text-gray-700"
          >
            Category
          </label>

          <input
            id="category"
            type="text"
            name="category"
            placeholder="e.g. Development"
            className="
              w-full
              px-4 py-3
              border border-gray-300
              rounded-lg
              outline-none
              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="description"
            className="text-sm font-semibold text-gray-700"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            placeholder="Describe your task..."
            className="
              w-full
              min-h-30
              px-4 py-3
              border border-gray-300
              rounded-lg
              outline-none
              resize-y
              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>

        <div className="w-full mb-4">
          <select name="status" id="status">
            <option value="">Select Status</option>
            <option value="">Pending</option>
            <option value="">in-progress</option>
            <option value="">completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="
            w-full
            bg-blue-600
            text-white
            font-semibold
            py-3
            rounded-lg
            cursor-pointer
            hover:bg-blue-700
            transition
          "
        >
          Create Task
        </button>

      </form>
    </section>
  );
}

export default Form;