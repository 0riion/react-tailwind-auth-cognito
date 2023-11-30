import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <section className="w-full h-screen bg-black flex justify-center items-center">
      <div className="max-w-xs">
        <RegisterForm />
      </div>
    </section>
  )
};
