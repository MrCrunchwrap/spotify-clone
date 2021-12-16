import fetcher from "./fetcher";

export const auth = (
  mode: "signin" | "signup",
  body: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }
) => {
  return fetcher(`/${mode}`, body);
};

export const addLike = (body) => {
  return fetcher(`/liked/add`, body);
};

export const unlike = (body) => {
  return fetcher(`/unlike`, body);
};
