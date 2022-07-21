interface Comment {
  userId: string;
  comment: string;
}

export interface Blog {
  userId: string | null | undefined;
  blogs: {
    fieldTypes: string[];
    fieldValues: string[];
  };
  comments?: Comment[];
}

interface Blogs {
  blogs: Blog[];
}
export default Blogs;
