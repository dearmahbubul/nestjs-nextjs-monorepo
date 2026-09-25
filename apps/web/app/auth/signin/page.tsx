import Link from "next/link";
import { LogIn } from "lucide-react";
import SignInForm from "./signInForm";
import { BACKEND_URL } from "@/lib/constants";

const SignInPage = () => {
    return (
        <main className="w-full max-w-sm">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-6 flex flex-col items-center gap-3 text-center">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                        <LogIn className="size-5" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">
                            Welcome back
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Sign in to your account to continue
                        </p>
                    </div>
                </div>

                <SignInForm />

                <div className="relative my-5">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs tracking-wider text-muted-foreground uppercase">
                        <span className="bg-card px-2">or</span>
                    </div>
                </div>

                <a
                    href={`${BACKEND_URL}/auth/google/login`}
                    className="flex h-8 w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-background text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
                >
                    Continue with Google
                </a>
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                    href="/auth/signup"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                    Sign up
                </Link>
            </p>
        </main>
    );
};

export default SignInPage;