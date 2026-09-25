"use client";
import React, { PropsWithChildren } from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const SubmitButton = ({ children }: PropsWithChildren) => {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending} className="w-full mt-2">
            {pending ? (
                <span className="inline-flex items-center gap-2">
          <Loader2 className="animate-spin" />
          Submitting...
        </span>
            ) : (
                children
            )}
        </Button>
    );
};

export default SubmitButton;
