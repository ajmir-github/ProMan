import { ReactNode } from "react";
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left gap-2 grid">
          <h1 className="text-5xl font-bold text-primary">
            ProMan (Project Manager)
          </h1>
          <h1 className="text-xl text-secondary">Developed by Ajmir Raziqi</h1>
          <h3 className="text-xl ">Login now!</h3>
          <p className="py-2">
            ProMan is a project manager application that is designed to help
            individuals and teams plan, execute, and manage projects
            efficiently. These applications typically provide a range of tools
            and features to facilitate project management activities.
          </p>
        </div>
        <div className="flex-shrink-0 w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
