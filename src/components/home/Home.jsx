import { selectState } from '../../features/TodoSlice';
import { useSelector } from 'react-redux';
import './home.css';
const Home = () => {
  return (
      <main className='home'>
          <div className='main-heading'>
              <h1 className='heading'>Maximize Your Productivity with Our Task Manager App</h1>
              <p>Organize your tasks efficiently and achieve your goals effortlessly with our intuitive and user-friendly task manager app. </p>
          </div>
          <main>
              <Ranking />
          </main>
    </main>
  )
}

export default Home;


export const Ranking = () => {
  const todos = useSelector(selectState);
  const completedTodos = todos.filter(todo => todo.completed !== false);
  return (
    <>
      <div className='ranking-box-container'>
        <div className='ranking-box'>
          <i className="fa-solid fa-list ranking-icons total-task"></i>
          <h3>Total Tasks: <span className=''>{ todos.length }</span></h3>
        </div>
        <div className='ranking-box'>
          <i className="fa-sharp fa-solid fa-bag-shopping ranking-icons pending-task"></i>
          <h3>Pending Tasks: <span className=''>{ todos.length - completedTodos.length }</span></h3>
        </div>
        <div className='ranking-box'>
          <i className="fa-solid fa-circle-check ranking-icons completed-task"></i>
          <h3>Completed Tasks: <span className=''>{ completedTodos.length }</span></h3>
        </div>
      </div>
    </>
  )
}
