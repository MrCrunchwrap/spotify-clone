import { NextRequest, NextResponse } from "next/server";

const PAGES_TO_VALIDATE = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (PAGES_TO_VALIDATE.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
