import { useParams } from "react-router-dom";
import { getTask } from "../../services/posts";
import { useEffect, useState } from "react";
import FormUpdateCard from "../../components/card/FormUpdateCard";

const PageEditCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTask(id).then((data) => {
      setCard(data.task);
      setLoading(false);
    });
  }, []);

  if (loading) return;

  return (
    <>
      <FormUpdateCard card={card} />
    </>
  );
};

export default PageEditCard;
