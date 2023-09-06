import { NextResponse } from "next/server";

export function GET(request,{params}){
    return NextResponse.json(`${params.userid} has sent post number ${params.postid}`)

}