

function TaskDisplay({tasks}){
  return(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Category</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task)=>{
          return(
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.taskName}</td>
              <td>{task.category}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TaskDisplay