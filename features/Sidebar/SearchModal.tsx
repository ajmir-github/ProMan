"use client";
import { Modal } from "@/components/Modal";
import { AiOutlineSearch } from "react-icons/ai";
import { Dispatch } from "react";

export default function SearchModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<boolean>;
}) {
  return (
    <Modal title="Search" open={open} setOpen={setOpen}>
      <form className="grid gap-2 w-full">
        <select className=" select select-bordered">
          <option>Teams</option>
          <option>People</option>
        </select>
        <input
          type="search"
          placeholder="Type here"
          className="  input input-bordered"
        />

        <button className=" btn btn-outline btn-primary" disabled>
          <AiOutlineSearch size={24} />
          Find
        </button>
      </form>
    </Modal>
  );
}
