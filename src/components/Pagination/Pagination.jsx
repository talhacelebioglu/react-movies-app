import { useEffect } from "react";
import "./Pagination.css";

const Pagination = ({ page, setPage }) => {
  const prevPage = () => {
    setPage((page) => page - 1);
  };
  const nextPage = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <div className="pagination">
      <div className="button-wrapper">
        {page === 1 ? (
          <button disabled className="btn-prev">
            Prev
          </button>
        ) : (
          <button onClick={prevPage} className="btn-prev">
            Prev
          </button>
        )}
        <span>{page}</span>
        <button onClick={nextPage} className="btn-next">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
