import { NextResponse } from "next/server"

const users=[
    {
        name:"swapneel",
        age:23,
        id:1
    },
    {
        name:"muskan",
        age:21,
        id:2
    },
    {
        name:"milind",
        age:25,
        id:3
    },
    
]
//get api

export function GET(request){
    return NextResponse.json(users)
}

//delete api
export function DELETE(){
    return NextResponse.json({message:"deleted",
status:true},{status:201,statusText:"OK HERE"})
}