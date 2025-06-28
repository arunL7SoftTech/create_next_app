export async function GET(req) {
    const type = req.nextUrl.searchParams.get("type");
    console.log("Type:", type);
    
    return Response.json([
        {title: "Banana"},
        {title: "Apple"},
        {title: "Grapes"},
    ])
}

export async function POST(req) {
    const body = await req.json();
    console.log("Body data:", body);
    
    return Response.json({message: "POST Success!!"})
}