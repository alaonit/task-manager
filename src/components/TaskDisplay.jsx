function TaskDisplay({ tasks,deleteTask }) {

  return (
    <div className="p-8">
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm overflow-x-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ID</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Task</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Description</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
          </tr>
        </thead>

        <tbody >
          {tasks.map((task) => {
            return (
              <tr className="m-1" key={task.id}>
                <td className="font-bold p-2">{task.id}</td>
                <td>{task.taskName}</td>
                <td>{task.category}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td onClick={()=>deleteTask(task.id)} className="mb-1 p-2.5 border-1 border-blue-600 bg-white text-red-600 rounded-md cursor-pointer text-center">x</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskDisplay;
