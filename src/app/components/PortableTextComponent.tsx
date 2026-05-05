import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="fw-bold mt-5 mb-3 border-bottom pb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <>
        <hr className="my-5" />
        <h2 className="fw-bold mb-3" style={{ fontSize: "1.6rem" }}>
          {children}
        </h2>
      </>
    ),
    h3: ({ children }) => (
      <>
        <hr className="my-5" />
        <h3
          className="fw-bold mt-4 mb-2 ps-3"
          style={{
            color: "#e21919",
            borderLeft: "3px solid #e21919",
          }}
        >
          {children}
        </h3>
      </>
    ),
    h4: ({ children }) => <h4 className="fw-semibold mt-3 mb-2">{children}</h4>,
    normal: ({ children }) => (
      <p className="mb-3" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="blockquote border-start border-danger border-3 ps-3 my-4 text-muted">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-3 ps-4" style={{ lineHeight: "1.8" }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-3 ps-4" style={{ lineHeight: "1.8" }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="fw-bold">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-danger"
      >
        {children}
      </a>
    ),
  },
};
