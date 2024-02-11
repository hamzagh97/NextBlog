import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const Login = () => {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    await signIn("credentials", {
      ...data,
      callbackUrl: `/`,
      redirect: false,
    }).then((callback) => {
      // router.replace("/");
      setLoading(false);
    });
  };

  //  const onSubmit = async (data) => {
  //    setLoading(true);
  //    await axios
  //      .post("http:localhost:5000/login", {
  //        email: data.email,
  //        password: data.password,
  //      })
  //      .then((res) => {
  //        if (res.status === 200) {
  //          context.login(res.data.token, res.data.data);
  //          navigate("/", { replace: true });
  //        }
  //      })
  //      .catch((error) => {
  //        if (error.response) {
  //          setErrorMessage(error.response.data.error.message);
  //        }
  //      });
  //    setLoading(false);
  //  };

  if (session?.status === "authenticated") {
    router.push("/");
    return null;
  }

  return (
    <>
      <div className="my-20 flex flex-col items-center">
        <div className="text-center font-poppins text-4xl font-black">
          Login
        </div>
        <form className="mt-10 max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="email"
            className="mb-3 mt-5 w-full rounded border-2 border-black p-3 outline-none"
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
            value={"hamzagh168@gmail.com"}
          />

          {errors.email && errors.email.type === "required" && (
            <span className="font-poppins font-medium text-red-600">
              This field is required
            </span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="font-poppins font-medium text-red-600">
              Entered value does not match email format
            </span>
          )}

          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="mb-3 mt-5  w-96 rounded border-2 border-black p-3 outline-none"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              })}
              value={"12031986aaa"}
            />
            <span
              onClick={togglePassword}
              className="absolute right-1 top-6 cursor-pointer rounded p-3 hover:bg-gray-300"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
          </div>

          {errors.password && errors.password.type === "required" && (
            <span className="font-poppins font-medium text-red-600">
              This field is required
            </span>
          )}

          {errors.password && errors.password.type === "pattern" && (
            <span className="font-poppins font-medium text-red-600">
              Password should have minimum eight characters, at least one letter
              and one number:
            </span>
          )}

          <div className="font-poppins font-medium text-red-600">
            {/* {errorMessage} */}
          </div>

          <button
            type="submit"
            className="mt-5 w-full max-w-md rounded bg-violet-600 p-3 font-poppins text-lg font-black capitalize text-white hover:bg-violet-900"
          >
            {loading ? "loading..." : "login"}
          </button>
        </form>
        <p className="mt-5 font-black text-black">
          dont have an account ?{" "}
          {/* <Link to="/register" className="text-violet-900">
            register »
          </Link> */}
        </p>
      </div>
    </>
  );
};

export default Login;
