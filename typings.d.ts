export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };

  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Terms {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  body: [object];
}

export interface Reviews {
  _id: string;
  name: string;
  stars: string;
  title: string;
  review: string;

  reviewimg: {
    asset: {
      url: string;
    };
  };
}
