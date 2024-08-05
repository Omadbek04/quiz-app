//hooks
import { useFetch } from "../hooks/useFetch";
//rrd imports
import { Link } from "react-router-dom";

const MenuLinks = () => {
  const { data: quizzes, isPending, error } = useFetch("https://online-json-server-api.up.railway.app/project/66b10cfb340dd55056fb3f1b/quizzes");
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes?.data.map((quiz) => {
          return (
            <Link to={`/quiz/${quiz.title}`} key={quiz.title} className="menu-item header-logo">
              <figure style={{ backgroundColor: quiz.color }}>
                <img src={quiz.icon} alt={quiz.title} />
              </figure>
              <span>{quiz.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuLinks;
