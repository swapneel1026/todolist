import { NextResponse } from "next/server";

export function DELETE(request,{params}){
    console.log(request);
    return NextResponse.json("Deleted")
}