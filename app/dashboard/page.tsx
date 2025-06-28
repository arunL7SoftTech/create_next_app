"use client"

import React from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    const back = () => {
        router.push('/')
    }
    return (
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={back} className="bg-blue-500 px-3 py-1 rounded cursor-pointer">Back</button>
        </div>
    )
}