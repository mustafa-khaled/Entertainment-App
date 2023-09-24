function Container({ children, styles }) {
  return <div className={`container mx-auto ${styles}`}>{children}</div>;
}

export default Container;
