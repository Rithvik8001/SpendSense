import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-green-50 to-orange-100">
      <SignIn fallbackRedirectUrl="/dashboard" />
    </div>
  );
}
