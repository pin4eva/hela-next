import { serialize, parse } from "cookie";

export const TOKEN_NAME = "token";
export const MAX_AGE = 60 * 60 * 8;

export const setToken = (res, token) => {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE),
    httpOnly: process.NODE_ENV === "production",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
  res.setHeader("Set-Cookie", cookie);
};

export const removeTokenCookie = (res) => {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
};

export const parseCookies = (req) => {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || "");
};

export const getTokenCookie = (req) => {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
};
