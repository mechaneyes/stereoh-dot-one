import React from "react";

const RelatedItems = () => {
  return (
    <>
      <nav className="related-nav">
        <ul>
          <li
            className={`${extras === 0 ? "active-item" : ""}`}
            onClick={() => setExtras(0)}
          >
            earlier
          </li>
          <li
            className={`${extras === 1 ? "active-item" : ""}`}
            onClick={() => setExtras(1)}
          >
            you may also like
          </li>
          <li
            className={`${extras === 2 ? "active-item" : ""}`}
            onClick={() => setExtras(2)}
          >
            details
          </li>
        </ul>
      </nav>
      <section className="related-content">
        <div className="related-grid">{relatedList}</div>
      </section>
    </>
  );
};

export default RelatedItems;
