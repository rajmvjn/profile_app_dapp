const BlogViewItem: React.FC<{ fType: string; fValue: string }> = ({
  fType,
  fValue,
}) => {
  let cmp = null;
  if (fType === "header") {
    cmp = <h1>{fValue} </h1>;
  }

  if (fType === "sub_header") {
    cmp = <h2>{fValue} </h2>;
  }

  if (fType === "text_content") {
    cmp = <p>{fValue} </p>;
  }

  return <div>{cmp}</div>;
};

export default BlogViewItem;
