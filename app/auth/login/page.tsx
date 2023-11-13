import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-2 p-2">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
        <label className="label">
          <span className="label-text-alt text-error">
            Email is not registered!
          </span>
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">
          <IoLogInOutline size={24} />
          Login
        </button>
      </div>

      <div className="divider">Or</div>

      <button className="btn btn-secondary btn-outline">
        <AiOutlineGoogle size={24} />
        Login With Google
      </button>

      <div className="flex justify-end mt-4">
        <Link
          href={"/auth/register"}
          className="link-hover link-primary flex gap-2 items-center"
        >
          Register
          <BsArrowRight />
        </Link>
      </div>
    </form>
  );
}
