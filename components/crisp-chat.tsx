"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    
    useEffect(() => {
        Crisp.configure("d34cee71-a128-41c3-b066-0789510f85b4");
    }, []);

    return null;
};