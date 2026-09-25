import Link from "next/link";
import { UserPlus } from "lucide-react";
import SignUpForm from "@/app/auth/signup/signUpForm";

const SignUpPage = () => {
    return (
        <main className="w-full max-w-sm">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-6 flex flex-col items-center gap-3 text-center">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                        <UserPlus className="size-5" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Get started in just a few minutes
                        </p>
                    </div>
                </div>

                <SignUpForm />
            </div>

            <p className="mt-4 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    href="/auth/signin"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </main>
    );
};

export default SignUpPage;