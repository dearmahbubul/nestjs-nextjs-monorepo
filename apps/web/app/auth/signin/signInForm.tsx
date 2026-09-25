"use client";
import Link from "next/link";
import React, { useActionState, useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signIn } from "@/lib/auth";

const SignInForm = () => {
    const [state, action] = useActionState(signIn, undefined);
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
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Mail className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
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
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                        href="#"
                        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div>
                <div className="relative">
                    <Lock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
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
                    <p className="text-sm text-destructive">
                        {state.error.password.join(" ")}
                    </p>
                )}
            </div>

            <SubmitButton>Sign in</SubmitButton>
        </form>
    );
};

export default SignInForm;