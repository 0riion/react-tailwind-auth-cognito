import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <section className="w-full h-screen bg-black flex justify-center items-center">
      <div className="max-w-xs">
        <LoginForm />
      </div>
    </section>
  )
};
