"use client";

import React, { useActionState, useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signUp } from "@/lib/auth";

const SignUpForm = () => {
    const [state, action] = useActionState(signUp, undefined);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form action={action} className="flex flex-col gap-4">
            {state?.message && (
                <p
                    role="alert"
                    className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                    {state.message}
                </p>
            )}

            <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                    <User className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        autoComplete="name"
                        className="pl-8"
                        aria-invalid={!!state?.error?.name}
                    />
                </div>
                {state?.error?.name && (
                    <p className="text-sm text-destructive">
                        {state.error.name.join(" ")}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Mail className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        autoComplete="email"
                        className="pl-8"
                        aria-invalid={!!state?.error?.email}
                    />
                </div>
                {state?.error?.email && (
                    <p className="text-sm text-destructive">
                        {state.error.email.join(" ")}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Lock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        className="pr-8 pl-8"
                        aria-invalid={!!state?.error?.password}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={
                            showPassword ? "Hide password" : "Show password"
                        }
                        className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        {showPassword ? (
                            <EyeOff className="size-4" />
                        ) : (
                            <Eye className="size-4" />
                        )}
                    </button>
                </div>
                {state?.error?.password && (
                    <div className="rounded-lg bg-muted px-3 py-2 text-sm text-foreground">
                        <p className="font-medium">Password must:</p>
                        <ul className="mt-1 list-inside list-disc space-y-0.5 text-muted-foreground">
                            {state.error.password.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <SubmitButton>Sign up</SubmitButton>
        </form>
    );
};

export default SignUpForm;