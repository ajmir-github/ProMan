import Link from "next/link";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

export default function RegisterPage() {
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
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">
          <AiOutlineUserAdd size={24} />
          Register
        </button>
      </div>

      <div className="divider">Or</div>

      <button className="btn btn-secondary btn-outline">
        <AiOutlineGoogle size={24} />
        Register With Google
      </button>

      <div className="flex justify-end mt-4">
        <Link
          href={"/auth/login"}
          className="link-hover link-primary flex gap-2 items-center"
        >
          Login
          <BsArrowRight />
        </Link>
      </div>
    </form>
  );
}
