//rrd imports
import { useParams } from "react-router-dom";

//custom hook
import { useFetch } from "../hooks/useFetch";

//  react hooks
import { useEffect } from "react";
import { Test } from "../components";

const Quiz = () => {
  const { title } = useParams();

  const { data: quizzes, isPending, error } = useFetch(`https://online-json-server-api.up.railway.app/project/66b10cfb340dd55056fb3f1b/quizzes?title=${title}`);

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <section className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {quizzes && <Test questions={quizzes.data[0]} />}
    </section>
  );
};

export default Quiz;
