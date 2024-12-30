import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-green-50 to-orange-100">
      <SignUp fallbackRedirectUrl="/dashboard" />
    </div>
  );
}
