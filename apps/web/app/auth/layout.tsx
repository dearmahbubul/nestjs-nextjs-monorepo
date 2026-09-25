import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-muted/40 px-4 py-10">
            <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute top-1/3 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl" />
            {children}
        </div>
    );
};

export default AuthLayout;