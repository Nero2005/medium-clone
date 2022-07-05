export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  comments: [Comment];
  slug: { current: string };
  author: {
    name: string;
    image: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: [object];
}

export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
