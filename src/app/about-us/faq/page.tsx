import { getFAQSection } from "@/lib/queries";
import { Question } from "@/lib/types";

export default async function Page() {
  const { _id, title, question } = await getFAQSection();

  // Group questions by category name
  const categories: Question = question.reduce((acc: any, q: any) => {
    const cat = q.category?.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(q);
    return acc;
  }, {});

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">
        <span className="redUnderline">{title}</span>
      </h2>
      {Object.entries(categories).map(([catName, questions]: any, catIndex) => (
        <div key={catIndex} className="mb-4">
          <h3 className="mb-3">{catName}</h3>
          <div className="accordion" id={`accordion-${catIndex}`}>
            {questions.map((q: any, index: number) => {
              const headingId = `heading-${catIndex}-${index}`;
              const collapseId = `collapse-${catIndex}-${index}`;
              return (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                      aria-expanded="false"
                      aria-controls={collapseId}
                    >
                      {q.question}
                    </button>
                  </h2>
                  <div
                    id={collapseId}
                    className="accordion-collapse collapse"
                    aria-labelledby={headingId}
                    data-bs-parent={`#accordion-${catIndex}`}
                  >
                    <div className="accordion-body">{q.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
