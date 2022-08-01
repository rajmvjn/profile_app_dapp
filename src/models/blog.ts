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
  _id?: string;
}

interface Blogs {
  blogs: Blog[];
}
export default Blogs;
