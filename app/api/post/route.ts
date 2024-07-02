import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";

export async function GET(req: Request) {
    const allBBSPosts = await prisma.post.findMany();   // findMany()で全て取得。本来ならば10件ごとに取得などページネーションを実装
    return NextResponse.json(allBBSPosts);
}

// export async function POST(req: Request) {
//     const {username, title, content} = await req.json();
//     const post = await prisma.post.create({
//         data: {
//             username,
//             title,
//             content,
//         },
//     });
//     return NextResponse.json(post);
// }
